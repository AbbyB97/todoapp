import React from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const TaskCard = ({ task }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const cardOptionsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (operation) => {
        setAnchorEl(null);
        console.log("clicked",operation);
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
                <MenuItem onClick={()=>handleClose("Edit")}>Edit</MenuItem>
                <MenuItem onClick={()=>handleClose("Delete")}>Delete</MenuItem>
            </Menu>
        );
    }

    return (
        <div>
            TaskCard {task}
            <i aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={cardOptionsClick} 
                style={{cursor:"pointer"}}
                class="ellipsis vertical grey icon"/>
            <CardMenu/>
        </div>
    );
}

export default TaskCard;