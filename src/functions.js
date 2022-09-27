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