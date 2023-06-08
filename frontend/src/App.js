
import React, {createContext, useState} from 'react'
import axios from "axios"

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import FoodList from './FoodList';

export const AppContext = createContext(null);

const App = () => {

	// const register = (p_username, p_password, p_email) => {
	// 	axios.post("http://127.0.0.1:8000/api/register/", {
	// 		"username": p_username,
	// 		"password": p_password,
	// 		"email": p_email
	// 	},{
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	}).then(res => {
	// 		console.log(res);
	// 	})
	// }

	const [shouldRenderFoodList, setShouldRenderFoodList]= useState(false);
	const [foodList, setFoodList] = useState([]);

	const requestFoodList = (p_query) => {
		const params = {
			apiKey: "f4bbe7c9c7554d05909632deaa0d4c98", // api key dari spoonacular
			query: p_query,
			addRecipeNutrition: true
		}
		axios.get("https://api.spoonacular.com/recipes/complexSearch", {params}).then(res => {
			setFoodList(res.data.results);
			setShouldRenderFoodList(true);
			console.log(res.data.results);
		})
	}

	return (
		<AppContext.Provider value={{requestFoodList, foodList}}>
		<div className='container-fluid'>
			<div className='row'>
				<div className='col'><NavBar/></div>
			</div>
			<div className='row'>
				<div className='col'><SearchBar/></div>
			</div>
			<div className='row'>
				<div className='col'>
					{shouldRenderFoodList ? (<FoodList/>) : (<div></div>)}
				</div>
			</div>
		</div>
		</AppContext.Provider>
	)
}

export default App;
