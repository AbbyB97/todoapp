import React from 'react';
import './LoginPage.scss';
import LoginSectionOne from './LoginSectionOne';
import LoginSectionTwo from './LoginSectionTwo';
class LoginPage extends React.Component {

    render() {
        return (
            <div className="LoginPage">
                <div className="container">
                    <LoginSectionOne />
                    <LoginSectionTwo/>
                </div>
            </div>
        );
    }
}
export default LoginPage;