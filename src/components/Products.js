import Product from './Product';

const Products = ({products})=>{
    return(
        <div className='cardContainer'>
            <div className='cards'>
                {products.map(( (product)=>
                    <Product  key={product.productName} product={product}></Product>
                ))}
            </div>
        </div>
    )
}

export default Products;