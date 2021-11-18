import axios from 'axios'
import React, { useState, useEffect } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const API_ENDPOINT = 'http://localhost:8090'

const App = () => {

	useEffect(() => {
		axios.get(`${API_ENDPOINT}/personais`)
			.then((response) => console.log(response))
	}, [])

	// Data
	const usersData = [

	]

	const initialFormState = { id: null, nome: '', username: '', usersenha: '' }

	// Setting state
	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		// setUsers([...users, user])
		const response = await fetch(`${API_ENDPOINT}/personais`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		})
		return await response.json();
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username, senha: user.senha })
	}

	return (
		<div className="container">
			<h3><font size="12"><font color="black">Perfect Trainer </font></font></h3>
			<h1><font size="6"><font color="black">Encontre o seu personal aqui! </font></font></h1>
			<div className="flex-row">
				<div>
					{editing ? (
						<>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</>
					) : (
						<>
							<h2>Cadastrar Personal</h2>
							<AddUserForm addUser={addUser} />
						</>
					)}
				</div>
				<div className="flex-large">
					<h2>Usuários Cadastrados</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
