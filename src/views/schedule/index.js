import './index.css'
import 'react-calendar/dist/Calendar.css'
import { Navbar } from '../../components/navbar/navbar'
import Calendar from 'react-calendar'
import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'

export const Schedule = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isPopupShowing, setIsPopupShowing] = useState(false)
  const timeInDay = Array.from({ length: 24 }, (v, k) => k + 1)

  const handleCalendarValueChange = (date) => {
    setSelectedDate(date)
  }

  const showAddTodo = () => {
    setIsPopupShowing(!isPopupShowing)
  }

  // TODO: Remove log
  useEffect(() => {
    console.info(isPopupShowing)
  }, [isPopupShowing])

  function TodoPopup() {
    return ReactDOM.createPortal(
      <div className='add-todo-popup'></div>,
      document.querySelector('body')
    )
  }

  return (
    <div className='schedule' id='schedule'>
      <Navbar></Navbar>
      <div className='schedule-body'>
        <div className='options-container'>
          <div className='add-todo option-container'>
            <button className='btn-add-todo' onClick={showAddTodo} >Should show modal</button>
          </div>
          <div className='calendar option-container'>
            <Calendar onChange={handleCalendarValueChange} value={selectedDate} />
          </div>
          <div className='other-options option-container'></div>
        </div>

        <div className='time-in-day-container'>
          <div className='timestones-container'>
            <div className='timestones'></div>
            {timeInDay.map(item => (
              <div className='timestones' key={item} >{item !== 24 ? item : ""}</div>
            ))}
          </div>
          <div className='milestone-container'>
            {timeInDay.map(item => (
              <div className='milestone' key={item} ></div>
            ))}
          </div>
        </div>
      </div>

      <TodoPopup>
      </TodoPopup>
    </div>
  )
}
