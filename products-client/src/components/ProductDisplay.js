import React from 'react';
import {Link} from "react-router-dom";
import { Card, Nav } from 'react-bootstrap';

function ProductDisplay(props) {

    const product = props.product;
    let showButton = props.button;

    const name = product.name;
    const description = product.description;
    const price = product.price;
    const sku = product.sku;
    const productId =props.id;
    const imgUrl = product.imageUrl;
    
    console.log("imageUrl",imgUrl);
    const handleClick = () => alert('producto comprado');

    const style = {
        width:"10em",
        margin:"auto"
    }

    const heading = <>
            <Card.Img variant="top"  src={imgUrl} />
            <Nav.Link as={Link} to={'/product/'+productId} >{name} </Nav.Link>
         
            
            <Card.Subtitle  >
                {sku}
            </Card.Subtitle>
    </>;

    const body = <>
        <Card.Text  >
            {description}
        </Card.Text>
        <Card.Text >
            {price}
        </Card.Text>
    </>;

    const buyButton = <Card.Link as={Link} to={'/'}>
                        <button style={{margin:"auto"}} onClick={handleClick} > 
                            Buy
                        </button>
                    </Card.Link>;
    
    const returnButton = <Card.Link as={Link} to={'/'}>
                                <button> Return </button>
                        </Card.Link>;

    if ( showButton ){
       
        return <Card style={{ width: '10rem' }}>
                
                    <Card.Body>
                        {heading}
                        {body}
                        {buyButton}
                        {returnButton}
                    </Card.Body>
                </Card>

    }
    else {
        return <Card style={{ width: '10rem' }}>
                    <Card.Body>
                        {heading}
                        {body}
                    </Card.Body>
                </Card>
            
    }
    


}

export default ProductDisplay;