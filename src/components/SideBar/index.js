import React from 'react';
import '../SideBar/SideBar.scss'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout } from '../../actions';


const SideBar = (props) =>{
    let history = useHistory();

    const handleLogout = () =>{
        props.logout()
        history.push('/');
    }
    const handleAnalytics = () =>{
        history.push('/analytics');
    }
    return(
    <div className="side-bar">
        <div className="side-bar-content">
            <div>item</div>
            <div onClick={handleAnalytics}>analytics</div>
            <div onClick={handleLogout}>logout</div>
        
        </div>
    </div>
);
} 

const mapStateToProps = (state) => {
    return { state: state }
}
export default connect(mapStateToProps, { logout })(SideBar);