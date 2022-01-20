import * as React from "react";
import {
  Typography,
  Button,
  CardActions,
  CardContent,
  Card,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";
import {memo, useCallback} from "react";

const CartItem = ({ item, onRemoveFromCard, onUpdateCartQty }) => {
  const classes = useStyles();

  const removeFromCartHandler = useCallback(() =>{
      onRemoveFromCard(item.id)
  },[item.id, onRemoveFromCard])
  const onUpdateCartQtyHandler = useCallback((id,q) =>{
    onUpdateCartQty(id,q)
  },[onUpdateCartQty])
  return (
    <Card>
      <CardMedia image={item.img} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.title} </Typography>
        <Typography variant="h5">{item.price}</Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQtyHandler(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
             onClick={() => onUpdateCartQtyHandler(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
           onClick={removeFromCartHandler}
        >
          Remove{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
export default memo(CartItem);
