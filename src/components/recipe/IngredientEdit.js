import React from "react";


const IngredientEdit = ({ingredient}) => {

    return (
        <div className={"row"}>
            <div className={"col-12 col-sm-4"}>
                <input className={"form-control"} type={"text"} value={ingredient.name} onChange={() => console.log("TODO")}/>
            </div>
            <div className={"col-12 col-sm-4"}>
                <input className={"form-control"} type={"text"} value={ingredient.amount} onChange={() => console.log("TODO")}/>
            </div>
            <div className={"col-12 col-sm-4 text-end"}>
                <button className={"btn btn-sm btn-outline-danger"}>&times; Delete</button>
            </div>
        </div>
    );
}

export default IngredientEdit;
