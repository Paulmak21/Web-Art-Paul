import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from '../store/appContext'

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [addFavorite, setAddFavorite] = useState(false);

	useEffect(() => {
		actions.loadSomeData();
}, []);

  return (<>
	<h1 className="text-white mb-5 mt-2 text-center ">Welcome to the Art Work Gallery</h1>
	<h3 className="text-white text-center">Explore our collection of beautiful artworks. Find your inspiration or the perfect piece for your collection.</h3>
    <div className="container mt-5">
      <div className="row overflow-auto">
        {store.cardsInfo.map((artwork, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-white">
              <img src={artwork.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{artwork.title}</h5>
                <p className="card-text">{artwork.text}</p>
                <button className="btn btn-primary m-2">More Info</button>
                <button className="btn btn-info m-2">
                  <i className="fa fa-heart m-1"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};