import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

import { getAutoCompleteCurrency } from "../../api";

class SearchContainer extends React.Component {

    state = {
        onFocus: false,
        inputText: '',
        data: null
    };

    getData = async (name) => {

        await getAutoCompleteCurrency(name)
            .then(data => {
                this.setState({ data })
            })

    };

    onHandleChange = async ({ target }) => {
        await this.setState({ inputText: target.value, onFocus: true });

        if (this.state.inputText.trim()) {
            this.getData(this.state.inputText.trim());
        } else {
            this.onDeleteText()
        }

    };

    onDeleteText = () => {
        this.setState({ inputText: '', data: null, onFocus: false });
    };


    render() {

        const { onFocus, inputText, data } = this.state;

        return (
            <div className='search-container'>
                <div className='search-panel'>
                    <input maxLength="15"
                           onBlur={() => setTimeout(() => {
                               this.onDeleteText()
                           }, 200)}
                           onFocus={() => this.setState({ onFocus: true })}
                           onChange={this.onHandleChange}
                           value={inputText}
                           type="text"/>
                    <span>
                            {onFocus ?
                                <FontAwesomeIcon
                                    onClick={this.onDeleteText}
                                    className='search-panel-delete'
                                    icon={faTimes} color="gray" size="lg"/> :
                                < FontAwesomeIcon icon={faSearch} color="gray" size="lg"/>
                            }
                    </span>

                </div>
                {data && <ItemList data={data}/>}
            </div>
        )
    }

}

function ItemList({ data }) {
    return (
        <div className='search-container-list'>
            <ul>
                <li style={{ fontWeight: 'bold', padding: '10px 12px' }}>Currencies</li>
                {data.length ? data.map(({ name, id }) =>
                    <li key={id}>
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'block',
                                padding: '10px 12px'
                            }}
                            to={`/currency/${id}`}> {name} </Link>
                    </li>) : <li className='searchNotFound'> Not Found </li>}
            </ul>
        </div>
    )
}

export default SearchContainer