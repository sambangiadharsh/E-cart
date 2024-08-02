import React from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'

function SpeakerPage() {
  return (
   

    <>
    <div className="proTitle">
        <Navbar/>
      </div>
   <div className='pageSection'>
        {
            speakerData.map((item)=>{
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

export default SpeakerPage