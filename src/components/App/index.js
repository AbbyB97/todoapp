import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import LoginPage from '../LoginPage';
import DashBoard from '../Dashboard';
import CreateTask from '../CreateTask';

class App extends React.Component {

    renderMainPage = () => {
        if (this.props.state.login.token === undefined) {
            return <LoginPage />;
        }
        else {
            return <DashBoard />;
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                <Route path="/todoapp" exact component={this.renderMainPage} />
                <Route path="/todoapp/createtask" exact component={CreateTask} />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(App);