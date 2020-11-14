import React, { useState } from 'react';
import { connect } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import './CreateTask.scss'
import { createTask } from '../../actions/index'
import ScreenHeader from '../widgets/ScreenHeader';
import StaticDatePicker from '../widgets/StaticDatePicker'



const CreateTask = (props) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskTag, setTaskTag] = useState('');
    const [taskTypeCheck, setTaskTypeCheck] = useState([true, false, false]);
    const [taskType, setTaskType] = useState('To-do');
    const [taskDate, setTaskDate] = useState(new Date());
    const [subTasks, setsubTask] = useState(['']);

    const handleCreateTask = () => {
        // props.createTask('temp task', 'temp desc', 'temp tag', 'temp branch', 'temp date', 'temp subtask');
        console.log("name", taskName);
        console.log("desc", taskDescription);
        console.log("tag", taskTag);
        console.log("task type ", taskType);
        console.log("task taskDate ", taskDate);
    }
    const subTaskItemChange=(i,e) =>{
        let tasks = [...subTasks];
        tasks[i] = e.target.value;
        setsubTask (tasks);
    }
    const SubTaskList = () => {
        const renderSubTasks = subTasks.map((subTask,i) => { 
            return (
                <div key={i}
                style={{ display: "flex", width: "100%", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <Checkbox
                    // label='My checkbox'
                    // labelStyle={{ color: 'green' }}
                    // iconStyle={{ fill: 'green' }}
                    // inputStyle={{ color: 'green' }}
                    size={"medium"}
                    style={{ color: 'green' }} />

                <div style={{ marginTop: "1rem" }} class="ui ten wide input field">
                    <input  value={subTask||''} onChange={(e)=>subTaskItemChange(i,e)} type="text" placeholder="Sub Task 1" />
                </div>
                <i class="trash large icon grey"></i>
            </div>
            
                ); 
        });
    
        return (
            <div className="section-two">
                {renderSubTasks}
                <div onClick={() => setsubTask([...subTasks,""])}
                     style={{ color: "#2185d0", fontSize: "1.4rem", cursor: "pointer" }}>
                     <i className="plus icon blue"> </i>
                            Add new sub task
                        </div>    
            </div>
        );
    
    }
    // const handleTaskNameCHange = (event) =>{
    //     setTaskName(event.target.value);
    //     console.log('task name',taskName);
    // }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <div className="create-task">
                <ScreenHeader screenName="Create Task" />
                {/* <div className="ui input">
                <input style={{ backgroundColor: "#f2f2f2" }} type="text" placeholder="Task name" />
            </div> */}
                <form className="ui form">
                    <div className="section-one">
                        <div class="eight wide field">
                            <label style={{ color: "#a6a6a6" }}>Enter Task Name</label>
                            <input onChange={e => setTaskName(e.target.value)}
                                value={taskName}
                                style={{ backgroundColor: "#f2f2f2", fontSize: "1.2rem" }}
                                type="text" placeholder="Task Name" />
                        </div>
                        <div class="ui hidden divider"></div>

                        <div class="eight wide field">
                            <label style={{ color: "#a6a6a6" }}>Task Description</label>
                            <textarea onChange={e => setTaskDescription(e.target.value)}
                                style={{ backgroundColor: "#f2f2f2", resize: "none", fontSize: "1rem" }}
                                rows="2" type="text" placeholder="Task Description" />
                        </div>
                        <div class="ui hidden divider"></div>

                        <div className="ui basic buttons">
                            <button onClick={() => setTaskTag("To-do")} className="ui button">To-Do</button>
                            <button onClick={() => setTaskTag("In-Progress")} className="ui  button">In-Progress</button>
                            <button onClick={() => setTaskTag("Done")} className="ui button">Done</button>
                        </div>
                        <div class="ui hidden divider"></div>

                        <div className="checkbox-container">
                            <div >
                                <Checkbox checked={taskTypeCheck[0]}
                                    onClick={() => { setTaskTypeCheck([true, false, false]); setTaskType("To-do") }}
                                    // labelStyle={{ color: 'green' }}
                                    // iconStyle={{ fill: 'green' }}
                                    // inputStyle={{ color: 'green' }}
                                    style={{ color: 'green' }}
                                />
                            To-do-Task</div>
                            <div >
                                <Checkbox checked={taskTypeCheck[1]}
                                    onClick={() => { setTaskTypeCheck([false, true, false]); setTaskType("Official") }}

                                    // labelStyle={{ color: 'green' }}
                                    // iconStyle={{ fill: 'green' }}
                                    // inputStyle={{ color: 'green' }}
                                    style={{ color: 'green' }}
                                />
                            Official
                    </div>
                            <div >
                                <Checkbox checked={taskTypeCheck[2]}
                                    onClick={() => { setTaskTypeCheck([false, false, true]); setTaskType("Miscellaneous") }}
                                    // labelStyle={{ color: 'green' }}
                                    // iconStyle={{ fill: 'green' }}
                                    // inputStyle={{ color: 'green' }}
                                    style={{ color: 'green' }}
                                />
                            Miscellaneous
                    </div>
                        </div>
                        <div className="ui hidden divider"></div>

                        <StaticDatePicker taskDate={taskDate} setTaskDate={setTaskDate}
                        // onDateChanged={()=>{console.log("date changed");}}
                        />
                        <div className="ui hidden divider"></div>
                    </div>
                    {SubTaskList()}

                </form>
                <div className="ui hidden divider"></div>
                <div className="buttons-container">
                    <button style={{ margin: "1rem" }} class="ui button">Cancel</button>
                    <button onClick={handleCreateTask} class="ui green button">Create</button>
                </div>
            </div>
        </MuiPickersUtilsProvider>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps, { createTask })(CreateTask);