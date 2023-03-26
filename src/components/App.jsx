import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './notes';
import Add from './Add'

function App() {
    const [DB, setDB] = useState(notes);

    return <div>
        <Header />
        <Add setDB={setDB} id={DB.length===0?1:DB[DB.length-1].key}/>
        <br></br>
        {DB.map(note =>
            <Note key={note.key}
                note={note}
                setDB={setDB} />
        )}
        <Footer />
    </div>
}

export default App;