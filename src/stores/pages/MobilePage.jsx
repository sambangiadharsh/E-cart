
import React from 'react'
import Navbar from '../components/Navbar'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const MobilePage=()=> {
  const [selectedproduct,setselectedproduct]=useState([])
  const companyhandler=(mango)=>{
    if(selectedproduct.includes(mango)){
      setselectedproduct(selectedproduct.filter(item=>item!==mango))
    }
    else{
      setselectedproduct([...selectedproduct,mango])
    }
  }

  const filteredProduct = selectedproduct.length===0?
        mobileData : mobileData.filter((orange)=>selectedproduct.includes(orange.company))

  return (

    <>
    <div className="proTitle">
        <Navbar/>
      </div>
    <div className="fullpage">
     <div className="pro-selected">
      {mobileData.map((phone)=>{
        return(
          <div className="pro-input">
            <label>
              <input type="checkbox" 
              checked={selectedproduct.includes(phone.company)}
              onChange={()=>companyhandler(phone.company)}/>
            </label>
            {phone.company}
          </div>
        )      
      })

      }
    </div>
    
   <div className='pageSection'>
        {
            filteredProduct.map((item)=>{
                return(
                    <div key={item.id}>
                      <Link to={`/mobiles/${item.id}`}>
                      <div className='pageImg'>
                        
                        <img  src={item.image} alt="" />
                   
                    </div></Link>
                         

                    <div className="promodel">
                    {item.company},{item.model}
                    </div>
                    </div>
                   

                    

                )
            })
        }
    </div>
     </div>

    </>
  )
}

export default MobilePage