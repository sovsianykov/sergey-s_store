import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import brand from "../../assests/img/ghost.gif";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";
import {useSelector} from "react-redux";
import {selectCart} from "../../redux/selectors";

function Navbar() {
  const { cart } = useSelector(selectCart);
  const location = useLocation();
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={brand}
              alt="sergey shop"
              height="25px"
              className={classes.image}
            />
            Sergey's Shop
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
