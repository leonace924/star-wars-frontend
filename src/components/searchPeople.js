import React, { useCallback, useState, useEffect } from 'react';
import { debounce } from 'lodash';
import Loading from 'components/loading';
import SearchBar from 'components/searchbar';
import PeopleCard from 'components/peopleCard';
import Pagination from 'components/pagination';
import { useGlobal } from 'stores/global-store';
import { SWAPI_URL } from 'utils/constants';

const SearchPeople = () => {
  const [data, setData] = useState();
  const [query, setQuery] = useState('');
  const [peopleAPI, setPeopleAPI] = useState('');

  const [searchList, setSearchList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const isNext = useGlobal((state) => state.isNext);
  const setIsSearch = useGlobal((state) => state.setIsSearch);

  useEffect(() => {
    if (!data) return;
    setSearchList([]);
    isNext ? setPeopleAPI(data.next) : setPeopleAPI(data.previous);
  }, [currentPage]);

  useEffect(() => {
    setPeopleAPI(`${SWAPI_URL}/people/?search=${query}`);
    setIsSearch(query.length > 0);
  }, [query]);

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

  const fetchPeople = useCallback(async () => {
    if (query.length < 1) {
      setData([]);
      setSearchList([]);
      setCurrentPage(1);
      return;
    }

    let res = await fetch(peopleAPI);
    res = await res.json();
    setData(res);
    setSearchList(res.results);
    if (currentPage === 1) setTotalPages(Math.ceil(res.count / 10));
  }, [peopleAPI]);

  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  return (
    <>
      <div className="super-container">
        <SearchBar debouncedChangeHandler={debouncedChangeHandler} />

        {query.length > 0 && (
          <>
            <div className="mt-6 lg:mt-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
                {searchList.length > 0 ? (
                  searchList.map((people) => <PeopleCard key={people.name} people={people} />)
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </>
        )}
      </div>
      {query.length > 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default SearchPeople;
