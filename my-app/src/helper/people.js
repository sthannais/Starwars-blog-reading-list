export const people = async () => {
  const url = "https://swapi.dev/api/people/";
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export const detailsPeople = async (id) => {
  const url = `https://swapi.dev/api/people/${id}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};
