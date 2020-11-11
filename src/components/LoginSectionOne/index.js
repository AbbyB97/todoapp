import React from 'react-dom';
import './LoginSectionOne.scss';
import logo from './logo.png';
const LoginSectionOne = () => {
    return (
        <div className="section-1">
            <div className="logo-container" >
                <img className="ui tiny image" src={logo} alt="Logo" />
                <p><strong>Switch</strong>on</p>
            </div>
            <h3>Assignments</h3>
        </div>
    );
}

export default LoginSectionOne;