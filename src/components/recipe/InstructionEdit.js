import React from "react";


const InstructionEdit = () => {

    return (
        <div className={"row"}>
            <div className={"col-12 col-sm-8"}>
                Input instruction
            </div>
            <div className={"col-12 col-sm-4 text-end"}>
                <button className={"btn btn-sm btn-outline-danger"}>&times; Delete</button>
            </div>
        </div>
    );
}

export default InstructionEdit;
