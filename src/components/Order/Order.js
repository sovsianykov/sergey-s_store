import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/selectors";
import { Link } from "react-router-dom";
import { postProducts } from "../../redux/thunks";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#cfcfcf",
  },
  order: {
    width: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    padding: 20,
  },
  grid: {
    marginTop: 20,
    width: 600,
  },
  total: {
    marginTop: 30,
    height: 40,
    color: "#d51818",
  },
  buttonTool: {
    marginTop: 30,
    display: "flex",
    width: 300,
    justifyContent: "space-between",
  },
}));

const Order = () => {
  const classes = useStyles();
  const { totalSum, cart } = useSelector(selectCart);
  const handleSubmit = () => {
    postProducts({ body: cart }).catch((e) => console.log(e));
  };

  return (
    <Box className={classes.root}>
      <Paper className={classes.order}>
        <Typography variant="h4">Your order is</Typography>
        <Grid container spacing={2} className={classes.grid} direction="column">
          {cart.map((house) => (
            <Grid item key={`${house.id}`} xs>
              <Typography variant="h5" align="center">
                {`${house.title}: $${house.price} -  ${house.quantity} `}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box className={classes.total}>{`TOTAL AMOUNT: $${totalSum}`}</Box>
        <Box className={classes.buttonTool}>
          <Button
            variant="text"
            size="small"
            type="button"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            component={Link}
            to="/cart"
            variant="text"
            size="small"
            type="button"
            color="secondary"
          >
            edit Order
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Order;
