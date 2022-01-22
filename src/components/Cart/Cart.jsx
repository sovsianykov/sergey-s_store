import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/selectors";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const Cart = () => {
  const classes = useStyles();

  const { cart } = useSelector(selectCart);

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};
export default memo(Cart);
