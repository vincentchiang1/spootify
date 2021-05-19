import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
const axios = require('axios');

export default function Login() {

    const callLogin = () => {
        console.log('hihihhi')
        axios.get('http://localhost:8888/login').then(resp => {

            console.log(resp.data);
        });
    }

    return (
        <div>
            <h1>Spootify</h1>
            {/* <Link to="/home"> */}
                <a href='http://localhost:8888/login'><Button variant="contained" color="primary">CONNECT WITH SPOOTIFY</Button></a>
            {/* </Link>          */}
        </div>
    );
}
