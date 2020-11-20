import React from 'react'
import './menu-items.scss'
const MenuItem = ({title,imageUrl,size}) => (
               <div className = {`${size} menu-items`}>
                   <div className="background-image" style ={{
                   backgroundImage: `url(${imageUrl})`
               }} />
                    <div className="menu-content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <p className="subtitle">Shop Now</p>
                    </div>
                </div>
        
    )


export default MenuItem 