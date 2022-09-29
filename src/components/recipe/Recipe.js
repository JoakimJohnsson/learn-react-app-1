import React, {useContext, useState} from "react";
import IngredientList from "./IngredientList";
import {handleDeleteRecipe} from "../../functions";
import {RecipeContext} from "../../App";
import RecipeEdit from "./RecipeEdit";
import InstructionList from "./InstructionList";


const Recipe = ({recipe}) => {

    const {recipes, setRecipes} = useContext(RecipeContext);
    const [showModal, setShowModal] = useState(false);
    const modalId = "modal-" + recipe.id;

    return (
        // Wrapper div - handles size of cards by column.
        <div className={"col-12 col-md-6 col-lg-4 mb-4"}>
            {/* h-100 on card for an even height. */}
            <div className={"card h-100"}>
                <div className={"card-header"}>
                    <h2 className={"h3 card-title"}>{recipe.name}</h2>
                    <h3 className={"h5 card-subtitle"}>{recipe.description}</h3>
                    <div className={"p-2"}>
                        <button
                            type={"button"}
                            className={"btn btn-sm btn-primary me-2"}
                            data-bs-toggle={"modal"}
                            data-bs-target={`#${modalId}`}
                            onClick={() => setShowModal(!showModal)}
                        >
                            Edit
                        </button>
                        <button
                            className={"btn btn-sm btn-danger"}
                            onClick={() => handleDeleteRecipe(recipe.id, recipes, setRecipes)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className={"card-body"}>
                    <p><span className={"h5"}>Cooking time:</span> {recipe.cookingTime}</p>
                    <p><span className={"h5"}>Servings:</span> {recipe.servings}</p>
                    <p className={"h5"}>Ingredients:</p>
                    <IngredientList ingredients={recipe.ingredients}/>
                    <p className={"h5"}>Instructions:</p>
                    <InstructionList instructions={recipe.instructions}/>
                </div>
                {/* Modal to edit the recipe */}
                <RecipeEdit modalId={modalId} showModal={showModal} setShowModal={setShowModal} recipe={recipe}/>
            </div>
        </div>
    );
}

export default Recipe;
