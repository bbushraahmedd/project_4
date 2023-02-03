
import {useState} from 'react';
import {List, ListItem, Checkbox, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskList(){

    function handleDelete() {
        setTasks(tasks.filter((el) => el.id !== task.id));
    }

   return ( 
    <List>
        <ListItem
            secondaryAction={
                <IconButton aria-label="delete-task" edge="end" onClick={handleDelete} >
                    <DeleteIcon/>
                </IconButton>
            }>
                {text}
            <ListItemText/>
        </ListItem>
    </List>
    );
}

export default TaskList;