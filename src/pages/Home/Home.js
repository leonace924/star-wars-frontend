import React, { useCallback, useEffect, useState } from 'react';
import Layout from 'components/layout';
import Loading from 'components/loading';
import SearchPeople from 'components/searchPeople';
import PeopleList from 'components/peopleList';
import Pagination from 'components/pagination';
import { useGlobal } from 'stores/global-store';
import { getPeopleInfo } from 'utils/getPeopleInfo';
import { SWAPI_URL } from 'utils/constants';

const HomePage = () => {
  const [data, setData] = useState();
  const [speciesAPI, setSpeciesAPI] = useState(`${SWAPI_URL}/species/`);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const isNext = useGlobal((state) => state.isNext);
  const isSearch = useGlobal((state) => state.isSearch);
  const starPeoples = useGlobal((state) => state.starPeoples);
  const setStarPeoples = useGlobal((state) => state.setStarPeoples);

  const fetchSpecies = useCallback(async () => {
    let res = await fetch(speciesAPI);
    res = await res.json();
    setData(res);
  }, [speciesAPI]);

  const fetchPeoples = useCallback(async () => {
    if (!data || !data?.results) return;

    // Set the total page
    if (currentPage === 1) setTotalPages(Math.ceil(data.count / 10));

    const { peoplesAPI, speciesNames } = getPeopleInfo(data.results);
    const getHumans = peoplesAPI?.map(async (url) => {
      const res = await fetch(url);
      return await res.json();
    });
    const peoples = await Promise.all(getHumans);

    setStarPeoples(peoples.map((people, id) => ({ ...people, speciesName: speciesNames[id] })));
  }, [data]);

  console.log(data);

  useEffect(() => {
    if (!data) return;
    setStarPeoples([]);
    isNext ? setSpeciesAPI(data.next) : setSpeciesAPI(data.previous);
  }, [currentPage]);

  useEffect(() => {
    fetchSpecies();
  }, [fetchSpecies]);

  useEffect(() => {
    fetchPeoples();
  }, [fetchPeoples]);

  return (
    <Layout>
      <div className="py-6 lg:py-10 min-h-[50vh]">
        <div className="mb-6 lg:mb-8">
          <SearchPeople />
        </div>
        {starPeoples.length > 0 ? !isSearch && <PeopleList /> : <Loading />}
      </div>
      {!isSearch && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </Layout>
  );
};

export default HomePage;
