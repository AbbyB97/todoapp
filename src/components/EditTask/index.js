import React from 'react';
import { connect } from 'react-redux';
import './EditTask.scss'

const EditTask = (props) => {
    const handleEditTask = () => {
        console.log('editTask');
    }
    return (
        <div className="edit-task">
            <button onClick={handleEditTask}> edit task</button>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>
            <h3>Edit task</h3>

        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(EditTask);