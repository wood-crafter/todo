import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='content'>
        <li>
          <NavLink to="/" className='react-link'>Home</NavLink>
        </li>
        <div className='middle-blank'></div>
        <li>
          <NavLink to="/checklist" className='react-link'>Checklist</NavLink>
        </li>
        <li>
          <NavLink to="/schedule" className='react-link'>Schedule</NavLink>
        </li>
        <li>
          <NavLink to="/tikop" className='react-link'>Tikop</NavLink>
        </li>
        <li>
          <NavLink to="/chart" className='react-link'>Chart</NavLink>
        </li>
      </ul>
    </nav>
  )
}
