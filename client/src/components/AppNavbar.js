import React , { useState} from 'react'
import { logoutUser } from '../redux/index'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem ,
    Container,
    Button
  } from 'reactstrap'
import { connect } from 'react-redux'

function AppNavbar(props) {
    let [isOpen , setIsOpen] = useState(false)
    return (
        <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">Supplychain</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {(props.isAuthenticated === true) ? (
                        <NavItem>
                            <Button onClick = {() => props.logoutUser() } size="sm"> Logout </Button>
                        </NavItem>
                        ) :
                        <div></div>
                        }
                        
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps , { logoutUser })(AppNavbar)