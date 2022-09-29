import React from "react";
import {Modal} from "react-bootstrap";
import IngredientEdit from "./IngredientEdit";
import InstructionEdit from "./InstructionEdit";


const RecipeEdit = ({modalId, showModal, setShowModal, recipe}) => {

    const handleClose = () => setShowModal(false);

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
                <p className={"lead"}>{recipe.description}</p>
                <form>
                    <label className={"form-label"} htmlFor={"name"}>Name:</label>
                    <input className={"form-control"} type={"text"} name={"name"}/>
                    <label className={"form-label"} htmlFor={"cookingTime"}>Cooking time:</label>
                    <input className={"form-control"} type={"text"} name={"cookingTime"}/>
                    <label className={"form-label"} htmlFor={"servings"}>Servings:</label>
                    <input className={"form-control"} type={"number"} min={"1"} name={"servings"}/>
                    <label className={"form-label"}>Instructions:</label>
                    <InstructionEdit/>
                    <InstructionEdit/>
                    <div className={"row"}>
                        <div className={"col-12 text-center"}>
                            <button className={"btn btn-sm btn-primary"}>+ Add</button>
                        </div>
                    </div>
                    <label className={"form-label"}>Ingredients:</label>
                    <IngredientEdit/>
                    <IngredientEdit/>
                    <IngredientEdit/>
                    <div className={"row"}>
                        <div className={"col-12 text-center"}>
                            <button className={"btn btn-sm btn-primary"}>+ Add</button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleClose}>
                    Close
                </button>
                <button className={"btn btn-outline-primary"} onClick={handleClose}>
                    Save changes
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default RecipeEdit;
