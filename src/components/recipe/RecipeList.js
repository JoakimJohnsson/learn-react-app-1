import React, {useContext} from "react";
import Recipe from "./Recipe";
import {handleAddRecipe} from "../../functions";
import {v4 as uuidv4} from "uuid";
import {RecipeContext} from "../../App";


const RecipeList = () => {

    const {recipes, setRecipes} = useContext(RecipeContext);

    return (
        <main className={"container-fluid p-5"}>
            <div className={"row"}>
                <div className={"col-12"}>
                    <div className={"mb-5"}>
                        <h1 className={"display-1"}>Cooking with react!</h1>
                        <p className={"lead"}>With a great cooking app...</p>
                        <p>...comes great responsibility.</p>
                        <button
                            className={"btn btn-primary"}
                            onClick={() => handleAddRecipe(recipes, setRecipes)}
                        >
                            Add new recipe
                        </button>
                    </div>
                    <div className={"row"}>
                        {/* This is a row. Each Recipe component renders a card wrapped in a col.
                            The col handles size and responsive behaviour of the card. */}
                        {
                            recipes.map((recipe) => {
                                    return (
                                        <Recipe key={uuidv4()} recipe={recipe}/>
                                    );
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RecipeList;
