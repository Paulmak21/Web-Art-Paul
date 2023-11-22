import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from '../store/appContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

export const Home = () => {
	const { store, actions } = useContext(Context);
  
  const handleFavoriteClick = (artwork) => {
    if (!store.favorites[artwork.id]) {
      actions.addOrRemoveFavorite(artwork.id);
    }
  };

	useEffect(() => {
		actions.getInfo();
}, []);

  return (<>
	<h1 className="text-white mb-5 mt-2 text-center ">Welcome to the Art Work Gallery</h1>
	<h3 className="text-white text-center">Explore our collection of beautiful artworks. Find your inspiration or the perfect piece for your collection.</h3>
    <div className="container mt-5 ">
      <div className="row overflow-auto">
        {store.cardsInfo.map((artwork, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-dark">
              <img src={artwork.img} className="card-img-top" alt="..." />
              <div className="card-body overflow-hidden">
                <h5 className="card-title">{artwork.title}</h5>
                <p className="card-text">{artwork.text}</p>
                <button className="btn btn-primary m-2">More Info</button>
                <button className="btn btn-info m-2" onClick={() => actions.addOrRemoveFavorite(artwork.id)}s>
                  <FontAwesomeIcon icon={store.favorites.includes(artwork.id) ? faHeart : faHeartRegular} />
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