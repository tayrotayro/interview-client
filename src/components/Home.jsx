import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getNum } from './numSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [sum, setSum] = useState()
    //const [number, setNum] = useState()
    //const [error, setErr] = useState()
    const { value } = useSelector((state) => state.num)
    const dispatch = useDispatch()

    const handleUpdateValue = async (val) => {
        const resultAction = await dispatch(getNum({ value: val }))
        if (getNum.fulfilled.match(resultAction)) {
            // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
            const value = resultAction.payload
            toast('success', `Updated ${value} ${value}`)
            return value
        } else {
            return "error"
        }
    }

    return (
        <div style={wrap}>
            <h1 style={header}>Welcome to Taylor's Interview App</h1>
            <h3 style={inst}>Instructions:</h3> <p style={words}>Please input a number and click submit. The app will return result of that number multiplied by 2.</p>
            <input style={input} value={sum} onChange={(e) => setSum(e.target.value)} />
            <button style={button} onClick={(e) => handleUpdateValue(sum)}>Submit</button>

            <h2>{value}</h2>
        </div>
    )
}


const wrap = {
    margin: '25px',
}

const header = {
    fontSize: 44,
}

const inst = {
    margin: '0px',
}

const words = {
    marginTop: '5px',
}

const input = {
    margin: '10px',
    fontSize: 20
}

const button = {
    fontSize: 20
}