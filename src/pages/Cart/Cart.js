import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () =>{
     const{cartItems,food_list,removeFromCart,getTotalCarAmount} =useContext(StoreContext);

     const Navigate = useNavigate

      return(
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br/>
                <hr/>
                 {food_list.map((item, index) =>{
                   if (cartItems[item._id]>0){
                     return(
                        <div>
                          <div className="cart-items-title cart-items-item">
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>${item.rice}</p>
                            <p>{ cartItems[item._id]}</p>
                            <p>${item.price*cartItems[item._id]}</p>
                            <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                          </div>
                          <hr/>
                        </div>
                     );
                   }
              } )}
            </div>
              <div className="cart-bottom">
                <div className="car-total">
                    <h2>cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCarAmount ()}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p></p>

                        </div>
                    </div>
                </div>
              </div>
        </div>
      )
}
export default Cart;