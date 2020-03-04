import React from 'react'

const Leads = () => {
	const [leads, setLeads] = React.useState([])

	React.useEffect(() => {
		fetch('http://localhost:8000/api/leads')
			.then(res => {
				return res.json()
			})
			.then(data => {
				setLeads(data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<ul>
			{leads.map(lead => (
				<li>
					{lead.name} - {lead.email}
				</li>
			))}
		</ul>
	)
}

export default Leads
