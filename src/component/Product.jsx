import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import SearchBox from './common/searchBox';
import IconButton from '@mui/material/IconButton';

import ImageList from '@mui/material/ImageList';
import {Link} from "react-router-dom"
import "./product.css";

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
   <FontAwesomeIcon icon={faShoppingCart} style={{height:"20px"}} /> 
 
</nav>
        </div> 
        <input typeof='text' placeholder='Search for products' style={{border:"white",marginLeft:"40%",marginTop:"25px",marginRight:"20px"}}/> 
        <SearchBox value={this.state.searchQuery} onChange={this.handleSearch}/>
        </div>
        <div >
        <ImageList sx={{ width: 1500, height:1500}} cols={3}>
        {datas.map((item) => (
        <ImageListItem key={item.id}>
          <h4>{item.name}</h4>
          <img
            src={`${item.imageURL}?w=248&fit=crop&auto=format`}
            srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar 
            title={<span>Rs.{item.price}</span>}
          subtitle={<h4><Link to="/Cart">Add to cart</Link></h4>} 
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.name}`} >
          </IconButton>
           }

          />
                     
        </ImageListItem>
      ))}
    </ImageList>
    
  
        </div>

      </div>
        )   
}
}
export default Product