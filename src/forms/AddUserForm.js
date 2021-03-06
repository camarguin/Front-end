import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '', senha: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username || !user.senha) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Nome</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>E-mail</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<label>Senha</label>
			<input type="text" name="senha" value={user.senha} onChange={handleInputChange} />
			<button>Adicionar Usuário</button>
		</form>
	)
}

export default AddUserForm
