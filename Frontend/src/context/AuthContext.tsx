import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'

import {
  saveToken,
  getToken,
  removeToken,
} from '../utils/storage'

type AuthContextType = {
  token: string | null
  login: (token: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
})

export const AuthProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    loadToken()
  }, [])

  const loadToken = async () => {
    const storedToken = await getToken()

    if (storedToken) {
      setToken(storedToken)
    }
  }

  const login = async (newToken: string) => {
    await saveToken(newToken)
    setToken(newToken)
  }

  const logout = async () => {
    await removeToken()
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}