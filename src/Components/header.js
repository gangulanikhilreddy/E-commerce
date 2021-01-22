import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

class Header extends React.Component {
    
    render() {
        return (
            <div className="main-header">
                <nav className="header">
                <div className="logo">
                <Link to="/"><img src="/amazon.png" alt="logo"></img></Link>
                    </div>
                    <div className="location">
                    <p><small>Hello</small><br></br><b>select your address</b></p>
                    </div>
                    <div className="search-bar">
                   
                    <select >
                    <option value="">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Accessories">Jewelery</option>
                    <option value="computers">Mens Clothing</option>
                    <option value="kids">womens Clothing</option>
                    </select>
                    <input type="text"></input>
                        <button className="search-icon">
                       <i className="fa fa-search"></i>
                        </button>
                    </div>
                    <div className='signin-button'>
                  <Link to="/Signin"><button><small>{this.props.username?`Welcome,${this.props.username}`:"Hello, Sign in"}</small><br></br><b>Accounts & Lists</b></button></Link>
                    </div>
                    <div className="orders">
                    <button><small>Returns</small><br></br><b>& Orders</b></button>
                    </div>
                    <div className="cart">
                <Link to="/cart"><button><img src="/cart.png"></img><b><big className="text">Cart</big></b></button></Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
