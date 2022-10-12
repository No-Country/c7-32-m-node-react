import React from "react"

import '../../styles/register.css'

import logo from "../../assets/images/Logo.svg"


import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    return (
        <div className="container-register">
            <img src={logo} style={{ marginTop: "1rem" }}/>
            <h1>Welcome</h1>
            <h3>Register your account</h3>
            <form className="container-form">
                <div className="div-input">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Pedro"/>
                </div>
                <div className="div-input">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" placeholder="Perez"/>
                </div>
                <div className="div-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="example@example.com"/>
                </div>
                <div className="div-input">
                    <label htmlFor="emailConf">Confirm Email</label>
                    <input type="email" id="emailConf" placeholder="example@example.com"/>
                </div>
                <div className="div-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="**********"/>
                </div>
                <div className="div-input">
                    <label htmlFor="passConf">Confirm Password</label>
                    <input type="password" id="passConf" placeholder="**********"/>
                </div>
                <div className="form-check">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <input type="checkbox" name="" id="" />
                        <p>
                            I agree to the <span>Terms of Service</span> and {" "}
                            <span>Privacy Policy</span>
                        </p>
                    </div>
                    <button style={{marginTop: '15px'}}>Register now</button>
                </div>
            </form>
            <p className="form-signIn">
                Already have an account? <span style={{ cursor:'pointer' }} onClick={ ()=> navigate('/login') }>Sign in</span>
            </p>
        </div>
    )
}

export default Register