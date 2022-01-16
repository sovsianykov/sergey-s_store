import * as React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import {memo, useCallback} from "react";
import {removeFromCart, resetState} from "../../redux/ducks";
import {useDispatch, useSelector} from "react-redux";
import {selectCart} from "../../redux/selectors";

 const Cart =() =>{
  const classes = useStyles();
     const dispatch = useDispatch()
     const { cart , totalSum} = useSelector(selectCart)
     const handleRemoveFromCart = useCallback((id) => {
         dispatch(removeFromCart(cart.filter(p => p.id !== id)))
     },[cart, dispatch])
     const handleEmptyCart = useCallback(() => {
         dispatch(resetState())
     },[dispatch])

     const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your cart,
      <Link to="/" className={classes.link}>
        start adding something!
      </Link>
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>
              <CartItem item={item} onRemoveFromCard={handleRemoveFromCart} />
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
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            color="primary"
            variant="contained"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.length) return " loading ...";
  return (
    <div>
      <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h4" gutterBottom>
          Your Shopping Cart
        </Typography>
        {!cart.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </div>
  );
}
export default memo(Cart);
