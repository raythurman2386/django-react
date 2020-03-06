import axios from 'axios'
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types'
import { createMessage, returnErrors } from './messages'

export const getLeads = () => dispatch => {
	axios
		.get('http://localhost:8000/api/leads/')
		.then(res => {
			dispatch({
				type: GET_LEADS,
				payload: res.data
			})
		})
		.catch(err =>
			dispatch(returnErrors(err.response.data, err.response.status))
		)
}

export const deleteLead = id => dispatch => {
	axios
		.delete(`http://localhost:8000/api/leads/${id}/`)
		.then(res => {
			dispatch(createMessage({ leadDeleted: 'Lead Deleted' }))
			dispatch({
				type: DELETE_LEAD,
				payload: { id }
			})
		})
		.catch(err =>
			dispatch(returnErrors(err.response.data, err.response.status))
		)
}

export const addLead = lead => dispatch => {
	axios
		.post('http://localhost:8000/api/leads/', lead)
		.then(res => {
			dispatch(createMessage({ leadAdded: 'Lead Added' }))
			dispatch({
				type: ADD_LEAD,
				payload: res.data
			})
		})
		.catch(err =>
			dispatch(returnErrors(err.response.data, err.response.status))
		)
}
