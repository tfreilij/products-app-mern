import React, {useState, useEffect} from 'react';
import ProductoDisplay from './ProductDisplay';
import {getProduct} from '../Services/ProductsServices';

function Product(props) {

    const [product,setProduct] = useState({});
    const [loading,setLoading] = useState(true);

    let productId = props.match.params.id


    useEffect(
        () => {
 
            getProduct(productId)
            .then(doc => {

                setProduct(doc);
                setLoading(false);
                    
            },
                (error) => { console.log("hubo un error" , error)
            }) 
        },
        []
    );
        
  
    if ( loading ) {
        return (
            <div> Loading .... </div>

        )    
    }
    else {
         return (
            <div> 
                <ProductoDisplay key={product.id} id={product.id} product={product.data()} button={true}/> 
            </div>
        )     
    }
       

}

export default Product;