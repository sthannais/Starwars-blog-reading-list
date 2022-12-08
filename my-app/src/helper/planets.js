const planets = async () => {
  const url = "https://swapi.dev/api/planets";
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export const detailsPlanets = async (id) => {
  const url = `https://swapi.dev/api/planets/${id}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export default planets;
