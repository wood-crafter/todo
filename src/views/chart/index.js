import './index.css'
import { Navbar } from '../../components/navbar/navbar'

export const Chart = (props) => {
  return (
    <div className='chart'>
      <Navbar></Navbar>
      <div className='chart-body'></div>
    </div>
  )
}
