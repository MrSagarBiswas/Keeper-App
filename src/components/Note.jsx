import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    function handleDelete(key) {
        console.log(key)
        props.setDB(preDB => preDB.filter(note => note.key !== key))
    }

    return <div className='note'>
        <h1>{props.note.title}</h1>
        <p>{props.note.content}</p>
        <IconButton onClick={() => handleDelete(props.note.key)} aria-label="delete">
            <DeleteIcon />
        </IconButton>
    </div>
}

export default Note;