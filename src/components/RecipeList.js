import React from "react";
import Recipe from "./Recipe";


const RecipeList = ({recipes}) => {

    // Add logic here

    return (
        <div className={"container-fluid p-5"}>
            <div className={"row"}>
                <div className={"col-12"}>
                    <h1>Cooking with react!</h1>
                    <p className={"lead"}>
                        A great cooking app!
                    </p>
                    <div className={"row"}>
                    {
                        recipes.map((recipe) => {
                                return (
                                    <Recipe key={recipe.id} recipe={recipe}/>
                                )
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
