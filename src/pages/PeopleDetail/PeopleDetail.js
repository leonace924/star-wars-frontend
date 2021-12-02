import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/layout';
import Loading from 'components/loading';
import { SWAPI_URL } from 'utils/constants';

const PeopleDetail = () => {
  let { peopleId } = useParams();
  const [people, setPeople] = useState();

  const fetchPeople = useCallback(async () => {
    let res = await fetch(`${SWAPI_URL}/people/${peopleId}`);
    res = await res.json();
    setPeople(res);
  }, [peopleId]);

  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  return people ? (
    <Layout>
      <div className="super-container">{peopleId}</div>
    </Layout>
  ) : (
    <Loading />
  );
};

export default PeopleDetail;
