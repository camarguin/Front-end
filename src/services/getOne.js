export async function getOne(id) {
  const response = await fetch(`${API_ENDPOINT}/${id}`)
  return await response.json();
}