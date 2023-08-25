import { useEffect, useState } from "react";
// import productsData from "../Products-data";
import Product3 from "./Product3";
import './ProductList.css';


// console.log(productsData);
function ProductList() {
    //------session4-----------
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    //----------------------------------------------- 








    const productsData = products.map((product) => {
        return product.price > 100 ?
            <Product3 key={product.id} product={product} />
            : null;
      })
    
    return (
        <div className="products-list">
            <div className="row">
                {productsData}
          </div>
        </div>
    )
}

export default ProductList;