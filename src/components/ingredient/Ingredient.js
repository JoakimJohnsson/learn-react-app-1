import React from "react";


// Props coming from spread operator in IngredientList.
const Ingredient = ({name, amount}) => {

    return (
        <li className={"list-group-item"}><span className={"h6"}>{name}:</span> {amount}</li>
    );
}

export default Ingredient;
