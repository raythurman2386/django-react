import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addLead } from '../../actions/leads'

const Form = ({ addLead }) => {
	const [name, setName] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [message, setMessage] = React.useState('')

	const handleSubmit = e => {
		e.preventDefault()
		addLead({ name, email, message })
		setName('')
		setEmail('')
		setMessage('')
	}

	return (
		<div className='card card-body mt-4 mb-4'>
			<h2>Add Lead</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Name</label>
					<input
						className='form-control'
						type='text'
						name='name'
						onChange={e => setName(e.target.value)}
						value={name}
					/>
				</div>
				<div className='form-group'>
					<label>Email</label>
					<input
						className='form-control'
						type='email'
						name='email'
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className='form-group'>
					<label>Message</label>
					<textarea
						className='form-control'
						type='text'
						name='message'
						onChange={e => setMessage(e.target.value)}
						value={message}
					/>
				</div>
				<div className='form-group'>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

// propTypes = {
// 	addLead: PropTypes.func.isRequired
// }

export default connect(null, { addLead })(Form)
