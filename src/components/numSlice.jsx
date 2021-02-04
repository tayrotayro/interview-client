import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getNum = createAsyncThunk(
  'num/getNum',
  async ({ value }) => {
    console.log(value)
    const response = axios.post('http://localhost:9000/api/mult', {
      value: value
    })
      .then(response => response.data)
      .catch(err => err)
    // try {
    //   const response = await axios.post('http://localhost:9000/api/mult', {
    //     value: value
    //   })
    //   console.log(response.data)
    //   return (
    //     response.data
    //   )
    // }
    // catch (err) {
    //   return err.response.data;
    // }

  })

const numSlice = createSlice({
  name: 'num',
  initialState: {
    value: 0,
    status: null,
    error: null
  },
  extraReducers: {
    [getNum.pending]: (state, action) => {
      state.status = 'loading'
      state.value = action.payload
    },
    [getNum.fulfilled]: (state, action) => {
      state.status = 'success'
      state.value = action.payload
    },
    [getNum.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default numSlice.reducer

export const selectNum = ({ num }) => num