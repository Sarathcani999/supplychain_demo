/**
 * @docs
 * 
 * returnErrors : action
 * clearErrors : action
 */

import { GET_ERRORS , CLEAR_ERRORS } from './errorTypes'

export const returnErrors = (msg , id = null) => ({
    type: GET_ERRORS,
    payload : {msg , id}
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
})

