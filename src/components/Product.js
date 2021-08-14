import React,{useState} from 'react';
import { Link } from "react-router-dom";

const Product = ({product})=>{
    const text = product.productDescription.substring(0,200);
    const [readMore,setReadMore]=useState(false);
    const linkName=readMore?'Read Less':'Read More'
    return(
        <div className='card'>
            <Link to={'/product/'+product.productName} style={{textDecoration: 'none'}}>
            <img className='cardImage' src={product.productImage}/>
            <h1 className='cardTitle'>{product.productName}</h1>
            <p className='cardText'>
                {text}...{' '}{' '}{' '}
                {readMore && product.productDescription}{' '}{' '}{' '}
                <a className='cardLink' onClick={ ()=> {setReadMore(!readMore)} }>{linkName}</a>
            </p>
            <h2 className='cardPrice'>{product.price} $</h2>
            </Link>
        </div>
    )
}

export default Product;