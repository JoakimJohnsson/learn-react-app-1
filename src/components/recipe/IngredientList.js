import React from "react";
import Ingredient from "./Ingredient";
import {v4 as uuidv4} from "uuid";


const IngredientList = ({ingredients}) => {

    const ingredientElements = ingredients.map(
        (ingredient) => {
            // Using spread operator here instead of ingredient={ingredient}.
            return (
                <Ingredient key={uuidv4()} {...ingredient}/>
            );
        }
    )

    return (
        <ul className={"list-group list-group-flush mb-4"}>
            {ingredientElements}
        </ul>
    );
}

export default IngredientList;
