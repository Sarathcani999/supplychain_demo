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


const initialState = {
    items : [] ,
    loading : false ,
    error : '' 
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    
    case ADD_ITEM_REQUEST:
        return {
            ...state ,
            loading : true
        }
    case ADD_ITEM_FAILURE:
        return {
            ...state ,
            loading : false ,
            error : payload
        }
    case ADD_ITEM_SUCCESS:
        return { 
            items : [...state.items , payload]    
        }
    case DELETE_ITEM_SUCCESS:
        return { 
        ...state ,
        loading : false ,
        items : state.items.filter(item => item._id !== payload)
    }
    case DELETE_ITEM_REQUEST:
        return {
            ...state ,
            loading : true
        }
    case DELETE_ITEM_FAILURE:
        return {
            ...state ,
            loading : false ,
            error : payload

        }
    case FETCH_ITEMS_REQUEST:
        return { 
            ...state ,
            loading : true
        }
    case FETCH_ITEMS_SUCCESS:
        return { 
            ...state ,
            loading : false ,
            error : '' ,
            items : payload
        }
    case FETCH_ITEMS_FAILURE:
        return { 
            ...state ,
            loading : false ,
            error : payload 
            }
    default:
        return state
    }
}
