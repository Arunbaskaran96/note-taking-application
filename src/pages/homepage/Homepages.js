import React, { useRef, useState } from 'react'
import "./homepage.css"
import Topbar from '../../components/Topbar/Topbar'
import Addnotes from '../../components/AddNotes/Addnotes'
import Notes from '../../components/notes/Notes'

function Homepages() {
  const [search,setSearch]=useState("")
  const data=[
    {
      id:1,
      title:"abc",
      content:"lorem dsfh  dsfug jksdf jhdsf jhdsg sdjkg hdg zc "
    },
    {
      id:2,
      title:"sf",
      content:"lorem dsfh  dsfug jksdf jhdsf jhdsg sdjkg hdg zc "
    },
    {
      id:3,
      title:"ggv",
      content:"lorem dsfh  dsfug jksdf jhdsf jhdsg sdjkg hdg zc "
    },
    {
      id:4,
      title:"mg",
      content:"lorem dsfh  dsfug jksdf jhdsf jhdsg sdjkg hdg zc "
    },
    {
      id:5,
      title:"fd",
      content:"lorem dsfh  dsfug jksdf jhdsf jhdsg sdjkg hdg zc "
    },
    {
      id:6,
      title:"ahmgbc",
      content:"lorem dsfh  dsfug jksdf jhdsf jhdsg sdjkg hdg zc "
    },
    {
      id:7,
      title:"yjddf",
      content:"lorem dsfh  dsfug jksdf jhdsf jhdsg sdjkg hdg zc "
    }
  ]

  const handleChange=(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <div className='homepageWrapper'>
        <div className='homebarTop'>
            <Topbar/>
        </div>
        <div className='homepageMiddle'>
          <Addnotes/>
          <i class="fa-solid fa-house"></i>
        </div>
        <hr/>
        <div className='homePageBottom'>
          <div className='noteSearchContainer'>
            <input  onChange={handleChange} className='notesSearch' type='text' placeholder='search here based on notes title...'/>
          </div>
          <div className='notesContainer'>
          {
          data.filter(item=>item.title.toLowerCase().includes(search.toLocaleLowerCase())).map((item)=>{
            return(
              <div  className='notesIndividualContainer'>
                <div className='notesTop'>
                  <h5 className='noteTitle'>{item.title}</h5>
                  <span className='noteDate'>25-08-2023</span>
                </div>
                  <hr/>
                  <p className='noteContent'>{item.content}</p>
              </div>
            )
          })
        }
          </div>
        </div>
    </div>
  )
}

export default Homepages