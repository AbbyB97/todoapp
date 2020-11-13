import React from 'react';
import { connect } from 'react-redux';
import './CreateTask.scss'
import { createTask } from '../../actions/index'

const CreateTask = (props) => {
    const handleCreateTask = () => {
        props.createTask('temp task','temp desc','temp tag','temp branch' , 'temp date' , 'temp subtask');
    }
    return (
        <div className="create-task">
            <button onClick={handleCreateTask}> create task</button>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
            <h3>create task</h3>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps, { createTask })(CreateTask);