import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menucard from "./menucard";

const useStyles = makeStyles({
    title: {
      fontSize: "150px",
      marginTop: "2em"
    }});

export default function Menulist({products}) {
    const classes = useStyles();

    return (
        <div>
            <h1>Products</h1>
            <div className="container">
                
                <div className="row">
                    {products.map((value, index) => {
                    return <Menucard key={index} product={value} products={products} className="col-xs-1"/>
                    })}
                </div>
                
            </div>
        </div>
    )
  }