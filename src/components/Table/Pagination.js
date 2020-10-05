import React from "react";

import PaginationItem from "@material-ui/lab/PaginationItem";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

export default function PaginationContainer({ page, totalPages, onPageChange }) {

    const useStyles = makeStyles(theme => ({
        root: {
            '& > *': {
                margin: theme.spacing(3),
                display: 'flex',
                justifyContent: 'center'
            },
        },
    }));

    const itemStyle = makeStyles(theme => ({
        root: {
            color: 'white'
        },
    }));

    const classes = useStyles();
    const clas = itemStyle();

    return (
        <div className={classes.root}>
            <Pagination
                page={+page}
                count={totalPages}
                renderItem={item => <PaginationItem className={clas.root} {...item}/>}
                size="large"
                onChange={(obj, page) => onPageChange(page)}
            />
        </div>
    )
}