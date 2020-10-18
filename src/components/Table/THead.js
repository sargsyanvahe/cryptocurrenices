import React from "react";

export default function THead({ thElements }) {

    return (
        <thead className="table-head">
        <tr>
            {thElements && thElements.map(({ nameField, dataName }, i) =>
                <th key={i}>{nameField}</th>)}
        </tr>
        </thead>
    );

}