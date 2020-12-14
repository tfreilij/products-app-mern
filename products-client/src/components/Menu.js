import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";

function Menu(props) {

    const menu = [
        {name:"home", route: "/"},
        //{name:"registration", route: "/registration"},
        //{name:"login", route: "/login"}
    ]

    const navLinks = menu.map(route => <Nav.Link as={Link} to={route.route}>{route.name}</Nav.Link>)        
    /*
        {navLinks[1]}
        {navLinks[2]}
    */
    return (
    <>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                {navLinks[0]}
                
            </Nav>
        </Navbar>
    </>
    )

}

export default Menu;