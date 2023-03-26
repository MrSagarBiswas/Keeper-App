import React, { useState } from 'react'

function Add(props) {
    const [note, setNote] = useState({title: "", content: ""});

    function handleChange(event){
        const {name, value} = event.target
        setNote({[name]: value})
    }

    function handleAdd(event) {
        const data = {
            key: props.id + 1,
            title: event.target.title.value,
            content: event.target.content.value
        };
        props.setDB(preDB => [...preDB, data])
        setNote({title: "", content: ""})
        event.preventDefault()
    }

    return <div className='Add'>
        <form onSubmit={handleAdd}>
            <input name='title' onChange={handleChange} value={note.title} placeholder='Title' />
            <textarea name='content' onChange={handleChange} value={note.content} placeholder='Take a note...' rows="3" />
            <button type='submit'>Add</button>
        </form>
    </div>
}

export default Add;