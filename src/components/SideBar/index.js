import React from 'react';
import '../SideBar/SideBar.scss'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import analyticsImg from '../SideBar/analytics.svg'
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

                    <div style={{textAlign:"center",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#2f80ed",cursor:"pointer"}}  onClick={()=>{props.showTaskType(['Personal','Official','Miscellaneous'])}} >
                     All 
                </div>
                <div style={{textAlign:"center",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#5d5d5d",cursor:"pointer"}} onClick={()=>{props.showTaskType(['Personal'])}} >
                    Personal 
                </div>
          
                </div>
                <div>
            <div style={{textAlign:"center",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#9b51e0",cursor:"pointer"}}  onClick={()=>{props.showTaskType(['Official'])}} >
                    Official 
                </div>
                <div style={{textAlign:"center",borderRadius:"0.5rem",padding:"0.5vw",margin:"0.5vw",background:"#f2994a",cursor:"pointer"}} onClick={()=>{props.showTaskType(['Miscellaneous'])}} >
                    Misc.
                </div>
                </div>
                </div>
                <div className="analytics-container" onClick={handleAnalytics}>
                    <img alt="analytics" style={{height:"3rem",width:"3rem"}} src={analyticsImg}></img>
                    </div>

                </div>
            <div className="logout-container" style={{margin:"0.25rem"}} onClick={handleLogout}>
                {/* <img style={{height:"2rem",width:"2rem"}} 
            src="https://cdn.pixabay.com/photo/2014/04/10/17/59/exit-321143_960_720.png" 
            alt="logout"></img> */}
            {/* <i class="power off icon large light" style={{fontWeight: "5rem"}}></i> */}
            {/* <i class="fas fa-power-off light"/> */}
            {/* <i class="fal fa-power-off"></i> */}
            {/* <img alt="logout" style={{height:"2.5rem",width:"2.5rem"}} src="https://img.icons8.com/color/52/000000/shutdown--v1.png"/> */}
            <img alt="logout" style={{height:"2.5rem",width:"2.5rem"}} src="https://img.icons8.com/offices/96/000000/shutdown.png"/>
            {/* <img alt="logout" style={{height:"2.5rem",width:"2.5rem"}} src="https://img.icons8.com/flat_round/96/000000/shutdown--v1.png"/> */}
            </div>
            
        </div>
    </div>
);
} 

const mapStateToProps = (state) => {
    return { state: state }
}
export default connect(mapStateToProps, { logout ,showTaskType})(SideBar);