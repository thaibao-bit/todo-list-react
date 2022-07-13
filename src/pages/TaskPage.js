import { Link, Route, Routes } from 'react-router-dom';
import Done from './DonePage';
import Today from './TodayPage';
import Upcoming from './UpComingPage';

function Task(){

    return <div className="row-10">
        <div className="col-3">
          <p>Current page is: {window.location.pathname}</p>
        <ul>
            <li className='left-menu' > <Link to="/tasks/today">  Today Tasks</Link> </li>
            <li className='left-menu' > <Link to="/tasks/upcoming">Up Coming Tasks</Link> </li>
            <li className='left-menu' > <Link to="/tasks/done">Done</Link> </li>
           
          </ul>
        </div>
        <div className="col-7">
       
        <Routes>
          <Route path="" element={<Today/>}/>
          <Route path="today" element={<Today/>}/>
          <Route path="upcoming" element={<Upcoming/>}/>
          <Route path="done" element={<Done/>}/>
        </Routes>
          
        </div>
        
    </div>
}
export default Task