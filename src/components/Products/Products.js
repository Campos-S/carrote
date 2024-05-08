import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";

import axios from 'axios';

import "./Products.css";

const Products = () => {
    const [data, setData] = useState([]);
    const { buyProducts } = useContext(dataContext);

    useEffect (() => {
        axios("data.json").then ((res) => setData(res.data));
    },[]);

    return data.map((product) => (
        <div className="card" key={product.id}>
            <img src={product.img} alt="imagen-tarjeta-producto" className="prod"></img>
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button onClick={() => buyProducts(product)}>Agregar al carrito</button>
        </div>
    ));
}

export default Products

