import React, { useContext, useState } from "react";
import { AppContext } from "../pages/Main";

import axios from "axios";

import Modal from "react-bootstrap/Modal";

import Recipes from "./Recipes";

import Cookies from "js-cookie";

const FoodList = () => {
  const { foodList } = useContext(AppContext);
  const [showRecipes, setShowRecipes] = useState(false);
  const [currentFood, setCurrentFood] = useState(null);

  const addFood = async (p_food) => {

    axios.defaults.xsrfHeaderName = "X-CSRFToken";

    try {
      const response = await axios.post(
        "http://localhost:8000/api/add_food",
        {
          name: p_food["title"],
          carb: p_food["nutrition"]["nutrients"][3]["amount"] * 1000, // index 3 carb, convert g to mg
          fat: p_food["nutrition"]["nutrients"][1]["amount"] * 1000, // index 1 fat, convert g to mg
          protein: p_food["nutrition"]["nutrients"][8]["amount"] * 1000, // index 8 protein, convert g to mg
          calorie: p_food["nutrition"]["nutrients"][0]["amount"] * 1000, // // index 0 calories, convert kcal to cal
        },
        {
          headers: { 
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get('csrftoken'),
          },
          withCredentials: true,
        }
      )
    } catch (err) {
      console.log(err)
    }
  }

  const displayFood = (p_food, p_index) => {
    return (
      <div className="col mt-3">
        <div className="card shadow-sm rounded">
          <div className="card-body">
            <div className="rounded shadow-sm mb-3 pt-1 pb-1 border">
              <h5 className="card-title">{p_food["title"]}</h5>
            </div>
            <img
              className="img-fluid p-3 mb-3 img-thumbnail"
              src={p_food["image"]}
            ></img>
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  addFood(p_food);
                }}>
                Add
              </button>
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={() => {
                  setShowRecipes(true);
                  setCurrentFood(p_food);
                }}
              >
                Recipes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (foodList.length > 0) {
    return (
      <div className="FoodList mt-5">
        <div className="container-fluid text-center">
          <div className="row row-cols-5">
            {foodList.map((food, index) => displayFood(food, index))}
            <Modal show={showRecipes} onHide={() => setShowRecipes(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Recipes</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Recipes p_food={currentFood} />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
};

export default FoodList;
