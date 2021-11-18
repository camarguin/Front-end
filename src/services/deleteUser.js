const deleteUser = user => {
  user.id = users.length + 1
  // setUsers([...users, user])
  const response = await fetch(`${API_ENDPOINT}/personais/${user.id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
  return await response.json();
}