import React from "react";
import {Modal} from "react-bootstrap";


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
                <p>{recipe.description}</p>
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
