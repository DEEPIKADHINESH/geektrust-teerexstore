import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SearchBox from './common/searchBox';
import { Link } from "react-router-dom"
import "./product.css";
import CardItems from './common/CardItems';
import CheckBox from './common/checkBox';
import {getFilteredService} from "./filterService";
class Product extends Component {
  state = {
    data:[],
    searchQuery: "",
   getFilteredService:getFilteredService(),
   selectedProduct:""
   
  }
  componentDidMount = async () => {
    const { data } = await axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
    this.setState({ data})
}
  handleSearch = (query) => {
      this.setState({ searchQuery: query })
  }
 getPagedData = () => {
    let filtered = this.state.data
    if (this.state.searchQuery)
      filtered = this.state.data.filter(item => { return Object.keys(item).some(key => item[key].toString().toLowerCase().startsWith(this.state.searchQuery.toLowerCase())) })
    //  else if(this.state.selectedProduct && this.state.selectedProduct.gender)
   //  filtered=this.state.selectedProduct?this.state.data.filter(item=>item===this.state.selectedProduct.gender):this.state.data
    //   filtered=this.state.data.filter(m=>m.gender===this.state.data.gender)
    //  console.log(this.state.selectedProduct)
      const datas = (filtered)
    return { datas }
  }

handleItemSelect=(item)=>{
//this.setState({selectedProduct:item})
console.log(item,"frt")
}
render() {
    const { datas:data } = this.getPagedData()
    return (
      <div>
        <div>
          <div>
            <nav className="navbar navbar-light">
              <span className="navbar-brand mb-0 h1">Products</span>
              <Link to="/Cart">  
              <FontAwesomeIcon icon={faShoppingCart} style={{ height: "20px" }} /> </Link>
            </nav>
          </div>
          <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
        </div>
        <div className='split'>
          <div className="left">
           <CheckBox items={this.state.getFilteredService}
             onItemSelect={this.handleItemSelect}
             selectedItem={this.state.selectedProduct}
             textProperty="gender"
             valueProperty="gender"
             />
            </div>
        <section >
            <div className='right'>
        
                  <CardItems datas={data}
                   />
       
              
            </div>
          </section>
        </div>


      </div>
    )
  }
}
export default Product