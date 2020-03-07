import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'redux'

const Register = () => {
	const [username, setUsername] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [password2, setPassword2] = React.useState('')

	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<div className='col-md-6 m-auto'>
			<div className='card card-body mt-5'>
				<h2 className='text-center'>Register</h2>
				<form onSubmit={handleSubmit}>
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

export default Register
