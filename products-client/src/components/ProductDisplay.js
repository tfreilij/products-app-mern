import React from 'react';
import {Link} from "react-router-dom";
import { Card, Nav } from 'react-bootstrap';

function ProductDisplay(props) {

    const product = props.product;
    let showButton = props.button;

    const title = product.title;
    const body = product.body;
    const productId = product.id;
    const imgUrl = product.imageUrl;
    
    
    console.log("imageUrl",imgUrl);
    const handleClick = () => alert('producto comprado');

    const style = {
        width:"10em",
        margin:"auto"
    }

    const heading = <>
            <Card.Img variant="top"  src={imgUrl} />
            <Nav.Link as={Link} to={'/product/'+productId} >{title} </Nav.Link>
         
            
            <Card.Subtitle  >
                {10}
            </Card.Subtitle>
    </>;

    const displayBody = <>
        <Card.Text  >
            {body}
        </Card.Text>
        <Card.Text >
            {20}
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
                        {displayBody}
                        {buyButton}
                        {returnButton}
                    </Card.Body>
                </Card>

    }
    else {
        return <Card style={{ width: '10rem' }}>
                    <Card.Body>
                        {heading}
                        {displayBody}
                    </Card.Body>
                </Card>
            
    }
    


}

export default ProductDisplay;