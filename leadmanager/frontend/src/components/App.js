import React from 'react'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from './layout/Alerts'

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
					<Dashboard />
				</div>
			</AlertProvider>
		</>
	)
}

export default App
