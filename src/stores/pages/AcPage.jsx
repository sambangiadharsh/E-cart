import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
function AcPage() {
  return (
   
    <>
    <div className="proTitle">
        <Navbar/>
      </div>
   <div className='pageSection'>
        {
            acData.map((item)=>{
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

export default AcPage