import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      width: 100,
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 22,
    },
    pos: {
      marginBottom: 12,
    },
    price: {
      fontSize: 20,
    },
  });

async function makeUpdateRequest(url) {
    let res = await axios.update(url);
    return res;
}


export default function Menucard({product, products}) {

    const classes = useStyles();

    const handleAdd = () => {
        makeUpdateRequest("http://localhost:3001/api/v1/order/")
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    };

    const handleRemove = () => {
        makeUpdateRequest("http://localhost:3001/api/v1/order/")
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    };

    return (
        <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textPrimary" gutterBottom>
                  {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                  {product.description}
              </Typography>
              <Typography className={classes.price} color="textPrimary">
                  {product.price} €
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="primary" onClick={handleAdd}>Add to cart</Button>
              <Button variant="secondary" onClick={handleRemove}>Remove from cart</Button>
            </CardActions>
        </Card>
        );
  }