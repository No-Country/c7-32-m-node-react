import React from "react";
import logo from "../../assets/images/Logo.svg";
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    return (
        <div className="containerRegister">
            <img src={logo} style={{ marginTop: "1rem" }}/>
            <h1>Welcome</h1>
            <h3>Register your account</h3>
            <form className="containerForm">
                <div className="divInput">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </div>
                <div className="divInput">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" />
                </div>
                <div className="divInput">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="divInput">
                    <label htmlFor="emailConf">Confirm Email</label>
                    <input type="email" id="emailConf" />
                </div>
                <div className="divInput">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="divInput">
                    <label htmlFor="passConf">Confirm Password</label>
                    <input type="password" id="passConf" />
                </div>
                <div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <input type="checkbox" name="" id="" />
                        <p>
                            I agree to the <span>Terms of Service</span> and{" "}
                            <span>Privacy Policy</span>
                        </p>
                    </div>
                    <button style={{marginTop: '15px'}}>Register now</button>
                </div>
            </form>
            <p>
                Already have an account? <span style={{ cursor:'pointer' }} onClick={ ()=> navigate('/login') }>Sign in</span>
            </p>
        </div>
    );
};

export default Register;
