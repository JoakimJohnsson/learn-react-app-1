import React, {useState} from "react";
import RecipeList from "./components/recipe/RecipeList";
import {mockData} from "./components/mockData";


export const RecipeContext = React.createContext(undefined);

function App() {
    const [recipes, setRecipes] = useState(mockData);
    // Adding recipe state to context.
    // Using shorthand: {recipe: recipe, setRecipes: setRecipes} -> {recipes, setRecipes}.
    const recipeContextValue = {
        recipes, setRecipes
    };
    return (
        <RecipeContext.Provider value={recipeContextValue}>
            <RecipeList />
        </RecipeContext.Provider>
    );
}

export default App;
