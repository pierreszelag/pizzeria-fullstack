import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

async function makePostRequest(url, newCategory, newName ,newDesc, newPrice) {

    let res = await axios.post(url, {
        category: newCategory,
        name: newName,
        description: newDesc,
        price: newPrice
    });
  
    return res;
  
}

const useStyles = makeStyles({
    formblock: {
      width: "40vw",
      marginLeft: "30vw",
      marginTop: "10vh",
      textAlign: "left"
    }});

function Product({products, addProducts, formData, updateFormData}) {
    const classes = useStyles();

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          [e.target.name]: e.target.value.trim()
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        addProducts([
            ...products,
            {category:formData.category, name:formData.name , description: formData.description, price:formData.price, id: Math.ceil(Math.random() * 10000)}
        ])

        makePostRequest('http://localhost:3001/api/v1/product', formData.category, formData.name, formData.description, formData.price)
        .then(( data ) => console.log(data))
        .catch((err) => console.log(err))
    };

    return (

        <form className={classes.formblock}>
            <div class="form-group">
                <label>Product category</label>
                <input type="text" class="form-control" id="category" onChange={handleChange}></input>
            </div>

            <div class="form-group">
                <label>Product name</label>
                <input type="text" class="form-control" id="name" onChange={handleChange}></input>
            </div>

            <div class="form-group">
                <label>Product description</label>
                <input type="text" class="form-control" id="description" onChange={handleChange}></input>
            </div>

            <div class="form-group">
                <label>Price</label>
                <input type="text" class="form-control" id="price" onChange={handleChange}></input>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Add to DB</button>
        </form>

    )
}

export default Product;