import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from './layout/Alerts'
import Register from './accounts/Register'

const alertOptions = {
	timeout: 3000,
	position: 'top center'
}

const App = () => {
	return (
		<>
			<AlertProvider template={AlertTemplate} {...alertOptions}>
				<Header />
				<Alerts />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Dashboard} />
						<Route exact path='/register' component={Register} />
					</Switch>
				</div>
			</AlertProvider>
		</>
	)
}

export default App
