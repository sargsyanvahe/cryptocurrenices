import React from "react";
import Loading from "../Loading";

import { Link } from "react-router-dom";

import withAPI from "../../hoc/withAPI";

import './Currency.css'


class Currency extends React.Component {

    state = {
        name: "",
        symbol: "",
        rank: "",
        price: "",
        volume24h: "",
        marketCap: "",
        totalSupply: "",
        percentChange24h: "",
        loaded: false
    };

    getData = () => {
        const { match: { params: { id } }, history } = this.props;
        const { service: { getSpecificCurrency } } = this.props;

        getSpecificCurrency(id)
            .then((data) => {
                if (data === 404) {
                    history.push('/404');
                } else {
                    const { name, symbol, rank, price, volume24h, marketCap, totalSupply, percentChange24h } = data;

                    this.setState({
                        name,
                        symbol,
                        rank,
                        price,
                        volume24h,
                        marketCap,
                        totalSupply,
                        percentChange24h,
                        loaded: true
                    })
                }
            })

    };

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getData();
        }
    }

    render() {
        const { name, symbol, rank, price, volume24h, marketCap, totalSupply, percentChange24h, loaded } = this.state;

        if (!loaded) {
            return <Loading/>;
        }

        return (
            <div className='currencyContainer'>
                <h1>{symbol}</h1>
                <h2>{name}</h2>
                <p>Rank: {rank}</p>
                <p>Price: {price}</p>
                <p>Volume 24h: {volume24h}</p>
                <p>Market Cap: {marketCap}</p>
                <p>Total Supply: {totalSupply}</p>
                <div>
                    <span>Percent 24h: </span>
                    <span
                        className={percentChange24h[0] === '-' ? 'percent-fallen' : 'percent-raised'}> {percentChange24h}</span>
                    <span
                        className={percentChange24h[0] === '-' ? 'percent-fallen' : 'percent-raised'}>{percentChange24h[0] === '-' ? ' ↓' : ' ↑'}</span>
                </div>
                <hr/>
                <Link className='backButton' to='/'>Back to Main</Link>
            </div>
        )
    }
}

export default withAPI(Currency);