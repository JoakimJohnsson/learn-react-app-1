import React from "react";
import Recipe from "./Recipe";


const RecipeList = ({recipes}) => {

    return (
        <div className={"container-fluid p-5"}>
            <div className={"row"}>
                <div className={"col-12"}>
                    <div className={"mb-5"}>
                        <h1 className={"display-1"}>Cooking with react!</h1>
                        <p className={"lead"}>With a great cooking app...</p>
                        <p>...comes great responsibility.</p>
                        <button className={"btn btn-primary"}>Add new recipe</button>
                    </div>
                    <div className={"row"}>
                        {
                            recipes.map((recipe) => {
                                    return (
                                        <Recipe key={recipe.id} recipe={recipe}/>
                                    );
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeList;
