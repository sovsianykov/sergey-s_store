
import * as React from 'react';
import {Typography,Button, CardActions,CardContent,Card,CardMedia} from "@material-ui/core";
import useStyles from './styles'

export default function CartItem({ item, onRemoveFromCart, onUpdateCartQty }) {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.media.source}  alt ={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h5'>{item.name} </Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small'  onClick={()=>onUpdateCartQty(item.id, item.quantity-1)}>-</Button>
                    <Typography >{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={()=>onUpdateCartQty(item.id, item.quantity+1)}>+</Button>
                </div>
            <Button variant='contained' type='button' color='secondary' onClick={()=>onRemoveFromCart(item.id)}>Remove </Button>
            </CardActions>
        </Card>
    );
};
