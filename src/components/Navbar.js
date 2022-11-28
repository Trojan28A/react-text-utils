import React from 'react'
import PropTypes from 'prop-types'
import {NavLink,Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar`} style={{backgroundColor: props.mode}}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" to={"/about"}>{props.aboutText}</NavLink>
                    </li>
                    
                    
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
                </div>
            </div>

            <div>
            <button type="button" onClick={()=>{props.toggleMode("rgb(128, 128, 128,0.5)")}} className="btn" style={{height: '20px', width: '10px', margin: '5px', backgroundColor: "rgb(128, 128, 128)", border: '0.1px solid black'}}></button>
            <button type="button" onClick={()=>{props.toggleMode("rgb(255, 0, 0,0.5)")}} className="btn" style={{height: '20px', width: '10px', margin: '5px', backgroundColor: "rgba(255, 0, 0,0.5)", border: '0.1px solid black'}}></button>
            <button type="button" onClick={()=>{props.toggleMode("rgb(255, 20, 147,0.5)")}} className="btn" style={{height: '20px', width: '10px', margin: '5px', backgroundColor: "rgb(255, 20, 147)", border: '0.1px solid black'}}></button>
            <button type="button" onClick={()=>{props.toggleMode("rgb(255, 69, 0,0.5)")}} className="btn" style={{height: '20px', width: '10px', margin: '5px', backgroundColor: "rgb(255, 69, 0)", border: '0.1px solid black'}}></button>
            <button type="button" onClick={()=>{props.toggleMode("rgb(255, 240, 0,0.5)")}} className="btn" style={{height: '20px', width: '10px', margin: '5px', backgroundColor: "rgb(255, 255, 0)", border: '0.1px solid black'}}></button>
            <button type="button" onClick={()=>{props.toggleMode("rgb(128, 0, 128,0.5)")}} className="btn" style={{height: '20px', width: '10px', margin: '5px', backgroundColor: "rgb(128, 0, 128)", border: '0.1px solid black'}}></button>
            <button type="button" onClick={()=>{props.toggleMode("rgb(0, 128, 0,0.5)")}} className="btn" style={{height: '20px', width: '10px', margin: '5px', backgroundColor: "rgb(0, 128, 0)", border: '0.1px solid black'}}></button>
            <button type="button" onClick={()=>{props.toggleMode("rgb(0, 0, 255,0.5)")}} className="btn" style={{height: '20px', width: '10px', margin: '5px', backgroundColor: "rgb(0, 0, 255)", border: '0.1px solid black'}}></button>
            <button type="button" onClick={()=>{props.toggleMode("rgb(165, 42, 42,0.5)")}} className="btn" style={{height: '20px', width: '10px', margin: '5px', backgroundColor: "rgb(165, 42, 42)", border: '0.1px solid black'}}></button>
            {/* <button type="button" onClick={()=>{props.toggleMode("rgb(255, 255, 255)")}} className="btn" style={{height: '20px', width: '10px', margin: '5px', backgroundColor: "rgb(255, 255, 255)", border: '0.1px solid black'}}></button> */}
            {/* <button type="button" class="btn btn-light"></button>
            <button type="button" class="btn btn-dark"></button> */}

            </div>
            {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="mode" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change to Dark Mode</label>
            </div> */}
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Set title here",
    aboutText : "Set About text here"
}