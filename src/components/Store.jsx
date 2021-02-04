import { configureStore } from '@reduxjs/toolkit'
import numReducer from './numSlice'

export default configureStore({ reducer: numReducer })