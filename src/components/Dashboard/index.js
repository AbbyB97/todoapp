import React from 'react';
import {connect} from 'react-redux';
import {Link,useHistory} from 'react-router-dom';
import '../Dashboard/Dashboard.scss';
import {logout} from '../../actions'

const DashBoard = (props) =>{
    let history = useHistory();
    const handleCreateTaskButton = () =>{
        history.push('/todoapp/createtask');
    }
    const handleEditTaskButton = () =>{
        history.push('/todoapp/edittask');
    }
    const handleAnalyticskButton = () =>{
        history.push('/todoapp/analytics');
    }
    
    const handleLogout = () =>{
        console.log('handle logout');
        props.logout();
    }
    return(
        <div className="dashboard">
            Dashboard
            <Link to="/todoapp/createtask"><h3>create task</h3></Link>
            <button onClick={handleCreateTaskButton}>goto create task</button>
            <button onClick={handleEditTaskButton}>goto Edit task</button>
            <button onClick={handleAnalyticskButton}>goto analytics</button>
            <button onClick={handleLogout}>logout</button>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {state:state}
}
export default connect(mapStateToProps,{logout})(DashBoard);