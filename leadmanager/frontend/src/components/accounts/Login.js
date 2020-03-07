import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/auth'

const Login = ({ isAuthenticated, loginUser }) => {
	const [username, setUsername] = React.useState('')
	const [password, setPassword] = React.useState('')

	const handleSubmit = e => {
		e.preventDefault()
		loginUser(username, password)
	}

	if (isAuthenticated) {
		return <Redirect to='/' />
	}

	return (
		<div className='col-md-6 m-auto'>
			<div className='card card-body mt-5'>
				<h2 className='text-center'>Login</h2>
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
						<button type='submit' className='btn btn-primary'>
							Login
						</button>
					</div>
					<p>
						Don't have an account? <Link to='/register'>Register</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { loginUser })(Login)
