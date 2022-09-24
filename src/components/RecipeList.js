import React from "react";
import Recipe from "./Recipe";


const RecipeList = () => {

    const list = ["Cookie", "Popcorn", "Isse", "Jocke"];

    // Add logic here

    return (
        <>
            {list.map(item => <Recipe name={item}/>)}
        </>
    );
}

export default RecipeList;
