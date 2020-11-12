import React from 'react';
import './LoginSectionTwo.scss'
class LoginSectionTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.email + this.state.password);
    }

    render() {
        return (
            <div className="section-2">
                <div className="login-container">
                    <h1>To-Do App</h1>
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="ui field left icon input">
                            <input type="email" value={this.state.email} placeholder={"Email ID"} onChange={this.handleChangeEmail} />
                            <i className="envelope outline icon"></i>
                        </div>
                        <div className="ui field left icon input">
                            <input type="text" value={this.state.password} placeholder={"Password"} onChange={this.handleChangePassword} />
                            <i className="lock icon"></i>
                        </div>
                        <button className="ui field green button" type="submit" value="Submit" > Login</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default LoginSectionTwo;