import React from "react";


const InstructionEdit = ({instruction}) => {

    return (
        <div className={"row"}>
            <div className={"col-12 col-sm-8"}>
                <input className={"form-control"} type={"text"} value={instruction} onChange={() => console.log("TODO")}/>
            </div>
            <div className={"col-12 col-sm-4 text-end"}>
                <button className={"btn btn-sm btn-outline-danger"}>&times; Delete</button>
            </div>
        </div>
    );
}

export default InstructionEdit;
