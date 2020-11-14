import React from 'react';
import {useHistory} from 'react-router-dom';

const ScreenHeader = (props) => {
    let history = useHistory();

    return (
        <div>
            <div className="ui hidden divider"></div>
            <h2 className="ui header">
                <i onClick={()=>{history.push('/')}} className="arrow left icon" style={{fontSize:"1.5rem",cursor:"pointer"}}></i>
                <div className="content">{props.screenName}</div>
            </h2>
            <div className="ui hidden divider"></div>

            <div className="ui divider"></div>
        </div>
    );
}

export default ScreenHeader;