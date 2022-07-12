import { Link, Route } from 'react-router-dom';
import Today from './TodayPage';

function Task(){
    return <div className="row">
        <div className="col-3">
        <ul>
            <li> <Link to="/tasks/today">Today Tasks</Link> </li>
            <li> <Link to="/tasks/upcoming">Up Coming Tasks</Link> </li>
            <li> <Link to="/tasks/done">Done</Link> </li>
           
          </ul>
        </div>
        <div className="col-7">
       
          <Route exact path="today" element={<Today/>}/>
          <Route exact path="upcoming" element={<Today/>}/>
          <Route exact path="done" element={<Today/>}/>
       
          
        </div>
        
    </div>
}
export default Task