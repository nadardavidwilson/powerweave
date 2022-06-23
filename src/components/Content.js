import React, { useEffect, useState } from 'react'
import ContentContext from '../ContentContext'
import { useContext } from 'react'

const Content = (props) => {
  const [items, Setitems] = useState([])
  const [alldata, setalldata] = useState(() => props.content);
  const { menuname } = useContext(ContentContext)
  const [menu,Setmenu] = useState([])


  useEffect(() => {

    (async () => {
      const combos = await props.content.filter((data)=>{
        return data.collectionName == menu 
      })
      if (combos.length) {
        Setitems(combos[0].productnewvm)
      }

    })();

    Setmenu(menuname)


  }, [props.content][menu])


  return (
    <div className='content'>
      <h3 className='head'>{menu}</h3>
      <div className='flexrow'>
        {items.map((product) => (
            <div className='' style={{width: "30%",margin:"1rem"}}>
              <img className='img' src={product.productImageUrl}></img>
              <h6>{product.productname}</h6>
              <p>{product.description}</p>
              <div className='flexrowsbb'>
                <label style={{color: "blue"}}>${product.price}</label> <button>Add</button>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Content