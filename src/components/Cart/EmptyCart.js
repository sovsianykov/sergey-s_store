import React from 'react';
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import useStyles from "./styles";

const EmptyCart = () => {
    const classes = useStyles();

    return (
        <Typography variant="h4" className={classes.emptyCard}>
            You have no items in your cart,<br/>
            <Link to="/" className={classes.link}>
                start adding something!
            </Link>
        </Typography>
    );
};

export default EmptyCart;