import axios from 'axios'
import { returnErrors } from './messages'
import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	REGISTER_SUCCESS,
	REGISTER_ERROR,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL
} from './types'

export const loadUser = () => (dispatch, getState) => {
	dispatch({ type: USER_LOADING })

	axios
		.get('http://localhost:8000/api/auth/user', tokenConfig(getState))
		.then(res => {
			dispatch({
				type: USER_LOADED,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status))
			dispatch({
				type: AUTH_ERROR
			})
		})
}

export const registerUser = user => dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const body = JSON.stringify(user)

	axios
		.post('http://localhost:8000/api/auth/register', body, config)
		.then(res => {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status))
			dispatch({
				type: REGISTER_ERROR
			})
		})
}

export const loginUser = (username, password) => dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const body = JSON.stringify({ username, password })

	axios
		.post('http://localhost:8000/api/auth/login', body, config)
		.then(res => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status))
			dispatch({
				type: LOGIN_ERROR
			})
		})
}

export const logoutUser = () => (dispatch, getState) => {
	axios
		.post('http://localhost:8000/api/auth/logout/', null, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: LOGOUT_SUCCESS
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status))
			dispatch({
				type: LOGOUT_FAIL
			})
		})
}

export const tokenConfig = getState => {
	const token = getState().auth.token

	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	if (token) {
		config.headers['Authorization'] = `Token ${token}`
	}

	return config
}
