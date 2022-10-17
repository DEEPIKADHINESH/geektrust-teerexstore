import React,{Component} from "react";
function CheckBox(props){
  const {items,textProperty,valueProperty,onItemSelect,selectedItem}=props
  
    return(
        <ul className="list-group">
            {items.map(item=>
                <li onClick={()=>onItemSelect(item)}
                className={item===selectedItem?"list-group-item active":"list-group-item" }
                key={item[valueProperty]}>{item[textProperty]}</li>)}
        
    </ul>
    ) 
}

export default CheckBox;