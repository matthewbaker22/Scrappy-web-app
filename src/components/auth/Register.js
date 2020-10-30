import React, {useRef} from "react"
import {withRouter} from "react-router-dom"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const Register = (props) => {
    const username = useRef()
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const {register}  = useSimpleAuth()

    const handleRegister = (evt) => {
        evt.preventDefault()

        const newUser = {
            "username": username.current.value,
            "first_name": firstName.current.value,
            "last_name": lastName.current.value,
            "email": email.current.value,
            "password": password.current.value
        }

        register(newUser).then(() => {
            props.history.push({
                pathname: "/"
            })
        })
    }

    return(
        <div>
            <form onSubmit={handleRegister}>
                <h1>Register here</h1>
                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input ref={username} type="text" placeholder="Username"
                        name="username" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="firstName">First Name</label>
                    <input ref={firstName} type="text" placeholder="First name"
                        name="firstName" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName">Last Name</label>
                    <input ref={lastName} type="text" placeholder="Last name"
                        name="lastName" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input ref={email} type="text" placeholder="Email"
                        name="email" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input ref={password} type="text" placeholder="Password"
                        name="password" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword">Verify Password</label>
                    <input ref={verifyPassword} type="text" placeholder="Verify password"
                        name="verifyPassword" required autoFocus />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Register and Sign in
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default withRouter(Register)