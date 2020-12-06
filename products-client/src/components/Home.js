import React from 'react';
import {useState, useEffect} from 'react';
import ProductDisplay from './ProductDisplay';
import {getProducts} from '../Services/ProductsServices'; 
import { CardDeck } from 'react-bootstrap';


function Products() {


    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(
        () => {
            
            getProducts()
            .then( response => {
                        setProducts(response);
                        setLoading(false);
                    }
                );
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
                <CardDeck style={ {padding:"1em"}}>
                    {products.map( product => <ProductDisplay key={product.id} id={product.id} product={product} button={false}/>)}
               </CardDeck>
            </div>
        )     
    }


}

export default Products;