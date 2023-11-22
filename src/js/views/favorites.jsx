import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import { Context } from "../store/appContext";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    const favoriteItems = store.favorites.map(itemId => {
	return store.cardsInfo.find(item => item.id === itemId);
    });

    return (
	<div className="container">
	    <div className="row">
		<h1 className='text-white text-center'>Welcome to your</h1>
		<h3 className='text-white text-center mb-5'>Favorites Cards</h3>
		  {favoriteItems.map((artwork, index) => {
			return (
			    <div key={index} className="col-md-4 mb-4">
				  <div className="card text-dark">
					<img src={artwork.img} className="card-img-top" alt="..." />
					<div className="card-body overflow-hidden">
					    <h5 className="card-title">{artwork.title}</h5>
					    <p className="card-text">{artwork.text}</p>
					    <button className="btn btn-primary m-2">More Info</button>
					    <button className="btn btn-info m-2" onClick={() => actions.addOrRemoveFavorite(artwork.id)}>
						  <FontAwesomeIcon icon={store.favorites.includes(artwork.id) ? faHeart : faHeartRegular} />
					    </button>
					</div>
				  </div>
			    </div>
			);
		  })}
	    </div>
	</div>
  );
};