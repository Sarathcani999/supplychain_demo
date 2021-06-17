import itemReducer from './items/itemReducer'
import authReducer from './auth/authReducer'
import errorReducer from './error/errorReducer'
import noteReducer from './notes/noteReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    item : itemReducer , auth : authReducer , error : errorReducer , note : noteReducer
})

export default rootReducer