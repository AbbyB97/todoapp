import React, { useState } from 'react';
import { connect } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import './CreateTask.scss'
import { createTask } from '../../actions/index'
import ScreenHeader from '../widgets/ScreenHeader';
import StaticDatePicker from '../widgets/StaticDatePicker'
import SnackBar from '../widgets/SnackBar'


const CreateTask = (props) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskTag, setTaskTag] = useState('To-do');
    const [taskTypeCheck, setTaskTypeCheck] = useState([true, false, false]);
    const [taskType, setTaskType] = useState('Personal');
    const [taskDate, setTaskDate] = useState(new Date());
    const [subTasks, setsubTask] = useState([{subTaskText:'',isComplete:false}]);
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
    const [errorSnackBar, setErrorSnackBar] = useState(false);

    const disableError = () =>{
        setErrorSnackBar(false);
    }
    const handleCreateTask = () => {
        if(taskName===''){
            console.log("task name is mandatory");
            // alert("mandotory text")
            setErrorSnackBar(true);
        }
        else{
        props.createTask(taskName, taskDescription, taskTag, taskType, taskDate, 
            subTasks.filter(sbtask => sbtask.subTaskText!== ''));
            setTaskName('');
            setTaskDescription('');
            setTaskTag('To-do');
            setTaskTypeCheck([true, false, false]);
            setTaskType('Personal');
            setTaskDate(new Date());
            setsubTask([{subTaskText:'',isComplete:false}]);
            setIsOpenSnackbar(true);

        }
        // console.log("name", taskName);
        // console.log("desc", taskDescription);
        // console.log("tag", taskTag);
        // console.log("task type ", taskType);
        // console.log("task taskDate ", taskDate);
        // console.log("subtask array",subTasks);
    }
    const subTaskItemChange=(i,e) =>{
        let tasks = [...subTasks];
        tasks[i] = {...tasks[i],subTaskText:e.target.value};
        setsubTask (tasks);
    }
    const subTaskItemCHeck=(i) =>{
        let tasks = [...subTasks];
        tasks[i] = {...tasks[i],isComplete:!tasks[i].isComplete};
        setsubTask (tasks);
    }
    const SubTaskList = () => {
        const renderSubTasks = subTasks.map((subTask,i) => { 
            console.log(i);
            return (
                <div key={i}
                style={{ display: "flex", width: "100%", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <Checkbox
                    // label='My checkbox'
                    // labelStyle={{ color: 'green' }}
                    // iconStyle={{ fill: 'green' }}
                    // inputStyle={{ color: 'green' }}
                    size={"medium"}
                    checked={subTask.isComplete}
                    onChange={()=>subTaskItemCHeck(i)}
                    style={{ color: 'green' }} />

                <div style={{ marginTop: "1rem" }} className="ui ten wide input field">
                    <input  value={subTask.subTaskText||''} onChange={(e)=>subTaskItemChange(i,e)} type="text" placeholder={`Sub Task ${i+1}`} />
                </div>
                {/* trash button onclick function contains afilter that filters the subtask of which delete is pressed and filters it out */}
                <i style={{cursor:"pointer"}} onClick={()=>{setsubTask(subTasks.filter(sbtask => sbtask!== subTask))}} 
                    className="trash large icon grey"></i>
            </div>
            
                ); 
        });
    
        return (
            <div className="section-two">
                {renderSubTasks}
                <div onClick={() => setsubTask([...subTasks,{subTaskText:"",isComplete:false}])}
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
                <div id="form"className="ui form">
                    <div className="section-one">
                        <div className="ten wide field">
                            <label style={{ color: "#a6a6a6" }}>Enter Task Name</label>
                            <input onChange={e => {setTaskName(e.target.value);setIsOpenSnackbar(false)}}
                                value={taskName}
                                style={{ backgroundColor: "#f2f2f2", fontSize: "1.2rem" }}
                                type="text" placeholder="Task Name" />
                        </div>
                        <div className="ui hidden divider"></div>

                        <div className="ten wide field">
                            <label style={{ color: "#a6a6a6" }}>Task Description</label>
                            <textarea 
                                value={taskDescription}
                                onChange={e => setTaskDescription(e.target.value)}
                                style={{ backgroundColor: "#f2f2f2", resize: "none", fontSize: "1rem" }}
                                rows="2" type="text" placeholder="Task Description" />
                        </div>
                        <div className="ui hidden divider"></div>

                        <div className="ui basic buttons">
                            <button onClick={() => setTaskTag("To-do")} 
                                className={taskTag !== "To-do" ? "ui button" : "ui button active"}>
                                To-Do
                            </button>
                            <button onClick={() => setTaskTag("In-Progress")} className={taskTag !== "In-Progress" ? "ui button" : "ui button active"}>In-Progress</button>
                            <button onClick={() => setTaskTag("Done")} className={taskTag !== "Done" ? "ui button" : "ui button active"}>Done</button>
                        </div>
                        <div className="ui hidden divider"></div>

                        <div className="checkbox-container">
                            <div >
                                <Checkbox checked={taskTypeCheck[0]}
                                    onClick={() => { setTaskTypeCheck([true, false, false]); setTaskType("Personal") }}
                                    // labelStyle={{ color: 'green' }}
                                    // iconStyle={{ fill: 'green' }}
                                    // inputStyle={{ color: 'green' }}
                                    style={{ color: 'green' }}
                                />
                            Personal</div>
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

                </div>
                <div className="ui hidden divider"></div>
                <div className="buttons-container">
                    <button style={{ margin: "1rem" }} className="ui button">Cancel</button>
                    <button onClick={handleCreateTask} className="ui green button">Create</button>
                </div>
                {/* <SnackBar setIsOpenSnackbar={setIsOpenSnackbar}/> */}
                {isOpenSnackbar ? <SnackBar disableError={disableError} isError={false} isOpenSnackbar={isOpenSnackbar} /> : null}
                {errorSnackBar ? <SnackBar disableError={disableError} isError={true} isOpenSnackbar={errorSnackBar} /> : null}
            </div>
        </MuiPickersUtilsProvider>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps, { createTask })(CreateTask);