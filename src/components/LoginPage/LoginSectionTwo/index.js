import React from 'react';
import './LoginSectionTwo.scss';

import { connect } from 'react-redux';
import { login } from '../../../actions';
class LoginSectionTwo extends React.Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.passwordTypeRef = React.createRef();
        this.state = {
            email: '',
            password: ''
        };
    }


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
        // alert('A name was submitted: ' + this.state.email + this.state.password);
        // const article = { email: "eve.holt@reqres.in", password: "cityslicka" };
        // axios.post('https://reqres.in/api/login', article)
        //     .then((response) => { console.log(response.data); })
        //     .catch(error => {
        //         // this.setState({ errorMessage: error.message });
        //         console.log('There was an error!', error.message);
        //     });
        if (this.state.email !== '' && this.state.password !== '') {
            this.props.login();
        }
        else {
            console.log(this.state);
            if (this.state.email === '') {
                console.log('no email');
                console.log('email ref', this.emailRef.current.classList);
                this.emailRef.current.classList.add('error');
            }

            if (this.state.password === '') {
                console.log('no password');
                this.passwordRef.current.classList.add('error');
            }
        }

    }

    componentDidMount() {
        // POST request using axios with error handling
        // const article = { name: "temp",job: "none" };
        // axios.post('https://reqres.in/api/users', article)
        //     .then((response) => {console.log(response);})
        //     .catch(error => {
        //         this.setState({ errorMessage: error.message });
        //         console.log('There was an error!', error);
        //     });
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