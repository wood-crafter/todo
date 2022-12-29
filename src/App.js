import './App.css';
import { Authentication, Home } from '../src/views'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { RequireAuth } from './providers/require-auth'
import { AuthProvider } from './providers/use-auth'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/" element={(
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        )} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <div className='App'>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </div>
    </Router>
  )
}

export default App;
