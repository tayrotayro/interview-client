import React, { useState } from 'react';
import axios from "axios";

export default function Home() {
    const [value, setSum] = useState()
    const [number, setNum] = useState()
    const [error, setErr] = useState()

    function submitNumber() {
        axios.post('http://localhost:9000/api/mult', {
            value: value
        })
            .then(result => {
                const error = result.data.error;
                setErr(error);
                const number = result.data.data;
                setNum(number);

            }).catch(err => console.log(err))

    }

    return (
        <div style={wrap}>
            <h1 style={header}>Welcome to Taylor's Interview App</h1>
            <h3 style={inst}>Instructions:</h3> <p style={words}>Please input a number and click submit. The app will return result of that number multiplied by 2.</p>
            <input style={input} value={value} onChange={(e) => setSum(e.target.value)} />
            <button style={button} onClick={(e) => submitNumber()}>Submit</button>
            <h2>{number}</h2>
            { error &&
                <h2>{error}</h2>
            }
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