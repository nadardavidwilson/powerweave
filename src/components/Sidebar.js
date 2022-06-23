import React, { useState } from 'react'
import ContentContext from '../ContentContext'
import { useContext } from 'react'

const Sidebar = (props) => {

  const { item } = useContext(ContentContext)
  const { getmenu } = useContext(ContentContext)

  const results = props.sidemenu.filter(element => {
    return element.length !== 0;
  });

  return (
    <div >
      <div className='flexrowsb'>
         <span>All</span> <span>Veg</span> <span>Non Veg</span>
      </div>
    <div className='sidebar'>
      {
        results.map((data)=>(
        <ul>
          <li onClick={(e) =>getmenu(e.target.innerHTML)}>
            {data}
          </li>
        </ul>
        ))
      }
      </div>
     
    </div>
  )
}

export default Sidebar