const TOKEN_KEY = 'TOKEN_KEY'

export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  return token
}

export const setToken = (token: string) => {
  if (!token) return
  localStorage.setItem(TOKEN_KEY, token)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}
