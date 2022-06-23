import React, { useEffect, useState } from 'react'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import {ContentProvider} from './ContentContext'



const Main = () => {

    const [data , setData]= useState([])
    const [menu , setMenu]= useState([])

    const getdata=()=>{
        fetch("./product.json").then(
            function(res){
            return res.json()
            }).then(function(data){
            console.log(data)
            const sidebardata = data.map( (combos) => {
                var onlysidedata  = []
                if(combos.productnewvm.length !== 0){
                    onlysidedata.push(combos.collectionName)
                    var sidemendata = combos.collectionName
                    // console.log(onlysidedata)
   
                }
                return onlysidedata
            })

            let sidemenudata = sidebardata
            setMenu(sidemenudata)   

            const contentdata = data.map( (data) => {
                return data
            })

            let contentmenudata = contentdata
            setData(contentmenudata) 
        
        }).catch(
            function(err){
            console.log(err, ' error')
            }
        )

    }

    useEffect(()=>{
        getdata();
    },[])

  return (
    <div className='flexrowst'>
        <ContentProvider>
            <Sidebar sidemenu = {menu} />
            <Content content = {data}/>
        </ContentProvider>
         
    </div>
  )
}

export default Main