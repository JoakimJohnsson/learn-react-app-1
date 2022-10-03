import {v4 as uuidv4} from "uuid";

export const handleAddRecipe = (recipes, setRecipes) => {
    console.info("Adding recipe to recipe list!");
    const newRecipe = {
        id: uuidv4(),
        name: "New name",
        description: "New description",
        servings: 1,
        cookingTime: "1:00:00",
        instructions: [
            "Do it!"
        ],
        ingredients: [
            {
                id: uuidv4(),
                name: "New name",
                amount: "New amount"
            }
        ]
    }
    // Using callback version of set state. Since we are modifying the "old" Recipes list.
    setRecipes((prevRecipes) => {
        return [...prevRecipes, newRecipe];
    });
}

export const handleDeleteRecipe = (id, recipes, setRecipes) => {
    console.info("Deleting recipe from recipe list!");
    // Using callback version of set state. Since we are modifying the "old" Recipes list.
    setRecipes((prevRecipes) => {
        return (prevRecipes.filter((recipe) => {
                return (recipe.id !== id);
            })
        );
    });
}

// ID of recipe to change. New recipe to replace an old one. Recipes state,
// Remember - CHANGING state (recipes) is not possible in react.
export const handleRecipeSubmit = (id, newRecipe, recipes, setRecipes) => {
    // Copy old recipes state. Make changes to the new one (mutate it). Then set it.
    const newRecipes = [...recipes];
    // Get index of the recipe we want to change.
    const index = newRecipes.findIndex(r => r.id === id);
    // Replace recipe.
    newRecipes[index] = newRecipe;
    // Set new recipes state.
    setRecipes(newRecipes);
}
