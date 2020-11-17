import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link, useHistory } from 'react-router-dom';

import './Analytics.scss'
import { Pie } from 'react-chartjs-2';

import ScreenHeader from '../widgets/ScreenHeader'

const Analytics = (props) => {
    let history = useHistory();


    var toDoCount = _.countBy(props.state.tasks, (mTask) => {

        return mTask.tag === 'To-do';

    });
    var inProgressCount = _.countBy(props.state.tasks, (mTask) => {

        return mTask.tag === 'In-Progress';

    });
    var doneCount = _.countBy(props.state.tasks, (mTask) => {

        return mTask.tag === 'Done';

    });

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
    const handleCreateTaskButton = () => {
        history.push('/createtask');
    }
    return (
        <div className="analytics">
            <ScreenHeader screenName="Analytics" />
            {props.state.tasks.length !== 0 ?
                <div style={{ height: "65vh" }}>
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
                                labels: {
                                    usePointStyle: true
                                }
                            },
                            maintainAspectRatio: false
                        }}
                    />
                </div>
                :
                <div style={{
                    textAlign: "center", height: "5rem", backgroundColor: "#2f80ed", cursor: "pointer",
                    borderTopRightRadius: "0.5rem", borderRadius: "0.5rem", width: "18rem", margin: "auto", marginTop: "5vh"
                }}
                    onClick={handleCreateTaskButton}
                >
                    <h3 style={{ padding: "1.5rem", color: "white" }}>Please add Some tasks!</h3>
                </div>
            }

        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(Analytics);