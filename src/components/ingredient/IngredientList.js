import React from "react";
import Ingredient from "./Ingredient";


const IngredientList = ({ingredients}) => {

    const ingredientElements = ingredients.map(
        (ingredient) => {
            // Using spread operator here instead of ingredient={ingredient}.
            return (
                <Ingredient key={ingredient.id} {...ingredient}/>
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
