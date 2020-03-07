import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/auth'

const Register = ({ isAuthenticated, registerUser }) => {
	const [username, setUsername] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [password2, setPassword2] = React.useState('')

	const validatePassword = e => {
		e.preventDefault()
		if (password !== '' && password === password2) {
			handleSubmit(e)
		} else {
			console.log('error')
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		let user = { username, email, password }
		registerUser(user)
	}

	if (isAuthenticated) {
		return <Redirect to='/' />
	}

	return (
		<div className='col-md-6 m-auto'>
			<div className='card card-body mt-5'>
				<h2 className='text-center'>Register</h2>
				<form onSubmit={validatePassword}>
					<div className='form-group'>
						<label>Username</label>
						<input
							type='text'
							className='form-control'
							name='username'
							onChange={e => setUsername(e.target.value)}
							value={username}
						/>
					</div>
					<div className='form-group'>
						<label>Email</label>
						<input
							type='email'
							className='form-control'
							name='email'
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className='form-group'>
						<label>Password</label>
						<input
							type='password'
							className='form-control'
							name='password'
							onChange={e => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<div className='form-group'>
						<label>Confirm Password</label>
						<input
							type='password'
							className='form-control'
							name='password2'
							onChange={e => setPassword2(e.target.value)}
							value={password2}
						/>
					</div>
					<div className='form-group'>
						<button type='submit' className='btn btn-primary'>
							Register
						</button>
					</div>
					<p>
						Already have an account? <Link to='/login'>Login</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { registerUser })(Register)
