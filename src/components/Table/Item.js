import React from "react";

import { withRouter } from 'react-router-dom';

class Item extends React.Component {


    render() {

        const { currency: { id, name, rank, price, marketCap, percentChange24h }, history } = this.props;
        return (
            <tr onClick={() => history.push(`/currency/${id}`)}>
                <td>
                    <span className='Table-rank'>{rank}</span>
                    <span>{name}</span>
                </td>
                <td>
                    <span className='Table-dollar'>$</span>
                    <span>{price}</span>
                </td>
                <td>
                    <span className='Table-dollar'>$</span>
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
}

export default withRouter(Item);