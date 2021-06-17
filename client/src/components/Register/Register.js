import React , {useState} from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input, Alert  
  } from 'reactstrap';
import { connect } from 'react-redux';
import AppNavbar from '../AppNavbar'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import { createUser } from '../../redux/index'

function Register(props) {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password , setPassword] = useState('')
    const [visible, setVisible] = useState(false);

    const onDismiss = () => setVisible(false);
    
    return (
        <div>
            
            <AppNavbar />
            <Container >            
                <Col>
                    <h2>Register</h2>
                </Col>
                <Form className="form" action='/' method="GET" >
                <Col>
                    <FormGroup>
                    <Label>Name</Label>
                    <Input
                        required
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                    />
                    </FormGroup>
                </Col>
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
                    <Input type="button" onClick={e => {
                        setVisible(true)
                        return props.createUser({
                            username , name , password
                        })    
                    }} value="Sign Up" className="btn btn-primary"/>
                </Col>
                </Form>
                <Col >
                    <p style={{marginTop : 10 }}>Already a member ? <Link to='/login'>Sign In</Link></p>
                </Col>
                <Col>
                    {props.errors.map(error => (
                        <Alert key={uuid()} color="info" isOpen={visible} toggle={onDismiss}>
                            {error}
                        </Alert>
                    ))}
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
        createUser : (user) => dispatch(createUser(user))
    }
}



export default connect(mapStateToProps , mapDispatchToProps)(Register)
