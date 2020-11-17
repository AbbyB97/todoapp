import React from 'react';
import '../SideBar/SideBar.scss'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout,showTaskType } from '../../actions';


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
                <div className="sidebar-actions">
                <div className="tasktype-container">
                    <div>

                    <div style={{color:"white",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#2f80ed",cursor:"pointer"}}  onClick={()=>{props.showTaskType(['Personal','Official','Miscellaneous'])}} >
                     All 
                </div>
                <div style={{color:"white",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#21ba45",cursor:"pointer"}} onClick={()=>{props.showTaskType(['Personal'])}} >
                    Personal 
                </div>
          
                </div>
                <div>
            <div style={{color:"white",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#9b51e0",cursor:"pointer"}}  onClick={()=>{props.showTaskType(['Official'])}} >
                    Official 
                </div>
                <div style={{color:"white",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#f2994a",cursor:"pointer"}} onClick={()=>{props.showTaskType(['Miscellaneous'])}} >
                    Misc.
                </div>
                </div>
                </div>
                <div className="analytics-container" onClick={handleAnalytics}>Analytics</div>

                </div>
            <div className="logout-container" onClick={handleLogout}><img style={{height:"2rem",width:"2rem"}} src="https://cdn.pixabay.com/photo/2014/04/10/17/59/exit-321143_960_720.png" alt="logout"></img></div>
            
        </div>
    </div>
);
} 

const mapStateToProps = (state) => {
    return { state: state }
}
export default connect(mapStateToProps, { logout ,showTaskType})(SideBar);