import React from 'react'
import './Addnotes.css'

function Addnotes() {
  return (
    <div className='addnoteWrapper'>
        <div className='addnoteMiniContainer'>
            <>
            <label className='addNoteLabel'>Title : </label>
            <input placeholder='enter your title here..' className='addNoteInput'/><br/>
            </>
            <>
            <label className='addNoteLabel'>Content : </label>
            <input placeholder='enter your content here..' className='addNoteInput'/><br/>
            </>
            <button className='addNoteButton'>Add note</button>
        </div>
    </div>
  )
}

export default Addnotes