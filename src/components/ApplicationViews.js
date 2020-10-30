import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home.js'

// registration & login
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import Login from "./auth/Login"
import Register from "./auth/Register"

const ApplicationView = (props) => {
    return (
        <React.Fragment>
            <Route exact path="/" render={props => {
                return <Home />
            }}/>
            <Route exact path="/login" render={props => {
                return <Login isAuthenticated={useSimpleAuth.isAuthenticated} {...props}/>
            }}/>
            <Route exact path="/register" render={props => {
                return <Register {...props}/>
            }}/>
        </React.Fragment>
    )
}

export default ApplicationView