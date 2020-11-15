import React from 'react';
import { connect } from 'react-redux';
import './EditTask.scss'
import ScreenHeader from '../widgets/ScreenHeader'
import LoginPage from '../LoginPage'

const EditTask = (props) => {
    const handleEditTask = () => {
        console.log('editTask');
    }


    if (props.state.login.token === undefined) {
        return <LoginPage />;
    }
    else {

    return (
        <div className="edit-task">
            <ScreenHeader screenName="Edit Task"/>
            <button onClick={handleEditTask}> edit task</button>
        </div>
    );
    }
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(EditTask);