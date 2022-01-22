import React, { memo, useCallback } from "react";
import { Box, CircularProgress, Grid } from "@material-ui/core";
import Product from "./Product.";
import useStyles from "../Products/productsStyles";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { selectAllProducts } from "../../redux/selectors";
import { addToCart } from "../../redux/ducks";

const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useFetch();
  const { houses, error, isLoading } = useSelector(selectAllProducts);
  const handleAddToCart = useCallback(
    (id) => {
      dispatch(addToCart(houses.find((p) => p.id === id)));
    },
    [houses, dispatch]
  );

  if (isLoading) {
    return <CircularProgress />;
  }
  if (error) {
    return <h1>"Something vent wrong!"</h1>;
  }
  return (
    <Box className={classes.content}>
      <Box className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={2}>
        {houses.map((house) => (
          <Grid item key={house.id} xs={12} sm={6} md={3} lg={3}>
            <Product house={house} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(Products);
