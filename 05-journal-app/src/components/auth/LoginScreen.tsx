import React from 'react'

export const LoginScreen = () => {
    return (
        <>
            Login
            <form>
                <input type="email" placeholder="name" name="emial" /> <br />
                <input type="password" placeholder="password" name="password" />
                <button type="submit">Login</button>
                <hr />
                Google

            </form>
        </>
    )
}
