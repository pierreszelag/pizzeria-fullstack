import Product from '../components/product';
import React, { useState} from 'react';


const productInitialFormData = Object.freeze({
    category: "",
    name: "",
    description: "",
    price: ""
  });
  
export default function Newproduct() {
    
    const [productFormData, updateProductFormData] = useState(productInitialFormData);
    const [products, addProducts] = useState([]);

    return (
        <Product products={products} addProducts={addProducts} formData={productFormData} updateFormData={updateProductFormData} />
    );
}