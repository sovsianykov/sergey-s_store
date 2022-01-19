import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom";
const useStyles = makeStyles(() => ({
    root : {
        width:200,
        height: "100%",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        borderBottom: ({activeLocation}) => activeLocation ? "2px solid #000" :"2px solid transparent",
        borderRadius: 0,
    }
}))



const NavigationMenuItem = ({item}) => {
    const location = useLocation()
    const activeLocation = ( location.pathname === item.path)
    const classes = useStyles({activeLocation})

    return (
        <Button className={classes.root}>
            <Link to={item.path}>{item.label}</Link>
        </Button>
    );
};

export default NavigationMenuItem;