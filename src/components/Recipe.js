import React from "react";


const Recipe = ({recipe}) => {

    // Add logic here

    return (
        // Wrapper div - handles size of cards by column.
        <div className={"col-12 col-md-6 col-lg-4 mb-3"}>
            {/* h-100 on card for an even height. */}
            <div className={"card h-100"}>
                <div className={"card-header"}>
                    <h2>{recipe.name}</h2>
                    <button className={"btn btn-sm btn-primary me-2"}>Edit</button>
                    <button className={"btn btn-sm btn-outline-danger"}>Delete</button>
                </div>
                <div className={"card-body"}>
                    <p className={"label"}>Cooking time: {recipe.cookingTime}</p>
                    <p className={"label"}>Servings: {recipe.servings}</p>
                    <p className={"label"}>Instructions:</p>
                    <ol>
                        {recipe.instructions.map((instruction, index) => {
                                return (
                                    <li key={index}>{instruction}</li>
                                )
                            }
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
