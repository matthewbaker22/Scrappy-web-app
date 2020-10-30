import { useState } from 'react'

const useSimpleAuth = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const isAuthenticated = () =>
        loggedIn || sessionStorage.getItem("scrappy_token") !== null

    const register = userInfo => {
        return fetch("http://localhost:8000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(resp => resp.json())
            .then(resp => {
                if("token" in resp) {
                    sessionStorage.setItem("scrappy_token", resp.token)
                    setLoggedIn(true)
                }
            })
    }

    const login = credentials => {
        return fetch("http://localhost:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(resp => resp.json())
            .then(resp => {
                if("valid" in resp && resp.valid && "token" in resp) {
                    sessionStorage.setItem("scrappy_token", resp.token)
                    setLoggedIn(true)
                }
            })
    }

    const logout = () => {
        setLoggedIn(false)
        sessionStorage.removeItem("scrappy_token")
    }

    return {isAuthenticated, logout, login, register}
}

export default useSimpleAuth