import React, {useState} from "react";


const IngredientEdit = ({ingredient, handleIngredientChange}) => {

    const [newIngredient, setNewIngredient] = useState({...ingredient})

    const handleChange = (changes) => {
        setNewIngredient(() => {
            return {...ingredient, ...changes}
        });
        handleIngredientChange(ingredient.id, {...ingredient, ...changes});
    }

    return (
        <div className={"row"}>
            <div className={"col-12 col-sm-4"}>
                <input className={"form-control"} type={"text"} value={newIngredient.name} onChange={(e) => handleChange({name: e.target.value})}/>
            </div>
            <div className={"col-12 col-sm-4"}>
                <input className={"form-control"} type={"text"} value={newIngredient.amount} onChange={(e) => handleChange({amount: e.target.value})}/>
            </div>
            <div className={"col-12 col-sm-4 text-end"}>
                <button className={"btn btn-sm btn-outline-danger"}>&times; Delete</button>
            </div>
        </div>
    );
}

export default IngredientEdit;
