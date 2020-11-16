import React from 'react';
import { connect } from 'react-redux';
import './Analytics.scss'
import {Pie, Doughnut} from 'react-chartjs-2';

import ScreenHeader from '../widgets/ScreenHeader'

const Analytics = (props) => {
    
const chartData = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  
    return (
        <div className="analytics">
            <ScreenHeader screenName="Analytics" />
            <div>
        <Pie
          data={chartData}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(Analytics);