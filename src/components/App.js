import { lchown } from 'original-fs'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import LogItem from './LogItem'
import AddLogItem from './AddLogItem'

const App = () => {
	const [logs, setLogs] = useState([
		{
			_id: 1,
			text: 'This is log one',
			priority: 'low',
			user: 'Brad',
			created: new Date().toString()
		},
		{
			_id: 2,
			text: 'This is log two',
			priority: 'moderate',
			user: 'Kate',
			created: new Date().toString()
		},
		{
			_id: 3,
			text: 'This is log three',
			priority: 'high',
			user: 'Jake',
			created: new Date().toString()
		}
	])
	const [alert, setAlert] = useState({
		show: false,
		message: '',
		variant: 'success'
	})
	
	function addLog(item) {
		if(item.text === '' || item.user === '' || item.priority === ''){
			showAlert('Please complete log data!', 'danger')
			return false
		}
		item._id = Math.floor(Math.random() * 90000) + 10000
		item.created = new Date().toString()
		setLogs([...logs, item])
		showAlert('Log added successfully!')
	}

	function deleteLog(_id){
		setLogs(logs.filter((item) => item._id !== _id))
		showAlert('Log deleted successfully!')
	}

	function showAlert(message, variant = 'success', seconds = 3000){
		setAlert({
			show: true,
			message,
			variant
		})
		setTimeout(() => {
			setAlert({
				show: false,
				message: '',
				variant: 'success'
			})
		}, seconds)
	}

	return (
		<Container>
			<AddLogItem addLog={ addLog }/>
			{alert.show && <Alert variant={alert.variant}>{ alert.message }</Alert>}
			<Table >
				<thead>
					<tr>
						<th>Priority</th>
						<th>Log Text</th>
						<th>User</th>
						<th>Created</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{ logs.map((log) => (
						<LogItem key={ log._id } log={ log } deleteLog={ deleteLog }/>
					)) }
				</tbody>
			</Table>
		</Container>
	)
}

export default App
