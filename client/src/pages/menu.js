import React, {useState, useEffect} from 'react';
import Menulist from '../components/menulist';
import axios from 'axios';


async function makeGetRequest(url) {

  let res = await axios.get(url);

  let data = res.data;

  return data;
}

export default function Menu() {

  const [products, addProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    makeGetRequest('http://localhost:3001/api/v1/products')
    .then(( data ) => addProducts(data))
    .catch((err) => console.log(err))
  }

  return (
    <Menulist products={products} />
  );
  }