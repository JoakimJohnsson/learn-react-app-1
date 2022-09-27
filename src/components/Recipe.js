import React from "react";
import IngredientList from "./IngredientList";


const Recipe = ({recipe}) => {

    return (
        // Wrapper div - handles size of cards by column.
        <div className={"col-12 col-md-6 col-lg-4 mb-4"}>
            {/* h-100 on card for an even height. */}
            <div className={"card h-100"}>
                <div className={"card-header"}>
                    <h2 className={"h3 card-title"}>{recipe.name}</h2>
                    <h3 className={"h5 card-subtitle text-muted"}>{recipe.description}</h3>
                    <div className={"p-2"}>
                        <button className={"btn btn-sm btn-primary me-2"}>Edit</button>
                        <button className={"btn btn-sm btn-outline-danger"}>Delete</button>
                    </div>
                </div>
                <div className={"card-body"}>
                    <p><span className={"h5"}>Cooking time:</span> {recipe.cookingTime}</p>
                    <p><span className={"h5"}>Servings:</span> {recipe.servings}</p>
                    <p className={"h5"}>Ingredients:</p>
                    <IngredientList ingredients={recipe.ingredients}/>
                    <p className={"h5"}>Instructions:</p>
                    <ol className={"list-group list-group-flush list-group-numbered mb-4"}>
                        {recipe.instructions.map((instruction, index) => {
                                return (
                                    <li className={"list-group-item"} key={index}>{instruction}</li>
                                );
                            }
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
