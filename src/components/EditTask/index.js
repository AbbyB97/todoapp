import React from 'react';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import './EditTask.scss'
import ScreenHeader from '../widgets/ScreenHeader'
import LoginPage from '../LoginPage'
import Dashboard from '../Dashboard'

const EditTask = (props) => {
    let history = useHistory()
    console.log("props -----",props.history.location.editableTask);
    const handleEditTask = () => {
        console.log('editTask');
    }


    if (props.state.login.token === undefined) {
        return (<LoginPage >
                  {history.push('/')}
                </LoginPage>
            );
    }
    else if(props.history.location.editableTask===undefined){
        
        return (
            <Dashboard>
                {history.push('/')}
            </Dashboard>
            );

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