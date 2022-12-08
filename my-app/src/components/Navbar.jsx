import React, { useContext } from "react";
import img from "../img/Star-Wars-Logo.jpg";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { Context } from "../store/Context";

function Navbar() {
  const { store, actions } = useContext(Context);
  console.log(store, "hhhhh");
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logoStarwars ms-5" alt="" src={img} />
        </Link>
        <div className="dropdown me-5">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
            <span className="mx-2 bg-secondary">{store.favorite.length}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorite.length > 0 ? (
              store.favorite.map((element, index) => {
                return (
                  <li
                    className="dropdown-item d-flex justify-content-between"
                    key={index}
                  >
                    <div className="text-favorite">{element}</div>
                    <FaTrashAlt
                      className="btn-delete"
                      onClick={() => {
                        actions.deleteFavorite({ index });
                      }}
                    />
                  </li>
                );
              })
            ) : (
              <li>
                <Link className="dropdown-item">No Favorites</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
