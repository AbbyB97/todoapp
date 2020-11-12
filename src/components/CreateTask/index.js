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
            create task
            <button onClick={handleCreateTask}> create task</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps, { createTask })(CreateTask);