import './index.css'
import { Navbar } from '../../components/navbar/navbar'

export const Checklist = (props) => {
  return (
    <div className='checklist'>
      <Navbar></Navbar>
      <div className='checklist-body'></div>
    </div>
  )
}
