/**
 * @docs
 * 
 * loadUser :
 *  asynchronous action
 *  fetches the user from `~/ai/auth/user` and headers : { x_auth : token }
 *      
 *      
 */

import axios from 'axios'
import { USER_LOADED , USER_LOADING, AUTH_ERROR, REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_FAIL , LOGIN_SUCCESS, LOGOUT_SUCCESS} from './authTypes'
import { returnErrors, clearErrors } from '../error/errorActions'

export const logoutUser = () => ({
    type: LOGOUT_SUCCESS
})


export const createUser = (user) => {
    
    return function(dispatch , getState){
        dispatch(clearErrors())
        if (getState().auth.isAuthenticated) return dispatch({
            type : REGISTER_FAIL
        })

        var config = setupConfig(getState)

        axios.post('/api/auth/Register' , user , config)
            .then( res => dispatch({
                type: REGISTER_SUCCESS ,
                payload : res.data ,
                
            }))
            .catch( err => {
                dispatch(returnErrors(err.response.data.message))
                dispatch({
                type : REGISTER_FAIL
                })
            })
    }
}

export const loginUser = ({username , password}) => {
    return function(dispatch , getState){
        dispatch(clearErrors())
        if (getState().auth.isAuthenticated) return dispatch({
            type : LOGIN_FAIL
        })

        var config = setupConfig(getState)

        axios.post('/api/auth/Login' , {username , password} , config)
            .then( res => dispatch({
                type: LOGIN_SUCCESS ,
                payload : res.data
            }))
            .catch( err => {
                dispatch(returnErrors(err.response.data.message))
                return dispatch({
                    type : LOGIN_FAIL
                })
            })
    }
}

export const loadUser = () => {
    return function( dispatch , getState) {
    
        dispatch({
            type : USER_LOADING
        })
        const config = setupConfig(getState)

        axios.get('/api/auth/user' , config)
            .then(res => {
                dispatch({
                    type : USER_LOADED ,
                    payload : res.data
                })
            })
            .catch(err => {
                dispatch({
                    type : AUTH_ERROR
                })
            })
    }
}

const setupConfig = (getState) => {
    var config = {
        headers : {
            "Content-type" : "application/json"
        }
    }

    var token = getState().auth.token

    if (token) {
        config.headers['x_auth'] = token
    }

    return config
}