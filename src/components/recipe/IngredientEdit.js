import React from "react";


const IngredientEdit = () => {

    return (
        <div className={"row"}>
            <div className={"col-12 col-sm-4"}>
                <input className={"form-control"} type={"text"}/>
            </div>
            <div className={"col-12 col-sm-4"}>
                <input className={"form-control"} type={"text"}/>
            </div>
            <div className={"col-12 col-sm-4 text-end"}>
                <button className={"btn btn-sm btn-outline-danger"}>&times; Delete</button>
            </div>
        </div>
    );
}

export default IngredientEdit;
