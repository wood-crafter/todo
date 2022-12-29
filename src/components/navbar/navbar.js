import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='content'>
        <li>
          <NavLink to="/" className='react-link'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/forums" className='react-link'>Forums</NavLink>
        </li>
        <li>
          <NavLink to="/career" className='react-link'>Carrer</NavLink>
        </li>
        <li>
          <NavLink to="/practice" className='react-link'>Practice</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className='react-link'>Profile</NavLink>
        </li>
      </ul>
    </nav>
  )
}
