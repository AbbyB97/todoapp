import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../actions';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import '../Dashboard/Dashboard.scss';
import StaticDatePicker from '../widgets/StaticDatePicker';
import TaskCard from '../widgets/TaskCard'

const DashBoard = (props) => {
    const [taskDate, setTaskDate] = useState(new Date());

    let history = useHistory();
    const handleCreateTaskButton = () => {
        history.push('/createtask');
    }
    const handleEditTaskButton = () => {
        history.push('/edittask');
    }
    const handleAnalyticskButton = () => {
        history.push('/analytics');
    }

    const handleLogout = () => {
        console.log('handle logout');
        props.logout();
    }
    const renderTaskLists = () => {
        console.log("props.task", props.state.tasks);
        return props.state.tasks.map((task) => {
            console.log(task);
            return (
                <TaskCard task={task.taskName} />
            );
        })

    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <div className="dashboard">
                <div className="ui hidden divider"></div>

                <div className="top-row">
                    <div id="search-bar" className="ui icon input search">
                        <input style={{ paddingLeft: "1rem" }} className="prompt" type="text" placeholder="Search Tasks..." />
                        <i className="search icon"></i>
                    </div>

                    <div>
                        <button onClick={handleCreateTaskButton} class="positive ui button">New Task</button>
                    </div>
                    <div>
                        <StaticDatePicker keyboardPicker={true} taskDate={taskDate} setTaskDate={setTaskDate} />
                    </div>
                </div>
                {renderTaskLists()}

            </div>
        </MuiPickersUtilsProvider>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}
export default connect(mapStateToProps, { logout })(DashBoard);