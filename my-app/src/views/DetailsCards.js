import React from "react";
import img from "../img/800x600.gif";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { detailsPeople } from "../helper/people";

const DetailsCards = () => {
  const { id } = useParams();
  console.log(id);
  const [detailPeople, setDetailPeople] = useState([]);

  useEffect(() => {
    peopleDetail();
  }, []);

  const peopleDetail = async () => {
    const result = await detailsPeople(id);
    setDetailPeople(result);
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
            <h2 className="text-center">{detailPeople.name}</h2>
            <p className="text-center fs-5">
              Set ut perspiciatis unde omnis iste natus<br></br>
              error sit voluptatem accusantium<br></br>
              doloremque laudantium, totam rem<br></br>
              aperiam, eaque ipsa quae ab illo<br></br>
              inventore veritatis et quasi architecto<br></br>
              beatae vitae dicta sunt explicabo. Nemo<br></br>
              enim ipsam voluptatem quia voluptas sit<br></br>
              espernatur aut odit aut fugit, sed quia<br></br>
              consequutur magni dolores eos qui<br></br>
              ratione voluptate sequi.
            </p>
          </div>
        </div>
      </div>
      <hr className="border border-danger"></hr>
      <div className="container">
        <div className="row">
          <div className="col-2 text-center text-danger">
            <h6>
              Name<br></br>
              Year
            </h6>
            <p>{detailPeople.name}</p>
          </div>
          <div className="col-2 text-center text-danger">
            <h6>
              Birth<br></br>
              Year
            </h6>
            <p>{detailPeople.birth_year}</p>
          </div>
          <div className="col-2 text-center text-danger">
            <h6>Gender</h6>
            <p>{detailPeople.gender}</p>
          </div>
          <div className="col-2 text-center text-danger">
            <h6>Height</h6>
            <p>{detailPeople.height}</p>
          </div>
          <div className="col-2 text-center text-danger">
            <h6>
              Skin<br></br>
              Color
            </h6>
            <p>{detailPeople.skin_color}</p>
          </div>
          <div className="col-2 text-center text-danger">
            <h6>
              Eye<br></br>
              Color
            </h6>
            <p>{detailPeople.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCards;
