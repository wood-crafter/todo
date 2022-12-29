import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from './use-auth'

export function RequireAuth ({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  return user
    ? children
    : <Navigate to="/authentication" state={{ from: location }} replace />
}
