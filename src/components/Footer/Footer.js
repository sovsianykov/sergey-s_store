import React from 'react';
import useStyles from "./styles";
import {Toolbar} from "@material-ui/core";
import NavigationMenu from "../NavigationMenu/NavigationMenu";



const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footerBar} >
               <Toolbar>
                <NavigationMenu/>
               </Toolbar>
        </footer>
    );
};

export default Footer;