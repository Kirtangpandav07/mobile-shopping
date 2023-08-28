import React from 'react'
import Home from './Home'
import { useEffect, useState } from 'react';
import product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'
import product3 from '../images/product3.jpg'
import product4 from '../images/product4.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

import Watchcaro from '../Components/Watchcaro'

const Product = () => {
  const [cardData, setcardData] = useState([])


  //Async await
  useEffect(() => {
    async function getData() {
      const unreadableData = await fetch("https://rickandmortyapi.com/api/character")
      const data = await unreadableData.json()
      setcardData(data.results)
    }
    getData()
  }, [])


  return (
    <>
      {/* <Home></Home> */}
      <div className='title container text-center my-5 '>
        <h1>Which iphone is right for you?</h1>
      </div>
      


      <div className='container'>
        <div className='product row flex text-center my-5 container'>
          
          
            
            {
              cardData.map((el) => {
                console.log(el);
                return <Watchcaro name={el.name} image={el.image}/>
              })
            }
          </div>
          

        </div>
      



    </>

  )
}

export default Product