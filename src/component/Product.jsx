import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import SearchBox from './common/searchBox';
import {Link} from "react-router-dom"
import "./product.css";
import CardItems from './common/CardItems';
class Product extends Component {
   state={
           data:[],
           searchQuery:""
    }
    componentDidMount=async()=>{
        const {data} = await axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
        this.setState({data})
       
    }
    handleSearch=(query)=>{
    
      this.setState({searchQuery:query})
    }
    
    
    getPagedData=()=>{
      let filtered=this.state.data
      if(this.state.searchQuery)
      filtered=this.state.data.filter(item=>
        {return Object.keys(item).some(key=>item[key].toString().toLowerCase().startsWith(this.state.searchQuery.toLowerCase()))})
     const datas=(filtered)
     return {datas}
    }
    render(){
      const {datas}=this.getPagedData()
    
        return(
           <div>
             <div>
           <div>
           <nav className="navbar navbar-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
  <span className="navbar-brand mb-0 h1">Products</span>
  <Link to="/Cart">  <FontAwesomeIcon icon={faShoppingCart} style={{height:"20px"}} /> </Link>
 
</nav>
        </div> 
        <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
        </div>
       <CardItems datas={datas}/>

      </div>
        )   
}
}
export default Product