
import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Recipes = ({p_food}) => {

    const showCaloricBreakdown = () => {
        return (
            <p>
                % Carbs: {p_food['nutrition']['caloricBreakdown']['percentCarbs']} <br/>
                % Fat: {p_food['nutrition']['caloricBreakdown']['percentFat']} <br/>
                % Protein: {p_food['nutrition']['caloricBreakdown']['percentProtein']}
            </p>
        )
    }

    const showFlavonoids = () => {

        const showEachFlavonoid = (flavonoid) => {
            if (flavonoid['amount'] != 0) {
                return (
                    <p>{flavonoid['name']}: {flavonoid['amount']} {flavonoid['unit']} <br/></p>
                )
            }
        }

        return (
            <div>
                {p_food['nutrition']['flavonoids'].map((flavonoid, index) => (showEachFlavonoid(flavonoid)))}
            </div>
        )
    }

    const showIngredients = () => {

        const showEachIngredient = (ingredient) => {
            return (
                <p>{ingredient['name']}: {ingredient['amount']} {ingredient['unit']}</p>
            )
        }

        return (
            <div>
                {p_food['nutrition']['ingredients'].map((ingredient, index) => showEachIngredient(ingredient))}
            </div>
        )
    }

    const showNutritients = () => {

        const showEachNutritient = (nutritient) => {
            return (
                <p>{nutritient['name']}: {nutritient['amount']} {nutritient['unit']}</p>
            )
        }

        return (
            <div>
                {p_food['nutrition']['nutrients'].map((nutritient, index) => showEachNutritient(nutritient))}
            </div>
        )
    }

    return (
        <div className="Recipes">
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Caloric Breakdown</Accordion.Header>
                <Accordion.Body>{showCaloricBreakdown()}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Flavonoids</Accordion.Header>
                <Accordion.Body>{showFlavonoids()}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Ingredients</Accordion.Header>
                <Accordion.Body>{showIngredients()}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Nutritients</Accordion.Header>
                <Accordion.Body>{showNutritients()}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
    )
}

export default Recipes