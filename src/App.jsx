import React from 'react'
import LandingPage from './stores/pages/LandingPage'
import "./App.css"
import {Routes,Route} from 'react-router-dom'
import KitchenPage from './stores/pages/KitchenPage'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import LaptopPage from './stores/pages/LaptopPage'
import WatchPage from './stores/pages/WatchPage'
import AcPage from './stores/pages/AcPage'
import FridgePage from './stores/pages/FridgePage'
import FurniturePage from './stores/pages/FurniturePage'
import SpeakerPage from './stores/pages/SpeakerPage'
//singles
import MobileSingle from './stores/singles/MobileSingle'
import UserCart from './stores/UserCart'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={ <LandingPage/>}/>
      <Route path='/kitchen' element={ <KitchenPage/>}/>
      <Route path='/mobiles' element={ <MobilePage/>}/>
      <Route path='/computers' element={ <ComputerPage/>}/>
      <Route path='/men fashion' element={ <MenPage/>}/>
      <Route path='/woman dressing' element={ <WomanPage/>}/>
      <Route path='/tv' element={ <LaptopPage/>}/>
      <Route path='/watches' element={ <WatchPage/>}/>
      <Route path='/ac' element={ <AcPage/>}/>
      <Route path='/fridges' element={ <FridgePage/>}/>
      <Route path='/furniture' element={ <FurniturePage/>}/>
      <Route path='/speakers' element={ <SpeakerPage/>}/>

      <Route path='/mobiles/:id' element={<MobileSingle/>}></Route>
      <Route path='/cart' element={ <UserCart/>}/>
    </Routes>
     
    </>
  )
}

export default App
