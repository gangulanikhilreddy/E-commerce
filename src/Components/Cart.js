import React, { Component } from 'react';
import  "./Cart.css"
import ls from "local-storage"

export class Cart extends Component {
    state={
        totalprice:0
    }
    componentWillMount(){
        let cart=JSON.parse(ls.get("cartdata"))
        let count=0
        for(let i=0;i<cart.length;i++){
            count=count+cart[i].price
            console.log(count)
        }
        this.setState({
            totalprice:count
        })

    }

    render(){
        let cart_data=JSON.parse(ls.get("cartdata"))
       
        let display_data=cart_data.map((cart,index)=>{
            return(
                <div>
                
                <div className="cart-post" key={index}>
                <img src={cart.image} width="200px" height="220px"/>
                <div><h2 className="cart-title">{cart.title}</h2></div>
                <div><h3 className="cart-price">₹{cart.price}</h3></div>
                </div>
                <hr style={{width:"98%"}}></hr>
                </div>
                
            )
        })
        return (
           
            <div className="display">
            <div className="heading">
            <h1 style={{marginLeft:"66px",marginTop:"20px"}}>Shopping Cart</h1>
          <strong><p style={{marginRight:"300px",marginBottom:"0px",marginTop:"62px"}}>Price</p></strong>
            </div>
            <hr></hr>
            {display_data}
            <strong><span><div className="totalprice">TotalPrice=₹{this.state.totalprice}</div><hr/></span></strong>
            </div>
        )
    }
       
}

export default Cart
