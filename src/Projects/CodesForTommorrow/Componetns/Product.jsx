import React, { useState } from 'react'
import './Poduct.css'
export default function Product({value,deletedata}) {
   
  return (
    <div className='main_div'>
        <div className='category-preview-container'>
           <div className='cross' onClick={()=>deletedata(value.id)}>X</div>
           <span className='title_tag'>{value.title}</span>
           <p>Mon 19-10-2023</p>
           <div className='body_container'> <p>{value.body}</p></div>
           <div className='image_static'><img src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img_not fouund"/></div>
        </div>
    </div>
  )
}
