import React from "react";

import { withRouter } from 'react-router-dom';

function Item(props) {
    const { currency: { id, name, rank, price, marketCap, percentChange24h }, history } = props;

    return (
        <tr onClick={() => history.push(`/currency/${id}`)}>
            <td>
                <span className='table-rank'>{rank}</span>
                <span>{name}</span>
            </td>
            <td>
                <span className='table-dollar'>$</span>
                <span>{price}</span>
            </td>
            <td>
                <span className='table-dollar'>$</span>
                <span>{marketCap}</span>
            </td>
            <td>
                    <span
                        className={percentChange24h[0] === '-' ? 'percent-fallen' : 'percent-raised'}>{percentChange24h}</span>
                <span
                    className={percentChange24h[0] === '-' ? 'percent-fallen' : 'percent-raised'}>{percentChange24h[0] === '-' ? ' ↓' : ' ↑'}</span>
            </td>
        </tr>
    )
}

export default withRouter(Item);