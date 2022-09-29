import React from "react";


const InstructionList = ({instructions}) => {

    const instructionElements = instructions.map(
        (instruction) => {
            return (
                <li className={"list-group-item"}>{instruction}</li>
            );
        }
    )

    return (
        <ol className={"list-group list-group-flush list-group-numbered mb-4"}>
            {instructionElements}
        </ol>
    );
}

export default InstructionList;
