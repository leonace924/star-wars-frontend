import React, { useCallback, useEffect, useState } from 'react';
import Loading from 'components/loading';
import PeopleList from 'components/peopleList';
import Layout from 'components/layout';
import { getPeopleInfo } from 'utils/getPeopleInfo';
import { SWAPI_URL } from 'utils/constants';

const HomePage = () => {
  const [data, setData] = useState();
  const [peopleList, setPeopleList] = useState([]);

  const fetchSpecies = useCallback(async () => {
    let res = await fetch(`${SWAPI_URL}/species/`);
    res = await res.json();
    setData(res);
  }, []);

  const fetchPeoples = useCallback(async () => {
    if (!data || !data?.results) return;

    const { peoplesAPI, speciesNames } = getPeopleInfo(data.results);

    const getHumans = peoplesAPI?.map(async (url) => {
      const res = await fetch(url);
      return await res.json();
    });
    const peoples = await Promise.all(getHumans);

    setPeopleList(peoples.map((people, id) => ({ ...people, speciesName: speciesNames[id] })));
  }, [data]);

  useEffect(() => {
    fetchSpecies();
  }, [fetchSpecies]);

  useEffect(() => {
    fetchPeoples();
  }, [fetchPeoples]);

  return (
    <div className="">
      <Layout>{peopleList.length > 0 ? <PeopleList peoples={peopleList} /> : <Loading />}</Layout>
    </div>
  );
};

export default HomePage;
