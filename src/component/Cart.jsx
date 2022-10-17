import React,{Component} from "react";
import {useCart} from "react-use-cart"
function Cart(){
    const {items,isEmpty,totalItems,totalUniqueItems,cartTotal,updateItemQuantity,removeItem,emptyCart}=useCart()
    if(isEmpty) return <h1>Your cart is empty</h1>
    return (
       <section className="py-4 container ">
        <div className="row justify-content-center" >
           <div className="col-12 ">
            <h5>Cart:({totalUniqueItems}) TotalItems:({totalItems})</h5>
            <table className="table table-light table-hover m-0" >
                <tbody>
                {items.map((item)=>{
                    return(
                        <tr key={item.id}>
                        
                       <td style={{height:"1rem"}}><img src={item.imageURL} ></img></td>
                       <td>{item.price}</td>
                       <td>Quantity:({item.quantity})</td>
                       <td>
                        <button className="btn btn-info" onClick={()=>updateItemQuantity(item.id,item.quantity -1)}>-</button>
                        <button className="btn btn-info ms-2" onClick={()=>updateItemQuantity(item.id,item.quantity +1)}>+</button>
                        <button className="btn btn-danger ms-2" onClick={()=>removeItem(item.id)}>Remove items</button>
                       </td>
                    </tr>
                    )
                  })}
                    
            </tbody>
             </table>
            </div>
            <div className="col-auto ms-auto">
            <h2>Total Price:Rs.{cartTotal}</h2>
            </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={()=>emptyCart()}>Clear Cart</button>
          </div>
           </div>
       </section>
    );

}
       
    

export default Cart;