import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';


const TaskCard = ({ task }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const cardOptionsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (operation) => {
        setAnchorEl(null);
        console.log("clicked", operation);
    };

    const CardMenu = () => {
        return (
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleClose("Edit")}>Edit</MenuItem>
                <MenuItem onClick={() => handleClose("Delete")}>Delete</MenuItem>
            </Menu>
        );
    }
    const renderSubtask = (subTask) => {
        return subTask.map((subT) => {
            return (
                <div style={{display:"flex",alignItems:"center"}}> <Checkbox
                // label='My checkbox'
                // labelStyle={{ color: 'green' }}
                // iconStyle={{ fill: 'green' }}
                // inputStyle={{ color: 'green' }}
                size={"medium"}
                checked={subTask.isComplete}
                // onChange={()=>subTaskItemCHeck(i)}
                style={{ color: 'green' }} />
                <p>{subT.subTaskText}</p>
                </div>
            )
        })
    }
    return (
        <div style={{backgroundColor:"pink" , marginTop:"1rem"}}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {task.tag}
                <i aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={cardOptionsClick}
                    style={{ cursor: "pointer" }}
                    class="ellipsis vertical grey icon" />
                <CardMenu />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 style={{ marginBottom: "0rem" }}>{task.taskName}</h4>
                {task.description ? <p style={{marginBottom:"0", color: "gray" }}>{task.description}</p> : null}
                {task.subTask ? renderSubtask(task.subTask) : null}

            </div>
        </div>
    );
}

export default TaskCard;