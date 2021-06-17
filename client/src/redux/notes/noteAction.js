import axios from 'axios'
import {
    ADD_NOTE_REQUEST , ADD_NOTE_FAILURE , ADD_NOTE_SUCCESS ,
    FETCH_NOTES_FAILURE , FETCH_NOTES_SUCCESS , FETCH_NOTES_REQUEST ,
    DELETE_NOTE_FAILURE , DELETE_NOTE_REQUEST , DELETE_NOTE_SUCCESS
} from './noteTypes'

export const deleteNote = (note_id) => {
    return function(dispatch , getState) {
        dispatch({
            type : DELETE_NOTE_REQUEST
        })

        var url = '/api/notes/'+note_id
        var config = setupConfig(getState)
        
        axios.delete(url , config)
            .then(res => {
                dispatch({
                    type : DELETE_NOTE_SUCCESS ,
                    payload : res.data.id
                })
                
            })
            .catch(err => {
                dispatch({
                type : DELETE_NOTE_FAILURE ,
                payload : err
                })
            })
    }
}

export const createNote = (body) => {
    return function(dispatch , getState){
        var config = setupConfig(getState)
        dispatch({
            type : ADD_NOTE_REQUEST
        })

        axios.post("/api/notes/" , {body} , config)
            .then(res => { 
                dispatch({
                    type : ADD_NOTE_SUCCESS ,
                    payload : res.data
                })
            }
            )
            .catch(err => {
                console.log(err)
                dispatch({
                    type : ADD_NOTE_FAILURE ,
                    payload : err
                })
            }
            )
    }
}

export function fetchNotes() {
  
    return function(dispatch , getState) {

        const token = getState().auth.token

        if (!token) {
            return dispatch({
                type : ADD_NOTE_FAILURE ,
                payload : "Not Authenticated"
                })
        }

        var config = {
            headers : {
                "Content-type" : "application/json" ,
                "x_auth" : token
            } 
        }

        dispatch({
            type : FETCH_NOTES_REQUEST
        })
        axios.get("/api/notes" , config)
            .then(res => {
                dispatch({
                    type : FETCH_NOTES_SUCCESS ,
                    payload : res.data
                })
            })
            .catch(err => {
                dispatch({
                type : FETCH_NOTES_FAILURE ,
                payload : err
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