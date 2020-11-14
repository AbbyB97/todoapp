import React,{useState} from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../actions';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import '../Dashboard/Dashboard.scss';
import StaticDatePicker from '../widgets/StaticDatePicker';

const DashBoard = (props) => {
    const [taskDate, setTaskDate] = useState(new Date());

    let history = useHistory();
    const handleCreateTaskButton = () => {
        history.push('/todoapp/createtask');
    }
    const handleEditTaskButton = () => {
        history.push('/todoapp/edittask');
    }
    const handleAnalyticskButton = () => {
        history.push('/todoapp/analytics');
    }

    const handleLogout = () => {
        console.log('handle logout');
        props.logout();
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <div className="dashboard">
        <div className="ui hidden divider"></div>

            <div className="top-row">
                <div id="search-bar" className="ui icon input search">
                    <input style={{paddingLeft:"1rem"}} className="prompt" type="text" placeholder="Search Tasks..." />
                    <i className="search icon"></i>
                </div>

                <div>
                    <button  onClick={handleCreateTaskButton} class="positive ui button">New Task</button>
                </div>
                <div>
                <StaticDatePicker keyboardPicker={true} taskDate={taskDate} setTaskDate={setTaskDate}/>
                </div>
            </div>
        </div>
        </MuiPickersUtilsProvider>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}
export default connect(mapStateToProps, { logout })(DashBoard);