import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Product from "./Componetns/Product";
import './Appage.css'

export default function Appage() {
    const [products, setProducts] = useState([])

     const handleData = async(e) => { 
         try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const data = res.data

            setProducts(data)

         } catch (error) {
            console.log(error)
         }
         }

         async function deletedata(id) {
            console.log(id)
            try {
              const resdata = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
              console.log(resdata)
              handleData();
            } catch (error) {
              console.error(error);
            }
          }
     
     useEffect(()=>{
     handleData()
     },[products])
  return (
    <div className= "row row-cols-1 row-cols-md-3 g-4">
       {
         products.map((value,_index)=>(
            <Product value={value} key={value.id} deletedata={deletedata}/>
         ))
       }
    </div>
  );
}
