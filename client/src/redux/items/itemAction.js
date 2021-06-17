import axios from 'axios'
import {
    ADD_ITEM_REQUEST , 
    ADD_ITEM_SUCCESS , 
    ADD_ITEM_FAILURE , 
    DELETE_ITEM_REQUEST , 
    DELETE_ITEM_SUCCESS , 
    DELETE_ITEM_FAILURE ,
    FETCH_ITEMS_SUCCESS ,
    FETCH_ITEMS_REQUEST ,
    FETCH_ITEMS_FAILURE
} from './itemTypes'

// Action to Delete an Item 
export const deleteItem = (item_id) => {
    return function(dispatch) {
        dispatch({
            type : DELETE_ITEM_REQUEST
        })

        var url = '/api/items/'+item_id
        
        axios.delete(url)
            .then(res => {
                dispatch({
                    type : DELETE_ITEM_SUCCESS ,
                    payload : res.data.id
                })
                
            })
            .catch(err => {
                dispatch({
                type : DELETE_ITEM_FAILURE ,
                payload : err
                })
            })
    }
}

// Action to Create an Item 
export const createItem = (item) => {
    return function(dispatch,getState) {
        dispatch({
            type : ADD_ITEM_REQUEST
        })

        var body = {
            name : item
        }

        const token = getState().auth.token

        if (!token) {
            return dispatch({
                type : ADD_ITEM_FAILURE ,
                payload : "Not Authenticated"
                })
        }

        var config = {
            headers : {
                "Content-type" : "application/json" ,
                "x_auth" : token
            } 
        }

        axios.post('/api/items' , body , config)
            .then(res => {
                dispatch({
                    type : ADD_ITEM_SUCCESS ,
                    payload : res.data
                })
            })
            .catch(err => {
                dispatch({
                type : ADD_ITEM_FAILURE ,
                payload : err
                })
            })
    }

}


// Action to fetch Items from backend
export function fetchItems() {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
  
    return function(dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch({
            type : FETCH_ITEMS_REQUEST
        })
        axios.get("/api/items")
            .then(res => {
                dispatch({
                    type : FETCH_ITEMS_SUCCESS ,
                    payload : res.data
                })
            })
            .catch(err => {
                dispatch({
                type : FETCH_ITEMS_FAILURE ,
                payload : err
                })
            })
    }

}