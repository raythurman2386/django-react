import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Register from './accounts/Register'
import Login from './accounts/Login'
import PrivateRoute from './utils/PrivateRoute'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from './layout/Alerts'
import { loadUser } from '../actions/auth'
import { Provider } from 'react-redux'
import store from '../store'

const alertOptions = {
	timeout: 3000,
	position: 'top center'
}

const App = () => {
	React.useEffect(() => {
		store.dispatch(loadUser())
	}, [])

	return (
		<>
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<Header />
					<Alerts />
					<div className='container'>
						<Switch>
							<PrivateRoute exact path='/' component={Dashboard} />
							<Route path='/register' component={Register} />
							<Route path='/login' component={Login} />
						</Switch>
					</div>
				</AlertProvider>
			</Provider>
		</>
	)
}

export default App
