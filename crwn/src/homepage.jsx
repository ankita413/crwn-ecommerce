import React from 'react'
import './homepage.scss'
function Homepage() {
    return (
        <div className="homepage">
            <div className="directory-menu">
            <div className = "menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <h3 className="subtitle">Shop Now</h3>
                    </div>
                </div>
                <div className = "menu-item">
                    <div className="content">
                        <h1 className="title">Jackets</h1>
                        <h3 className="subtitle">Shop Now</h3>
                    </div>
                </div>
                <div className = "menu-item">
                    <div className="content">
                        <h1 className="title">Sneakers</h1>
                        <h3 className="subtitle">Shop Now</h3>
                    </div>
                </div>
                <div className = "menu-item">
                    <div className="content">
                        <h1 className="title">Men</h1>
                        <p className="subtitle">Shop Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
