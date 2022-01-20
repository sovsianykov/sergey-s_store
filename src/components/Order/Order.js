import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Box, Button, Grid, Paper, Typography} from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/selectors";
import {Link} from "react-router-dom";

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
    background: "#f1e6e0",
  },
  grid: {
    width: 600,
  },
    total: {
      marginTop: 30,
        height: 40,
        color:"#d51818"
    },
    buttonTool: {
        marginTop: 30,
        display:"flex",
        width: 300,
        justifyContent: "space-between",
    }
}));

const Order = () => {
  const classes = useStyles();
  const { totalSum, cart } = useSelector(selectCart);
  return (
    <Box className={classes.root}>
      <Paper className={classes.order}>
        <Typography variant="h4">Your order is</Typography>
        <Grid container spacing={4} className={classes.grid} >
          {cart.map((house) => (
            <Grid item direction="column" key={`${house.id}${Date.now()}`} lg={12}>
              <Typography variant="h5" align="center">
                {`${house.title} ___  $${house.price} ___ ${house.quantity} `}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box className={classes.total}>{`TOTAL AMOUNT: $${totalSum}`}</Box>
        <Box className={classes.buttonTool}>
            <Button
                variant="outlined"
                size="small"
                type="button"
                color="primary"
            >
                Submit
            </Button>
            <Button
                component={Link}
                to="/cart"
                variant="outlined"
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
