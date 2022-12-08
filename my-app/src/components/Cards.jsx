import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Planets from "./Planets";
import { people } from "../helper/people";
import { useState, useEffect, useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Context } from "../store/Context";

function Cards(props) {
  const [peopleCards, setPeopleCards] = useState([]);
  useEffect(() => {
    peopleData();
  }, []);

  const peopleData = async () => {
    const result = await people();
    setPeopleCards(result.results);
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
      <h1 className="mt-3 text-danger mx-5 px-5">Characters</h1>
      <div className="container mt-4">
        <div className="row">
          <div className="card-deck overflow-auto">
            <div className="d-flex flex-row flex-nowrap">
              {peopleCards.map((element, key) => (
                <div className="card mx-3 col-md-4" key={key}>
                  <img
                    src="https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg"
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body me-4">
                    <h4 className="card-title">{element.name}</h4>
                    <p className="card-text">Gender: {element.gender}</p>
                    <p className="card-text">
                      Hair Color: {element.hair_color}
                    </p>
                    <p className="card-text"> Eye-Color: {element.eye_color}</p>
                    <div className="me-5 d-flex justify-content-around">
                      <Link
                        className="me-5 nav-link active"
                        to={{
                          pathname: `/detailsCards/${
                            element.url.split("people/")[1]
                          }`,
                        }}
                      >
                        <Button
                          className="btn btn-outline-primary me-5"
                          text={"Learn more!"}
                        />
                      </Link>
                      <button
                        className="btn btn-outline-warning icon"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Planets />
    </>
  );
}

export default Cards;
