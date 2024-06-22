//import  SHOP_DATA from '../../shop-data.json';
import { useContext } from 'react';
import { ProductContext } from '../../contex/product.context';
import ProductCard from '../../component/product-card/product-card.component';
import './shop.style.scss'

const Shop = () => {
    const { products} = useContext(ProductContext)
    return(
        <div className='product-container'>
            {products.map((product)=>(
           <ProductCard key={product.id}  product={product}/>
            ))}
        </div>
    )
}


export default Shop;