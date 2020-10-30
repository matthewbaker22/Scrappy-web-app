import React, {useState} from "react"
import {Link} from "react-router-dom"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const NavBar = props => {
    const {isAuthenticated, logout} = useSimpleAuth()

    return (
        <nav>
            <ul>
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                {
                    isAuthenticated() ?
                        <li>
                            <button onClick={() => {
                                logout()
                                props.history.push({
                                    pathname: "/"
                                })
                            }}>
                                Logout
                            </button>
                        </li>
                        :
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                }
            </ul>
        </nav>
    )
}

export default NavBar