import React from 'react';
import '../styles/Product.css';
import {AddCartBtn} from './AddCartBtn';
import { Discount } from './Discount';
import { Heart } from './Heart';


const Product = (props) => {
  return (
    <div className='product'>
        <Discount discount = {props.discount}/>
        <Heart/>
        <img className='product__img' src='https://picsum.photos/180' alt='product' />
        <h2 className='product__name'>{props.name}</h2>
        <div className='product__details'>
          <p className='product__oldprice'>${props.oldPrice}</p>
          <p className='product__price'>${props.newPrice}</p>
          <AddCartBtn name={props.name} newPrice={props.newPrice}/>
        </div>
        
    </div>
  )
}

export  {Product}