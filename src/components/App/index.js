import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import LoginPage from '../LoginPage';
import DashBoard from '../Dashboard';

class App extends React.Component {

    renderMainPage = () => {
        if (this.props.state.login.token === undefined) {
            console.log('render login');
            return <LoginPage />;
        }
        else {
            return <DashBoard />;
        }
    }

    render() {
        console.log('props -- ', this.props.state);
        return (
            <div className="App">
                {this.renderMainPage()}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(App);