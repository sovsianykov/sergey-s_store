import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { memo, useCallback, useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100%",
    background: ({ active }) => (active ? "antiquewhite" : "none"),
    color: ({ active }) => (active ? "red" : "inherit"),
    maxHeight: 370
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Product = ({ house, onAddToCart }) => {
  const [active, setActive] = useState(false);
  const classes = useStyles({ active });

  const addToCardHandler = useCallback(() => {
    onAddToCart(house.id);
    setActive(true);
  }, [house.id, onAddToCart]);

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={house.img}
          title={house.name}
        />

        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {house.title}
            </Typography>
            <Typography variant="h5">{`$${house.price}`}</Typography>
          </div>
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add To Card" onClick={addToCardHandler}>
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};
export default memo(Product);
