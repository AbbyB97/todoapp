import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './Analytics.scss'
import { Pie } from 'react-chartjs-2';

import ScreenHeader from '../widgets/ScreenHeader'

const Analytics = (props) => {
    console.log("====== state ", props.state.tasks);

    var toDoCount = _.countBy(props.state.tasks, (mTask) => {

        return mTask.tag === 'To-do';

    });
    var inProgressCount = _.countBy(props.state.tasks, (mTask) => {

        return mTask.tag === 'In-Progress';

    });
    var doneCount = _.countBy(props.state.tasks, (mTask) => {

        return mTask.tag === 'Done';

    });

    console.log("todo count === ", toDoCount.true);
    console.log("doneCount count === ", doneCount.true);
    console.log("doneCount count === ", inProgressCount.true);
    const chartData = {
        labels: ['To-do', 'In-Progress', 'Done'],
        
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#f2c94c',
                    '#27ae60',
                    '#2f80ed',
                ],
                hoverBackgroundColor: [
                    '#cfa936',
                    '#1c7a44',
                    '#1656ab',
                ],
                data: [toDoCount.true, inProgressCount.true, doneCount.true]
            }
        ]
    }

    return (
        <div className="analytics">
            <ScreenHeader screenName="Analytics" />
            {props.state.tasks.length!==0?
                <div>
                <Pie
                    data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Your task trends',
                            fontSize: 20,
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels:{
                            usePointStyle: true
                            }
                        },
                    }}
                />
            </div>
        :<div style={{marginTop:"5rem",textAlign:"center"}}>
            <h2>Please add some tasks</h2>
        </div>    
        }
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(Analytics);