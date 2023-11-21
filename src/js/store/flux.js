import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cardsInfo: []
		},
		actions: {
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadSomeData:  async () => {
				axios.get('https://api.artic.edu/api/v1/artworks')
				.then(response => {
					let store = getStore();
				  setStore({ cardsInfo: [...store.cardsInfo, ...response.data.data] });
				})
				.catch(error => {
				  console.error('There was an error!', error);
				});
			},
		}
	};
};

export default getState;
