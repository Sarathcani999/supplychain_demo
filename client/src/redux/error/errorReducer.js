import {GET_ERRORS , CLEAR_ERRORS} from './errorTypes'

const initialState = {
    msg : [],
    status : null ,
    id : null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_ERRORS:
        return { ...state,
            msg : [...state.msg , payload.msg] ,
            id : payload.id
        }
    case CLEAR_ERRORS:
        return { ...state,
            msg : [],
            status : null ,
            id : null
        }
    
    default:
        return state
    }
}