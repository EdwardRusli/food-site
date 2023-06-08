
import React, { useContext, useState } from "react";
import { AppContext } from "./App";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Recipes from "./Recipes"

const FoodList = () => {

    const {foodList} = useContext(AppContext);
    const [showRecipes, setShowRecipes] = useState(false);
    const [currentFood, setCurrentFood] = useState(null);

    const displayFood = (p_food, p_index) => {        
        return (
            <div className="col mt-3">
                <div className="card shadow-sm rounded">
                    <div className="card-body">
                        <div className="rounded shadow-sm mb-3 pt-1 pb-1 border">
                            <h5 className="card-title">{p_food['title']}</h5>
                        </div>
                        <img className="img-fluid p-3 mb-3 img-thumbnail" src={p_food['image']}></img>
                        <div className="d-grid">
                            <button type="button" className="btn btn-primary">Add</button>
                            <button type="button" className="btn btn-primary mt-2" onClick={() => {
                                setShowRecipes(true);
                                setCurrentFood(p_food);
                            }}>Recipes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (foodList.length > 0)
    {
        return (
            <div className="FoodList mt-5">
                <div className="container-fluid text-center">
                    <div className="row row-cols-5">
                        {foodList.map((food, index) => (displayFood(food, index)))}
                        <Modal show={showRecipes} onHide={() => setShowRecipes(false)}>
                            <Modal.Header closeButton>
                            <Modal.Title>Recipes</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><Recipes p_food={currentFood}/></Modal.Body>
                            <Modal.Footer></Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodList