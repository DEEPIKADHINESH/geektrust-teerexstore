import { ClassNames } from "@emotion/react";
import React from "react";
const SearchBox=({value,onChange})=>{
    return(
       <div>
         <input type="text"
        name="query"
        value={value}
        className="form-control my-3"
        onChange={(e=>onChange(e.target.value))}/>
           
       </div>
        
    )
}
export default SearchBox;