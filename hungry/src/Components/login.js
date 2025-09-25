import React, { use, useState } from 'react'
import logo from './Photos/logos.png'
export default function Login() {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userid)
    }

    return (

        <div className="credentials">
            {userid}
            {password}
            <div className="logo">
                <img src={logo} alt="Company Logo" />
                <p></p>
            </div>
            <form className="login">
                <div className="uid">
                    <label htmlFor="username">Username</label><br />
                    <input type="text" id="userid" name="userid" value={userid}
                        onChange={(e) => setUserid(e.target.value)} />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="button">
                    <button className="login" onClick={(e) => handleSubmit(e)}>Login</button>
                </div>
                <div className="signup">
                    <p>Create Account</p>
                </div>
            </form>
        </div>

    )
}