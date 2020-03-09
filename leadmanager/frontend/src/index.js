import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import App from './components/App'

const AppWithRouter = withRouter(App)

render(
	<Router>
		<AppWithRouter />
	</Router>,
	document.getElementById('root')
)
