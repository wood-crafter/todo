import './index.css'
import { Navbar } from '../../components/navbar/navbar'

export const Schedule = (props) => {
  return (
    <div className='schedule'>
      <Navbar></Navbar>
      <div className='schedule-body'>
        <div className='options-container'></div>
        <div className='time-in-day-container'></div>
      </div>
    </div>
  )
}
