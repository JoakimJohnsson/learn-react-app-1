import React, {useContext, useState} from "react";
import {Modal} from "react-bootstrap";
import IngredientEdit from "./IngredientEdit";
import InstructionEdit from "./InstructionEdit";
import {handleRecipeSubmit} from "../../functions";
import {RecipeContext} from "../../App";


const RecipeEdit = ({modalId, showModal, setShowModal, recipe}) => {
    // New recipe is the new recipe object that will handle our form states.
    // Needs to be handled here, and updated on form submit, to prevent the modal shutting down
    // when recipe component reloads.
    const [newRecipe, setNewRecipe] = useState({...recipe});
    const {recipes, setRecipes} = useContext(RecipeContext);
    const handleClose = () => setShowModal(false);

    // Will update new recipe state when any input changes.
    const handleChange = (name, value) => {
        setNewRecipe({...newRecipe, [name]: value});
    }

    // Updates the "old" recipe object with the new one when form is submitted.
    const handleSubmit = () => {
        // Replace old recipe with new recipe.
        handleRecipeSubmit(newRecipe.id, newRecipe, recipes, setRecipes);
    }

    const handleInstructionChange = (id, newInstruction) => {
        // Copy old recipes state. Make changes to the new one (mutate it). Then set it.
        const newRecipes = [...recipes];
        // Get index of the recipe we want to change.
        const index = newRecipes.findIndex(r => r.id === id);
        // Replace recipe.
        newRecipes[index] = newRecipe;
        // Set new recipes state.
        setRecipes(newRecipes);
    }

    const handleIngredientChange = (id, newIngredient) => {
        // Copy old ingredients from recipe state.
        const newIngredients = [...recipe.ingredients];
        // Get index of the ingredient we want to change.
        const index = newIngredients.findIndex(i => i.id === id);
        // Replace ingredient.
        newIngredients[index] = newIngredient;
        // Handle the change, so it can be updated on submit.
        handleChange("ingredients", newIngredients);
    }

    return (
        <Modal
            show={showModal}
            fullscreen={"sm-down"}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id={modalId}>{recipe.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <label className={"form-label"} htmlFor={"name"}>Name:</label>
                    <input className={"form-control mb-3"}
                           type={"text"}
                           name={"name"}
                           id={"name"}
                           value={newRecipe.name}
                           onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                    <label className={"form-label"} htmlFor={"description"}>Description:</label>
                    <textarea className={"form-control mb-3"}
                           name={"description"}
                           id={"description"}
                           value={newRecipe.description}
                           onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                    <label className={"form-label"} htmlFor={"cookingTime"}>Cooking time:</label>
                    <input className={"form-control mb-3"}
                           type={"text"}
                           name={"cookingTime"}
                           id={"cookingTime"}
                           value={newRecipe.cookingTime}
                           onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                    <label className={"form-label"} htmlFor={"servings"}>Servings:</label>
                    <input className={"form-control mb-3"}
                           type={"number"} min={"1"}
                           name={"servings"}
                           id={"servings"}
                           value={newRecipe.servings}
                           onChange={e => handleChange(e.target.name, parseInt(e.target.value) || "")}
                    />
                    <label className={"form-label"}>Instructions:</label>
                    {newRecipe.instructions.map((instruction, index) => (
                        <InstructionEdit key={index} instruction={instruction} handleInstructionChange={handleInstructionChange}/>
                    ))}
                    <div className={"row"}>
                        <div className={"col-12 text-center"}>
                            <button className={"btn btn-sm btn-primary"}>+ Add</button>
                        </div>
                    </div>
                    <label className={"form-label"}>Ingredients:</label>
                    {newRecipe.ingredients.map((ingredient) => (
                        <IngredientEdit key={ingredient.id} ingredient={ingredient} handleIngredientChange={handleIngredientChange}/>
                    ))}
                    <div className={"row"}>
                        <div className={"col-12 text-center"}>
                            <button className={"btn btn-sm btn-primary"}>+ Add</button>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-12 text-end"}>
                            <button className={"btn btn-secondary me-2"} onClick={handleClose}>
                                Close modal
                            </button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default RecipeEdit;
