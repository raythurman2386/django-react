import React from 'react'
import { connect } from 'react-redux'
import { getLeads, deleteLead } from '../../actions/leads'

const Leads = ({ leads, getLeads, deleteLead }) => {
	React.useEffect(() => {
		getLeads()
	}, [])

	return (
		<>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th>ID</th>
						<th>NAME</th>
						<th>EMAIL</th>
						<th>MESSAGE</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{leads.map(lead => (
						<tr key={lead.id}>
							<td>{lead.id}</td>
							<td>{lead.name}</td>
							<td>{lead.email}</td>
							<td>{lead.message}</td>
							<td>
								<button
									onClick={() => deleteLead(lead.id)}
									className='btn btn-danger btn-sm'
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

const mapStateToProps = state => ({ leads: state.leads.leads })

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads)
