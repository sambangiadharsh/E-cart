import React from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar'
function FurniturePage() {
  return (
    
    <>
    <div className="proTitle">
        <Navbar/>
      </div>
   <div className='pageSection'>
        {
            furnitureData.map((item)=>{
                return(
                    <div>
                         <div  key={item.id} className='pageImg'>
                        
                        <img  src={item.image} alt="" />
                   
                    </div>

                    <div className="promodel">
                    {item.company},{item.model}
                    </div>
                    </div>
                   

                    

                )
            })
        }
    </div>

    </>
  )
}

export default FurniturePage