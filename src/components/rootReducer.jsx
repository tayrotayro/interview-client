import { combineReducers } from 'redux'
import numSlice from './numSlice'

//import combineReducers

export default combineReducers({
    num: numSlice,
})