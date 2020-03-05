import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types'

export const getLeads = () => dispatch => {
	fetch('http://localhost:8000/api/leads/')
		.then(res => {
			return res.json()
		})
		.then(data => {
			dispatch({
				type: GET_LEADS,
				payload: data
			})
		})
		.catch(err => console.log(err))
}

export const deleteLead = id => dispatch => {
	fetch(`http://localhost:8000/api/leads/${id}/`, {
		method: 'DELETE'
	})
		.then(data => {
			dispatch({
				type: DELETE_LEAD,
				payload: id
			})
		})
		.catch(err => console.log(err))
}

export const addLead = lead => dispatch => {
	fetch(`http://localhost:8000/api/leads/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(lead)
	})
		.then(res => res.json())
		.then(data => {
			dispatch({
				type: ADD_LEAD,
				payload: data
			})
		})
		.catch(err => console.log(err))
}
