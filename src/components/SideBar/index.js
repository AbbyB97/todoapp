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
    
    return(
    <div className="side-bar">
        <div className="side-bar-content">
            <div>item</div>
            <div>item</div>
            <div onClick={handleLogout}>item</div>
        
        </div>
    </div>
);
} 

const mapStateToProps = (state) => {
    return { state: state }
}
export default connect(mapStateToProps, { logout })(SideBar);