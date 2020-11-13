import React from 'react';
import { connect } from 'react-redux';
import './CreateTask.scss'
import { createTask } from '../../actions/index'
import ScreenHeader from '../widgets/ScreenHeader';

const CreateTask = (props) => {
    const handleCreateTask = () => {
        props.createTask('temp task', 'temp desc', 'temp tag', 'temp branch', 'temp date', 'temp subtask');
    }
    return (
        <div className="create-task">
            <ScreenHeader screenName="Create Task" />
            {/* <div className="ui input">
                <input style={{ backgroundColor: "#f2f2f2" }} type="text" placeholder="Task name" />
            </div> */}
            <form className="ui form">
                <div class="five wide field">
                    <label style={{ color: "#a6a6a6" }}>Enter Task Name</label>
                    <input style={{ backgroundColor: "#f2f2f2", fontSize: "1.2rem" }} type="text" placeholder="Task Name" />
                </div>
                <div class="ui hidden divider"></div>

                <div class="five wide field">
                    <label style={{ color: "#a6a6a6" }}>Task Description</label>
                    <textarea style={{ backgroundColor: "#f2f2f2", resize: "none", fontSize: "1.2rem" }} type="text" placeholder="Task Description" />
                </div>
                <div class="ui hidden divider"></div>

                <div className="ui basic buttons">
                    <button className="ui button">To-Do</button>
                    <button className="ui active button">In-Progress</button>
                    <button className="ui button">Done</button>
                </div>
                <div class="ui hidden divider"></div>

                <div className="checkbox-container">
                    <div >
                        <input type="checkbox" name="example" />
                        <label >Personal</label>
                    </div>
                    <div >
                        <input type="checkbox" name="example" />
                        <label >Official</label>
                    </div>
                    <div >
                        <input type="checkbox" name="example" />
                        <label >Miscellaneous</label>
                    </div>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps, { createTask })(CreateTask);