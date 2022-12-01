import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/AppNavbar.css'
import React,{ Component } from 'react'

class AppNavbar extends Component {
    render() {
        return(
            <Navbar bg="light" variant="light fixed-top">
                <Navbar.Brand>HCI Project 2</Navbar.Brand>
            </Navbar>
        )
    }
}

export default AppNavbar