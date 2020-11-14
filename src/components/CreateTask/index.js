import React from 'react';
import { connect } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import './CreateTask.scss'
import { createTask } from '../../actions/index'
import ScreenHeader from '../widgets/ScreenHeader';
import StaticDatePicker from '../widgets/StaticDatePicker'



const CreateTask = (props) => {

    const handleCreateTask = () => {
        props.createTask('temp task', 'temp desc', 'temp tag', 'temp branch', 'temp date', 'temp subtask');
    }
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
                            <input style={{ backgroundColor: "#f2f2f2", fontSize: "1.2rem" }} type="text" placeholder="Task Name" />
                        </div>
                        <div class="ui hidden divider"></div>

                        <div class="eight wide field">
                            <label style={{ color: "#a6a6a6" }}>Task Description</label>
                            <textarea style={{ backgroundColor: "#f2f2f2", resize: "none", fontSize: "1rem" }} rows="2" type="text" placeholder="Task Description" />
                        </div>
                        <div class="ui hidden divider"></div>

                        <div className="ui basic buttons">
                            <button className="ui button">To-Do</button>
                            <button className="ui  button">In-Progress</button>
                            <button className="ui button">Done</button>
                        </div>
                        <div class="ui hidden divider"></div>

                        <div className="checkbox-container">
                            <div >
                                <Checkbox label='My checkbox'
                                    labelStyle={{ color: 'green' }}
                                    iconStyle={{ fill: 'green' }}
                                    inputStyle={{ color: 'green' }}
                                    style={{ color: 'green' }} />
                            To-do-Task</div>
                            <div >
                                <Checkbox label='My checkbox'
                                    labelStyle={{ color: 'green' }}
                                    iconStyle={{ fill: 'green' }}
                                    inputStyle={{ color: 'green' }}
                                    style={{ color: 'green' }} />
                            Official
                    </div>
                            <div >
                                <Checkbox label='My checkbox'
                                    labelStyle={{ color: 'green' }}
                                    iconStyle={{ fill: 'green' }}
                                    inputStyle={{ color: 'green' }}
                                    style={{ color: 'green' }} />
                            Miscellaneous
                    </div>
                        </div>
                        <div className="ui hidden divider"></div>

                        <StaticDatePicker />
                        <div className="ui hidden divider"></div>


                    </div>
                        <div className="section-two">
                            <div style={{display:"flex",width:"100%",alignContent:"center",alignItems:"center",justifyContent:"center"}}>
                            <Checkbox label='My checkbox'
                                labelStyle={{ color: 'blue' }}
                                iconStyle={{ fill: 'blue' }}
                                inputStyle={{ color: 'blue' }}
                                style={{ color: 'blue' }} />

                            <div style={{marginTop:"1rem"}} class="ui ten wide input field">
                                <input type="text" placeholder="Sub Task 1" />
                            </div>
                            <i class="trash icon"></i>
                            </div>
                        </div>

                </form>
                <div className="ui hidden divider"></div>

                <button class="ui button">Cancel</button>
                <button class="ui green button">Create</button>
            </div>
        </MuiPickersUtilsProvider>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps, { createTask })(CreateTask);