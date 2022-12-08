import React from "react";
import img from "../img/800x600.gif";
import { detailsPlanets } from "../helper/planets";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsPlanets = () => {
  const { id } = useParams();
  console.log(id);
  const [detailPlanets, setDetailPlanets] = useState([]);

  useEffect(() => {
    planetsDetail();
  }, []);

  const planetsDetail = async () => {
    const result = await detailsPlanets(id);
    setDetailPlanets(result);
    console.log(result);
    return result;
  };
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img className="card-img-top" src={img} alt="" />
          </div>
          <div className="col-7">
            <h2 className="text-center">{detailPlanets.name}</h2>
            <p className="text-center fs-5">
              Set ut perspiciatis unde omnis iste natus<br></br>
              error sit voluptatem accusantium<br></br>
              doloremque laudantium, totam rem<br></br>
              aperiam, eaque ipsa quae ab illo<br></br>
              inventore veritatis et quasi architecto<br></br>
              beatae vitae dicta sunt explicabo. Nemo<br></br>
              enim ipsam voluptatem quia voluptas sit<br></br>
              espernatur
            </p>
          </div>
        </div>
      </div>
      <hr className="border border-danger"></hr>
      <div className="container">
        <div className="row">
          <div className="col-2 text-center text-danger">
            <h6>Name</h6>
            <p>{detailPlanets.name}</p>
          </div>
          <div className="col-2 text-center text-danger">
            <h6>
              Climate<br></br>
            </h6>
            <p>{detailPlanets.climate}</p>
          </div>
          <div className="col-2 text-center text-danger">
            <h6>Population</h6>
            <p>{detailPlanets.population}</p>
          </div>
          <div className="col-2 text-center text-danger">
            <h6>
              Orbital<br></br>
              Period
            </h6>
            <p>{detailPlanets.orbital_period}</p>
          </div>
          <div className="col-2 text-center text-danger">
            <h6>
              Rotation<br></br>
              Period
            </h6>
            <p>{detailPlanets.rotation_period}</p>
          </div>
          <div className="col-2 text-center text-danger">
            <h6>Diameter</h6>
            <p>{detailPlanets.diameter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPlanets;
