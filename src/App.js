import './App.css';
import { Authentication, Home, Chart, Checklist, Saving, Schedule } from '../src/views'

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
      <Route path="/chart" element={(
        <RequireAuth>
          <Chart></Chart>
        </RequireAuth>
      )} />
      <Route path="/checklist" element={(
        <RequireAuth>
          <Checklist></Checklist>
        </RequireAuth>
      )} />
      <Route path="/saving" element={(
        <RequireAuth>
          <Saving></Saving>
        </RequireAuth>
      )} />
      <Route path="/schedule" element={(
        <RequireAuth>
          <Schedule></Schedule>
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
