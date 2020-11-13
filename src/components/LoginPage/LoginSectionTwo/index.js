import React from 'react';
import './LoginSectionTwo.scss';

import { connect } from 'react-redux';
import { login } from '../../../actions';
class LoginSectionTwo extends React.Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.state = {
            email: '',
            password: ''
        };
    }

    passwordRef = React.createRef();
    passwordTypeRef = React.createRef();

    handleEyeClick = () =>{
        var currentType = this.passwordTypeRef.current.type;
        if(currentType==='password'){
            this.passwordTypeRef.current.type='text'
        }
        else{
            this.passwordTypeRef.current.type = 'password'
        }
        
    }
    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
        this.emailRef.current.classList.remove('error');

    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
        this.passwordRef.current.classList.remove('error');

    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.email !== '' && this.state.password !== '') {
            this.props.login(this.state.email);
        }
        else {
            if (this.state.email === '') {
                this.emailRef.current.classList.add('error');
            }

            if (this.state.password === '') {
                this.passwordRef.current.classList.add('error');
            }
        }
    }

    render() {
        return (
            <div className="section-2">
                <div className="login-container">
                    <h1>To-Do App</h1>
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div ref={this.emailRef} className="ui field left icon input">
                            <input type="email" 
                                value={this.state.email} 
                                placeholder={"Email ID"} 
                                onChange={this.handleChangeEmail} />
                            <i className="envelope outline icon"></i>
                        </div>
                        <div ref={this.passwordRef} className="ui field left icon input">
                            <input ref={this.passwordTypeRef} 
                                type="password" 
                                value={this.state.password} 
                                placeholder={"Password"} 
                                onChange={this.handleChangePassword} />
                            <i className="lock icon"></i>
                            <div onClick={this.handleEyeClick} class="ui icon input">
                                <i class="eye link icon"></i>
                            </div>
                        </div>
                        <button className="ui field green button" type="submit" value="Submit" > Login</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default connect(null, { login })(LoginSectionTwo);