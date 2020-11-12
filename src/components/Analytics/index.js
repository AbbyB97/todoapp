import React from 'react';
import { connect } from 'react-redux';
import './Analytics.scss'

const Analytics = (props) => {
    
    return (
        <div className="analytics">
            Analytics
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(Analytics);