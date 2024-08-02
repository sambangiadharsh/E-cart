import React from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'

function MenPage() {
  return (
   
    <>
    <div className="proTitle">
        <Navbar/>
      </div>
   <div className='pageSection'>
        {
            menData.map((item)=>{
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

export default MenPage