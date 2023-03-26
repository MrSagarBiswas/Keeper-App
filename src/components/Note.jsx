import React from 'react'

function Note(props) {
    function handleDelete(key) {
        console.log(key)
        props.setDB(preDB => preDB.filter(note => note.key !== key))
    }

    return <div className='note'>
        <h1>{props.note.title}</h1>
        <p>{props.note.content}</p>
        <button onClick={() => handleDelete(props.note.key)}>DELETE</button>
    </div>
}

export default Note;