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
            <div className="profile-container">
                <img alt="avatar" style={{height:"3rem",width:"3rem"}} src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"></img>
            <div style={{display:"flex",flexDirection:"column",marginLeft:"0.5rem"}}>
                   <div ><p>{props.state.login.email}</p></div>
                   <div ><p>{props.state.login.email.substring(0, props.state.login.email.indexOf('@'))}</p></div> 
                    
               </div>
            </div>
            <div className="analytics-container" onClick={handleAnalytics}>analytics</div>
            <div className="lgout-container" onClick={handleLogout}><img style={{height:"2rem",width:"2rem"}} src="https://cdn.pixabay.com/photo/2014/04/10/17/59/exit-321143_960_720.png" alt="logout"></img></div>
            
        </div>
    </div>
);
} 

const mapStateToProps = (state) => {
    return { state: state }
}
export default connect(mapStateToProps, { logout })(SideBar);