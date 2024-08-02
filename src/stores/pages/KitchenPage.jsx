import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
function KitchenPage() {
  return (
    <>
    <div className="proTitle">
        <Navbar/>
      </div>
   <div className='pageSection'>
        {
            kitchenData.map((item)=>{
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

export default KitchenPage