import React from 'react'
import Card from './Utils/Card'
import data from '../data'
import Info from './Utils/Info'

function Products() {
  
  return (
    <div className=' w-full h-full p-20 flex flex-wrap gap-10 justify-center relative'>
      
     {data.map((item,i)=>(
        <Card  key={i} det={item}/>
     ))}
     
    </div>
  )
}

export default Products
