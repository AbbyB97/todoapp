import React from 'react';
import './LoginPage.scss';
import LoginSectionOne from '../LoginSectionOne'
class LoginPage extends React.Component {

    render() {
        return (
            <div className="LoginPage">
                <div className="container">
                    <LoginSectionOne />
                    <div className="section-2">sec 2</div>
                </div>
            </div>
        );
    }
}
export default LoginPage;