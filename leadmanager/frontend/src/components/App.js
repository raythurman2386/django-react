import React from 'react'

const App = () => {
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

	return leads.map(lead => <h1 key={lead.id}>{lead.name}</h1>)
}

export default App
