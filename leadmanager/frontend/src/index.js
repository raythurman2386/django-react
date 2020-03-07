import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App'

const AppWithRouter = withRouter(App)

render(
	<Provider store={store}>
		<Router>
			<AppWithRouter />
		</Router>
	</Provider>,
	document.getElementById('root')
)
