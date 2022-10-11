import { experimentalStyled } from "@mui/material";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import IconButton from '@mui/material/IconButton';
import React from "react";
import {useCart} from "react-use-cart"
function CardItems(props){
    const {addItem}=useCart()
    return(
        <div >
        <ImageList sx={{ width: 1500, height:1500}} cols={3}>
        {props.datas.map((item) => (
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
          subtitle={<h4 onClick={()=>addItem(item)}>Add to cart</h4 >} 
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
    )
}
export default CardItems