import React from 'react'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

const App = () => {
	return (
		<>
			<Header />
			<div class='container'>
				<Dashboard />
			</div>
		</>
	)
}

export default App
