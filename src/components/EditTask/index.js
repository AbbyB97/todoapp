import React from 'react';
import { connect } from 'react-redux';
import './EditTask.scss'

const EditTask = (props) => {
    const handleEditTask = () => {
        console.log('editTask');
    }
    return (
        <div className="edit-task">
            Edit task
            <button onClick={handleEditTask}> edit task</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(EditTask);