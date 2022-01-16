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
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.img}
          title={product.name}
        />

        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h5">
              {`$${product.price}`}
            </Typography>
          </div>
          {/*<Typography*/}
          {/*  dangerouslySetInnerHTML={{ __html: product.description }}*/}
          {/*  variant="body2"*/}
          {/*  color="textSecondary"*/}
          {/*/>*/}
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton
              aria-label="Add To Card"
              onClick={() =>
                onAddToCart(product.id,1)
              }
            >
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};
export default Product;
