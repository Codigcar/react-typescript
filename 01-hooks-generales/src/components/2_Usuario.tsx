import React, { useState } from 'react'

interface User {
    uid:string,
    name:string
}

export const Usuario = () => {
    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: '1',
            name:'Carlos'
        })
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button className="btn btn-outline-primary mb-3" onClick={login}>Ver Usuario</button>    
            {
                (!user)
                    ? <pre>No hay usuario</pre> 
                    : <pre>{ JSON.stringify(user) }</pre>
            }
        </div>
    )
}
