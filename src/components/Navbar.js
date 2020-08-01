import React from 'react'
import { Navbar, FormControl , Form , Nav, Button} from 'react-bootstrap';

export default function Info() {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">COVID-19 Tracker</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                </Navbar>
            </>
        </div>
    )
}


