import React from 'react';
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import {updateTaskList} from '../../actions/index';

const TaskCard = ( props ) => {
    let history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const cardOptionsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDeleteTask=(dTask)=>{
        console.log("deleting task ->",dTask);
        var newState = props.state.tasks.filter((mtask)=> mtask!==dTask)
        console.log("og state",props.state.tasks);
        console.log("new state",newState);
        props.updateTaskList(newState);
    }

    const handleClose = (operation,{task}) => {
        setAnchorEl(null);
        console.log('clicked', operation , '===',task);
        if(operation==='Delete'){
            handleDeleteTask(task);
        }
        else{
            console.log("edittask");
            history.push({
                pathname: '/edittask',
                editableTask: task
              })
        }
    };

    const CardMenu = (task) => {
        return (
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleClose('Edit',task)}>Edit</MenuItem>
                <MenuItem onClick={() => handleClose('Delete',task)}>Delete</MenuItem>
            </Menu>
        );
    }
    const checkpressed = (subTasks,subTask) =>{
        console.log("check pressed -");
        console.log("==== checked subt",subTasks);
        // var newSubT = {...subT, isComplete:!subT.isComplete};
        var newSubTasks = subTasks.map((sTask)=> sTask===subTask ? {...subTask,isComplete : !subTask.isComplete} : sTask)
        console.log("==== checked newsubt",newSubTasks);
        console.log("===task ",props.task);
        console.log("===========og state ",props.state.tasks);
        var updatedMainTasks = props.state.tasks.map((mainTask) => mainTask=== props.task ? {...mainTask,subTask:newSubTasks}  : mainTask)
        console.log("===========new state ",updatedMainTasks);
        props.updateTaskList(updatedMainTasks);
    }

    const renderSubtask = (subTask) => {
        return subTask.map((subT,i) => {

            return (
                <div style={{display:"flex",alignItems:"center"}}> <Checkbox
                // label='My checkbox'
                // labelStyle={{ color: 'green' }}
                // iconStyle={{ fill: 'green' }}
                // inputStyle={{ color: 'green' }}
                size={"medium"}
                checked={subT.isComplete}
                // onChange={()=>subTaskItemCHeck(i)}
                onClick = {()=>{checkpressed(subTask,subT)}}
                style={{ color: 'green' }} />
                <p>{subT.subTaskText}</p>
                </div>
            )
        })
    }
    return (
        <div style={{backgroundColor:"#ffffff", margin:"1rem",borderRadius:"0.25rem"}}>
            <div style={{ marginLeft:"0.5rem", display: "flex", justifyContent: "space-between" }}>
                <div style={{backgroundColor:"#21ba45",marginTop:"0.5rem",borderRadius:"0.25rem"}}>
                    <p style={{padding:".25rem",margin:".15rem",color:"white"}}>{props.task.taskType}</p>
                </div>
                <i aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={cardOptionsClick}
                    style={{ cursor: "pointer",marginTop:"0.5rem" }}
                    class="ellipsis vertical grey icon" />
                <CardMenu task={props.task}/>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 style={{ marginLeft:"0.5rem",marginBottom: "0rem" }}>{props.task.taskName}</h4>
                {props.task.description ? <p style={{marginLeft:"0.5rem",marginBottom:"0", color: "gray" }}>{props.task.description}</p> : null}
                {props.task.subTask ? renderSubtask(props.task.subTask) : null}

            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        state
    }
}

export default connect(mapStateToProps,{updateTaskList})(TaskCard);