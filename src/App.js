import React, {useState} from "react";
import RecipeList from "./components/recipe/RecipeList";
import {mockData} from "./components/mockData";


function App() {

    const [recipes, setRecipes] = useState(mockData);

    return (
        <RecipeList recipes={recipes} setRecipes={setRecipes}/>
    );
}

export default App;
