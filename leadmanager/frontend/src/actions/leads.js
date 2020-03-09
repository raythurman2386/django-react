import axios from 'axios'
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from "./auth";

export const getLeads = () => (dispatch, getState) => {
	axios
		.get('http://localhost:8000/api/leads/', tokenConfig(getState))
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

export const deleteLead = id => (dispatch, getState) => {
	axios
		.delete(`http://localhost:8000/api/leads/${id}/`, tokenConfig(getState))
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

export const addLead = lead => (dispatch, getState) => {
	axios
		.post('http://localhost:8000/api/leads/', lead, tokenConfig(getState))
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
