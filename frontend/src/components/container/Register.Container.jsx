import React from "react"
import '../../styles/register.css'
import logo from "../../assets/images/Logo.svg"
import { httpsRequest } from '../../assets/config/axios'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

import { useNavigate } from 'react-router-dom'

const Register = () => {
	// const MySwal = withReactContent(Swal)
	const navigate = useNavigate()

	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		},
		didClose: () => {
			navigate('/')
		}
	})

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			await httpsRequest('post', 'http://localhost:5000/api/register', {
				name: e.target.name.value,
				surname: e.target.lastName.value,
				email: e.target.email.value,
				password: e.target.password.value
			}).then(async (data) => {
				console.log(await data.data)
				Toast.fire({
					icon: 'success',
					title: 'Registro exitoso!',
					// text: 'Usuario creado con exito.'
				})
			}).catch(err => console.log(err))
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<div className="containerRegister">
			<img src={logo} style={{ marginTop: "1rem" }} />
			<h1>Welcome</h1>
			<h3>Register your account</h3>
			<form className="containerForm" onSubmit={handleSubmit}>
				<div className="divInput">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" placeholder="Pedro" />
				</div>
				<div className="divInput">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" placeholder="Perez" />
				</div>
				<div className="divInput">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" placeholder="pedro.perez@wallet.com" />
				</div>
				<div className="divInput">
					<label htmlFor="emailConf">Confirm Email</label>
					<input type="email" id="emailConf" placeholder="pedro.perez@wallet.com" />
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
					<button style={{ marginTop: '15px' }}>Register now</button>
				</div>
			</form>
			<p>
				Already have an account? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>Sign in</span>
			</p>
		</div>
	)
}

export default Register