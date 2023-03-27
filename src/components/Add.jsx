import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function Add(props) {
    const [note, setNote] = useState({ title: "", content: "" });

    function handleChange(event) {
        const { name, value } = event.target
        setNote({ [name]: value })
    }

    function handleAdd(event) {
        const data = {
            key: props.id + 1,
            title: event.target.title.value,
            content: event.target.content.value
        };
        props.setDB(preDB => [...preDB, data])
        setNote({ title: "", content: "" })
        event.preventDefault()
    }

    const [isClick, setisClick] = useState(false);

    return <div>
        <form className="create-note" onSubmit={handleAdd}>
            {isClick && <input name='title' onChange={handleChange} value={note.title} placeholder='Title' />}
            <textarea name='content' onClick={() => { setisClick(true) }} onChange={handleChange} value={note.content} placeholder='Take a note...' rows={isClick ? 3 : 1} />
            <Zoom in={isClick}>
                <IconButton aria-label="add" type='submit'><AddIcon /></IconButton>
            </Zoom>
        </form>
    </div>
}

export default Add;