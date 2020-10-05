import React from "react"
import THead from "./THead";
import ItemList from "./ItemList";
import Loading from "../Loading";
import PaginationContainer from "./Pagination";

import withAPI from "../../hoc/withAPI";
import { connect } from "react-redux";
import "./Table.css"

class TableContainer extends React.Component {

    state = {
        thElements: [
            {
                nameField: 'Cryptocurrency',
                dataName: 'name'
            },
            {
                nameField: 'Price',
                dataName: 'price'
            },
            {
                nameField: 'Market Cap',
                dataName: 'marketCap'
            },
            {
                nameField: '24H Change',
                dataName: 'percentChange24h'
            },

        ],
        totalPages: null,
        data: null
    };

    componentDidMount() {

        const { match: { params: { page } }, history, perPage } = this.props;

        if (isNaN(page)) {
            this.getData(1, perPage);
            history.push(`/page/1`);
        } else {
            this.getData(page, perPage)
        }
    }

    //
    componentWillReceiveProps(nextProps, nextContext) {
        const { match: { params: { page } }, perPage } = this.props;

        if (nextProps.perPage !== perPage) {
            this.getData(page, nextProps.perPage)
        }

    }

    getData = async (page, perPage) => {

        const { service: { getCurrenciesWithPage }, history } = this.props;

        await getCurrenciesWithPage(page, perPage)
            .then(data => {

                if (data === 404) {
                    history.push('/404');
                } else {

                    this.setState({
                        data,
                        totalPages: data.totalPages
                    })
                }

            });

    };

    onPageChange = (page) => {

        const { history, perPage } = this.props;
        history.push(`/page/${page}`);
        this.getData(page, perPage);

    };


    render() {

        const { data, thElements, totalPages } = this.state;
        const { match: { params: { page } } } = this.props;

        return (
            <Table onPageChange={this.onPageChange}
                   thElements={thElements}
                   totalPages={totalPages}
                   data={data}
                   page={page}
            />
        );
    }
}

function Table({ thElements, data, onPageChange, totalPages, page }) {

    return !data ? (
        <Loading/>
    ) : (
        <div>
            <table className="Table">
                <THead thElements={thElements}/>
                <ItemList currencies={data.currencies}/>
            </table>
            <PaginationContainer page={page} totalPages={totalPages} onPageChange={onPageChange}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        perPage: state.perPage
    }
};

export default connect(mapStateToProps)(withAPI(TableContainer));