import React, {useEffect, useState} from "react";
import RecipeList from "./components/recipe/RecipeList";
import {mockData} from "./components/mockData";

export const RecipeContext = React.createContext(undefined);

function App() {
    const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";
    // Set to true to clear local storage before loading recipes.
    const clearLocalStorage = false;

    // Loading recipes from mock data or local storage.
    const [recipes, setRecipes] = useState(() => {
        // Clear local storage to reset app.
        if (clearLocalStorage) {
            localStorage.clear();
        }
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (recipeJSON == null) {
            return mockData;
        } else {
            return JSON.parse(recipeJSON);
        }
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
    }, [recipes]);

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
