import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect } from "react-redux";
import { setPerPage } from "../../action";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 70,
        position: 'absolute',
        right: 90,
        top: 10
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function SelectPP(props) {

    const { perPage, setPerPage } = props;

    const classes = useStyles();

    const handleChange = (event) => {
        setPerPage(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel style={{ color: 'white' }} id="demo-simple-select-label">Per Page</InputLabel>
            <Select
                style={{ color: 'white' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={perPage}
                onChange={handleChange}
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>
        </FormControl>
    );
}

const mapStateToProps = (state) => {
    return {
        perPage: state.perPage
    }
};

export default connect(mapStateToProps, { setPerPage })(SelectPP)