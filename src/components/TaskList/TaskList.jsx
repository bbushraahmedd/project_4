import * as React from 'react';
import {useState} from 'react';
import Tasks from '../Tasks/Tasks.jsx'

import {List, ListItem, Checkbox, ListItemText, Box } from '@mui/material';

function TaskList({tasks, setTasks}){

   return ( 
    <Box maxWidth='sm' sx={{ 
        marginLeft: 18, 
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',}}>
        <List>
            <ListItem>
            {/* {tasks.map(task => (
                <Tasks 
                key={task.id}
                text={task.text}
                tasks={tasks} 
                task={task}
                setTasks={setTasks}/>
            ))} */}
            </ListItem>
        </List>
    </Box>
    );
}

export default TaskList;