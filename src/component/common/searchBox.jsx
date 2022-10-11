import { ClassNames } from "@emotion/react";
import React from "react";
const SearchBox=({value,onChange})=>{
    return(
       <div style={{width:1000,marginLeft:300}}>
         <input type="text"
        name="query"
        value={value}
        className="form-control my-3"
        placeholder="Search for products"
        onChange={(e=>onChange(e.target.value))}/>
           
       </div>
        
    )
}
export default SearchBox;