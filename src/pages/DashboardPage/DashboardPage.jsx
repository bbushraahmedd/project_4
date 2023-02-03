import * as React from 'react';
import {useState} from 'react';


import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';
import NavBar from '../../components/NavBar/NavBar';
import {Box, Grid} from '@mui/material';

import * as taskAPI from '../../utils/taskApi';

function DashboardPage(task){
    const [tasks, setTasks] = useState([]);

    async function handleAddTask(){
        console.log(task, "<<<<this is the task object in handle ADD task");
        // when i console.log this, its currently sending me and empty/nameless ibject,, shouldnt it be labeled FormData?

        // in the routes folder why is it just a / and then in the server its /api/tasks or user etc?

        try {
            const response = await taskAPI.create(task)
            console.log(response, 'from postapi create')
            setTasks([response.task, ...tasks])
        } catch (err) {
            console.log(err, 'look in the handlAddTask') //getting a Header error rn?
        }
    }

   return (
    <Grid>
    <NavBar/>
    <Box maxWidth="md" 
    sx={{ 
        marginLeft: 18, 
        marginTop: 3, 
        boxShadow: 5}}>
    <TaskForm handleAddTask={handleAddTask}/>
    <TaskList />
    </Box>
    </Grid>
    );
}

export default DashboardPage;

