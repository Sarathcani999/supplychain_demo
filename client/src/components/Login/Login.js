import React , {useState} from 'react'
import AppNavbar from '../AppNavbar'
import {
    Container, Col, Form,
    FormGroup, Label, Input, Alert 
  } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser, clearErrors} from '../../redux/index';
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
export const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [visible, setVisible] = useState(false);

    
    const onDismiss = () => setVisible(false);
    return (
        <div>
            <AppNavbar />
            <Container >
                <Col >
                    <h2>Sign In</h2>
                </Col>
                <Form className="form" action='/' method="GET">
                <Col>
                    <FormGroup>
                    <Label>Username</Label>
                    <Input
                        required
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                    required
                        type="password"
                        value={password}
                        placeholder="********"
                        onChange={e => setPassword(e.target.value)}
                    />
                    </FormGroup>
                </Col>
                <Col>
                <Input type="button" onClick={() => {
                        setVisible(true)
                        props.loginUser({username , password})
                    }
                    } value="Login" className="btn btn-primary"/>
                </Col>
                </Form>
                <Col >
                    <p style={{marginTop : 10 }}>Not a member ? <Link to='/register'>Register</Link></p>
                    
                </Col>
                <Col style={{minHeight : "100px"}}>
                    {props.errors.map(error => (
                        <Alert key={uuid()} color="info" isOpen={visible} toggle={onDismiss}>
                            {error}
                        </Alert>
                    ))}
                </Col>
                <Col >
                    <hr />
                    <p style={{textAlign : "center" , color : "grey"}}>
                        &copy; Copyright 2020
                    </p>
                </Col>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        errors : state.error.msg
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser : ({username , password}) => dispatch(loginUser({username , password})) ,
        clearErrors : () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)