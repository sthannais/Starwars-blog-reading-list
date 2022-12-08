import { string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      favorite: [],
    },
    actions: {
      loadingData: (str) => {
        fetch("https://swapi.dev/api/" + str + "/")
          .then((res) => res.json())
          .then((data) => setStore({ [str]: data.results }))
          .catch((error) => console.log(error));
      },
      addFavorite: (item) => {
        const store = getStore();
        const validate = store.favorite.includes(item);
        if (store.favorite == [] || !validate) {
          setStore({ favorite: [...store.favorite, item] });
        }
      },

      deleteFavorite: (id) => {
        const store = getStore();
        const updatedList = [...store.favorite];
        updatedList.splice(id, 1);
        setStore({ favorite: [...updatedList] });
      },
    },
  };
};

export default getState;
