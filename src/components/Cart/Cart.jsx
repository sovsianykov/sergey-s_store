import * as React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import { memo, useCallback } from "react";
import { removeFromCart, resetState, updateCartQty } from "../../redux/ducks";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/selectors";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { totalSum, cart } = useSelector(selectCart);

  const handleRemoveFromCart = useCallback(
    (id) => {
      dispatch(removeFromCart(cart.filter((p) => p.id !== id)));
    },
    [cart, dispatch]
  );
  const handleEmptyCart = useCallback(() => {
    dispatch(resetState());
  }, [dispatch]);

  const handleUpdateCartQty = useCallback(
    (id, quantity) => {
      dispatch(updateCartQty({ id, quantity }));
    },
    [dispatch]
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>
              <CartItem
                item={item}
                onRemoveFromCard={handleRemoveFromCart}
                onUpdateCartQty={handleUpdateCartQty}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">{`Subtotal: $${totalSum}`}</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            color="secondary"
            variant="contained"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/order"
            className={classes.checkoutButton}
            size="large"
            type="button"
            color="primary"
            variant="contained"
          >
            Checkout Order
          </Button>
        </div>
      </div>
    </>
  );

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
