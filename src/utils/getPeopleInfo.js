export function getPeopleInfo(results) {
  let peoplesAPI = [];
  let speciesNames = [];

  const peoplesInfo = results?.map((result) => ({
    urls: result.people,
    speciesName: result.name,
  }));

  // Make the peoples API Url as flat array
  peoplesAPI = peoplesInfo.map((people) => people.urls).flat(1);
  // Get the species name for each people Url
  speciesNames = peoplesAPI.map(
    (people) => peoplesInfo.find((info) => info.urls.some((url) => url === people)).speciesName,
  );

  return { peoplesAPI, speciesNames };
}
