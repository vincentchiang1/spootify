import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <h1>Spootify</h1>
            <Link to="/home">
                <Button variant="contained" color="primary">Login</Button>
            </Link>         
        </div>
    )
}
