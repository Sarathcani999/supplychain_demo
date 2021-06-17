import {
    ADD_NOTE_REQUEST , ADD_NOTE_FAILURE , ADD_NOTE_SUCCESS ,
    FETCH_NOTES_FAILURE , FETCH_NOTES_SUCCESS , FETCH_NOTES_REQUEST ,
    DELETE_NOTE_FAILURE , DELETE_NOTE_REQUEST , DELETE_NOTE_SUCCESS
} from './noteTypes'


const initialState = {
    notes : [] ,
    loading : false ,
    error : '' 
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    
    case ADD_NOTE_REQUEST:
        return {
            ...state ,
            loading : true
        }
    case ADD_NOTE_FAILURE:
        return {
            ...state ,
            loading : false ,
            error : payload
        }
    case ADD_NOTE_SUCCESS:
        return { 
            notes : [payload , ...state.notes]    
        }
    case DELETE_NOTE_SUCCESS:
        return { 
        ...state ,
        loading : false ,
        notes : state.notes.filter(note => note._id !== payload)
    }
    case DELETE_NOTE_REQUEST:
        return {
            ...state ,
            loading : true
        }
    case DELETE_NOTE_FAILURE:
        return {
            ...state ,
            loading : false ,
            error : payload

        }
    case FETCH_NOTES_REQUEST:
        return { 
            ...state ,
            loading : true
        }
    case FETCH_NOTES_SUCCESS:
        return { 
            ...state ,
            loading : false ,
            error : '' ,
            notes : payload
        }
    case FETCH_NOTES_FAILURE:
        return { 
            ...state ,
            loading : false ,
            error : payload 
            }
    default:
        return state
    }
}
