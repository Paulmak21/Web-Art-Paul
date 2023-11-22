import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cardsInfo: [],
			favorites: [],
		},
		actions: {
			addOrRemoveFavorite: (itemId) => {
				const store = getStore();
				const isFavorite = store.favorites.includes(itemId);
				
				let newFavorites;
				if (isFavorite) {
				  newFavorites = store.favorites.filter(id => id !== itemId);
				} else {
				  newFavorites = [...store.favorites, itemId];
				}
			    
				setStore({ ...store, favorites: newFavorites });
			    },
			    getInfo: async () => {
				axios.get('https://api.artic.edu/api/v1/artworks?ids=208131,240935,142595,120300,13454,151363,102611,191556,117266,129884,137125,126414&fields=id,title,image_id')
				  .then(response => {
				    const artworks = response.data.data.map(artwork => ({
					...artwork,
					img: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,1000/0/default.jpg`,
				    }));
				    setStore({ cardsInfo: artworks });
				  })
				  .catch(error => {
				    console.error('There was an error!', error);
				  });
			    },
			getImage: async() => {
				axios.get('https://api.artic.edu/api/v1/artworks')
			},
		}
	};
};

export default getState;
