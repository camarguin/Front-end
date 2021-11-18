export async function getAll() {
  const response = await fetch(`${API_ENDPOINT}/personais`);
  return await response.json();
}