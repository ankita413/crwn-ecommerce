import  React from "react";
import MenuItem from "../MenuItems/menu-items";
import './MenuContainer.scss'
class MenuContainer extends React.Component{
    constructor(){
        super(); 
        this.state = {
          menu_sections:  [{
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id:1,
            linkUrl: 'shop/hats'

          },
          {
            title:'jackets',
            imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title:'sneakers',
            imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
            id:3,
            linkUrl:'shop/sneakers'
          },
          {
            title:'men',
            imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
            id:4,
            size: 'large',
            linkUrl:'shop/men'
          },
          {
            title:'women',
            imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
            id:5,
            size: 'large',
            linkUrl: 'shop/women'

          }
        ]
        }
    }
    render(){
      return(
        <div className="menu-container">
         {this.state.menu_sections.map(({title,imageUrl,id,size})=> (
           <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
         ))}
        </div>
      )
    }
 
}
export default MenuContainer;