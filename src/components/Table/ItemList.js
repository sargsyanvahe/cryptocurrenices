import React from "react";

import Item from "./Item";

function ItemList({ currencies }) {

    return (
        <tbody className="table-body">
        {currencies && currencies.map(currency => <Item key={currency.id} currency={currency}/>)}
        </tbody>
    );
}


export default ItemList;