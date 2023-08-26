import React from 'react'

function Notes(item) {
    console.log(item)
  return (
    <div className='notesWrapper'>
        <div>
            <h5>{item.id}</h5>
        </div>
    </div>
  )
}

export default Notes