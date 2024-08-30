import React from 'react';
import './Products.css';
function Products(props) {
    return ( 
        <div className='product'>
            <div className='product-details'>
                <img src={props.image} alt="product " />
                <h2>{props.title}</h2>
                <h4>{props.price}</h4>
            </div>
        </div>
     );
}
  

export default Products;