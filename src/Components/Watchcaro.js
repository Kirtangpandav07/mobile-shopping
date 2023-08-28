import React from 'react'
import Button from 'react-bootstrap/Button';

const Watchcaro = (props) => {
  return (
    

      
      <div className='box'>
        <div className='img'>
          <img src={props.image} alt="" width={300} />
        </div>
        <div className='text'><span>{props.name}</span></div>
        <div className='prise py-3 text-secondary'><span> ₹{props.prise}</span><span className='uuu'>₹1,61,900 </span></div>
        <Button variant="outline-info py-2 ">BUY NOW</Button>{' '}
        
       
        
      </div>
      
    
  )
}

export default Watchcaro