import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";



const Navbar = () => {
  const {cartItems}=useCart()
  return (
    <>
    <div className="navSection">
      <div className="title">
        <h2>E-MART</h2>
      </div>
      <div className="search">
        <input type="text" placeholder="search..."></input>
      </div>
      <div className="user">
        <div className="user-detail">
          signIN/signUP
        </div>
        <Link to='/cart'> <div className="cart">cart
          <span>{cartItems.length}</span></div></Link>
       
      </div>

      
    </div >
    <div className="submenu">
      <ul>
        <Link to="/mobiles">
        <li>Mobiles</li>
        </Link>
        <Link to="/computers">
        <li>Computers</li>
        </Link>
        <Link to="/watches">
        <li>Watches</li>
        </Link>
        <Link to="/men fashion">
        <li>Men fashion</li>
        </Link>
     
         <Link to="/woman dressing"> 
         <li>Woman Dressing</li>
         </Link>
      
           <Link to="/furniture"> 
           <li>Furniture</li>
           </Link>
        <Link to="/ac"><li>Ac</li></Link>
       <Link to="/kitchen"><li>Kitchen</li></Link>
        <Link to="/speakers"> <li>Speakers</li></Link>
        <Link to="/fridges"><li>Fridge</li></Link>
       <Link to="/tv"> <li>TV</li></Link>
     
      </ul>
    </div>
    </>
  );
};

export default Navbar;
