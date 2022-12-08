import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useState, useEffect, useContext } from "react";
import planets from "../helper/planets";
import { Context } from "../store/Context";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Planets() {
  const [planetsCards, setPlanetsCards] = useState([]);
  useEffect(() => {
    planetsData();
  }, []);

  const planetsData = async () => {
    const result = await planets();
    setPlanetsCards(result.results);
    return result;
  };

  const { store, actions } = useContext(Context);

  const addFavorite = (nameFavorite) => {
    if (store.favorite.includes(nameFavorite)) {
      actions.deleteFavorite(nameFavorite);
    } else {
      actions.addFavorite(nameFavorite);
    }
  };

  return (
    <>
      <h1 className="mt-5 text-danger mx-5 px-5">Planets</h1>
      <div className="container mt-4">
        <div className="row">
          <div className="card-deck overflow-auto">
            <div className="d-flex flex-row flex-nowrap">
              {planetsCards.map((element, key) => (
                <div className="card mx-3 col-md-4" key={key}>
                  <img
                    src="https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2019/05/30/5cefe1834f1f9.r_1559229900517.0-0-916-455.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="ms-3 card-body">
                    <h4 className="card-title">{element.name}</h4>
                    <p>Population: {element.population}</p>
                    <p>Terrain: {element.terrain}</p>
                  </div>
                  <div className="me-5 mb-5 d-flex justify-content-around">
                    <Link
                      className="me-5 nav-link active"
                      to={{
                        pathname: `/detailsCards/${
                          element.url.split("people/")[1]
                        }`,
                      }}
                    >
                      <Button
                        className="btn btn-outline-primary mx-3"
                        text={"Learn more!"}
                      />
                    </Link>
                    <button
                      className="btn btn-outline-warning icon mx-4"
                      onClick={() => addFavorite(element.name)}
                    >
                      {store.favorite.includes(element.name) ? (
                        <FaHeart />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planets;
