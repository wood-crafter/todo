import { createContext, useCallback, useContext, useState } from 'react'
import { postData } from '../utils/fetch-request'

const USER_SS_KEY = '#_user_#'

export const AuthContext = createContext(null)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem(USER_SS_KEY)))

  const proxiedSetUser = useCallback((user) => {
    if (user) {
      sessionStorage.setItem(USER_SS_KEY, JSON.stringify(user))
    } else {
      sessionStorage.getItem(USER_SS_KEY)
    }

    setUser(user)
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser: proxiedSetUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)

  return {
    user,
    async attemptLogin (username, password) {
      const { code } = await postData('http://localhost:9083/login', { username, password })

      if (code === 200) {
        setUser({ username })
      } else {
        throw new Error('Credentials mismatch...!')
      }
    },
    async logout () {
      setUser(null)
    }
  }
}
