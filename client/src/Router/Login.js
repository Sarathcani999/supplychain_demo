import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import SignIn from '../components/Login/Login'
import { Spinner } from 'reactstrap';

function Login(props) {
    return (
        <div>
            {props.isAuthenticated === false ? <SignIn /> : props.isAuthenticated === true ? <Redirect to='/' /> : (
            <center>
                <Spinner />
            </center>
            ) }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.isAuthenticated 
    }
}

export default connect(mapStateToProps )(Login)
