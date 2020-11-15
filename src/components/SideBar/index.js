import React from 'react';
import '../SideBar/SideBar.scss'
import { connect } from 'react-redux';

import { logout } from '../../actions';

const SideBar = (props) =>{
return(
    <div className="side-bar">
        <div className="side-bar-content">
            <div>item</div>
            <div>item</div>
            <div onClick={()=>props.logout()}>item</div>
        
        </div>
    </div>
);
} 

const mapStateToProps = (state) => {
    return { state: state }
}
export default connect(mapStateToProps, { logout })(SideBar);