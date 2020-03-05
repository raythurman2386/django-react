import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'

class Alerts extends Component {
	componentDidUpdate(prevProps) {
		const { error, alert } = this.props
		if (error !== prevProps.error) {
			if (error.msg.name) {
				alert.error(`Name: ${error.msg.name.join()}`)
			}

			if (error.msg.email) {
				alert.error(`Email: ${error.msg.email.join()}`)
			}

			if (error.msg.msg) {
				alert.error(`Email: ${error.msg.msg.join()}`)
			}
		}
	}

	render() {
		return <Fragment />
	}
}

const mapStateToProps = state => ({
	error: state.errors
})

export default connect(mapStateToProps)(withAlert()(Alerts))
