import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../actions';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import {find} from 'lodash';

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
    const renderTaskLists = (tag) => {

        var tagtasks= props.state.tasks.filter(task=>task.tag ===tag)

        return tagtasks.map((task) => {
            return (
                <TaskCard task={task} />
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
                <div className="tasks-container">
                { find(props.state.tasks,{tag:"To-do"})? 
                 <div style={{backgroundColor:"#f8f8f9",width:"300px",border:"red"}}>
                 <div style={{textAlign:"center",backgroundColor:"#f2c94c",borderTopRightRadius:"0.5rem",borderTopLeftRadius:"0.5rem"}}>
                     <h3 style={{padding:"0.27rem",color:"white"}}>To do</h3>
             </div>
             {renderTaskLists("To-do")}
             </div>
                : null}
               
               { find(props.state.tasks,{tag:"In-Progress"})? 
                <div style={{backgroundColor:"#f8f8f9",width:"300px",border:"red"}}>
                    <div style={{textAlign:"center",backgroundColor:"#21ba45",borderTopRightRadius:"0.5rem",borderTopLeftRadius:"0.5rem"}}>
                        <h3 style={{padding:"0.27rem",color:"white"}}>In-progress</h3>
                </div>
                {renderTaskLists("In-Progress")}
                </div>
                : null}
               { find(props.state.tasks,{tag:"Done"})? 
                <div style={{backgroundColor:"#f8f8f9",width:"300px",border:"red"}}>
                    <div style={{textAlign:"center",backgroundColor:"#2f80ed",borderTopRightRadius:"0.5rem",borderTopLeftRadius:"0.5rem"}}>
                        <h3 style={{padding:"0.27rem",color:"white"}}>Done</h3>
                </div>
                {renderTaskLists("Done")}
                </div>
                : null}

                </div> 
            {props.state.tasks.length===0?
            // <div style={{marginTop:"5rem",textAlign:"center",backgroundColor:"red"}}> <h2>Please add some tasks!</h2></div>
            <div style={{textAlign:"center",height:"5rem",backgroundColor:"#9e9e9e",borderTopRightRadius:"0.5rem",borderRadius:"0.5rem",width:"18rem",margin:"auto",marginTop:"5vh"}}>
                <h3 style={{padding:"1.5rem",color:"white"}}>Please add Some tasks!</h3>
                </div>
            :
            null
            }
            

            </div>
        </MuiPickersUtilsProvider>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}
export default connect(mapStateToProps, { logout })(DashBoard);