import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from 'components/layout';
import Loading from 'components/loading';
import BackCTA from 'components/backCTA';
import PeopleDescription from 'components/peopleDescription';
import { SWAPI_URL } from 'utils/constants';

const PeopleDetail = () => {
  let { peopleId } = useParams();
  const navigate = useNavigate();
  const [people, setPeople] = useState();
  const [movies, setMovies] = useState([]);

  const fetchPeople = useCallback(async () => {
    let res = await fetch(`${SWAPI_URL}/people/${peopleId}`);
    res = await res.json();
    setPeople(res);
  }, [peopleId]);

  const fetchMovies = useCallback(async () => {
    if (!people || !people?.films) return;

    const getMovies = people.films?.map(async (url) => {
      const res = await fetch(url);
      return await res.json();
    });
    const allMovies = await Promise.all(getMovies);

    setMovies(allMovies);
  }, [people]);

  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return people ? (
    <Layout>
      <div className="py-6 super-container lg:py-10">
        <div className="inline-flex mb-4 lg:mb-6">
          <BackCTA onClick={() => navigate(-1)} />
        </div>
        <PeopleDescription people={people} movies={movies} />
      </div>
    </Layout>
  ) : (
    <Loading />
  );
};

export default PeopleDetail;
