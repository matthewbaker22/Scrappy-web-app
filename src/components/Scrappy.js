import React from 'react'
import {Route} from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationView from './ApplicationViews'

function Scrappy() {
    return (
        <React.Fragment>
            <Route render={props => (
                <NavBar {...props} />
            )}/>
            <ApplicationView />
        </React.Fragment>
    )
}

export default Scrappy