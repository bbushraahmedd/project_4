import * as React from 'react';

import { Container, CssBaseline, Box, Avatar, Typography, TextField, IconButton, InputAdornment } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutline';

import { useState } from 'react';


function TaskForm({handleAddTask}){

    const [content, setContent] = useState('');

    function handleChange(e){
        setContent(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        // setTasks([
        //     ...tasks,
        //     {text: newTask,
        //     id: Math.random() * 100}
        // ]);
        // setNewTask("");
        const formData = new FormData()
        formData.append('content', content);
        // do i need to make formdata if im not addng a photo to this?
        handleAddTask(formData)

    }

   return ( 
    <Container maxWidth='sm'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ m: 3, bgcolor: 'success.main' }}>
            <TaskAltOutlinedIcon />
        </Avatar>
        <Typography 
        component="h1" 
        variant="h5"
        sx={{ marginBottom: 4}} >
            Tasks
        </Typography>
        <TextField
        fullWidth
        onChange={handleChange}
        label="Add Task"
        value={content}
        />
            <Box component="form" onSubmit={handleSubmit} >
                <InputAdornment position="start">
                    <IconButton aria-label="add-task" onClick={handleSubmit} type="submit">
                        <AddIcon color="success"/>
                    </IconButton>
                </InputAdornment>
            </Box>
        </Box>
    </Container>
    );
}

export default TaskForm;