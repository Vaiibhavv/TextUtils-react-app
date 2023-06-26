import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// props is just a argument or input, it works like a reference variable in function based component. 
export default function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode==="dark"?'dark':'light'} bg-${props.mode} py-0`}>
        <Link className="navbar-brand" to="/"> {props.title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mx-0">
            <li className="nav-item deactive">
              <Link className="nav-link" to="/">
                Home<span className="sr-only py-0">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link> 
            </li>
          </ul>
          
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input"  type="checkbox" onClick={props.darkBtn} id="mySwitch" name="darkmode" value="yes" />
          <label className="form-check-label" htmlFor="mySwitch">Dark Mode</label>
          </div>

          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 py-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary my-2 my-sm-0 py-0" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </div>
  )
}
// Type of the title and about section  should be string and 
Navbar.prototype= {title:PropTypes.string, about:PropTypes.string}

// if no jsx is added in the title and about section then by default the below line will be added.
Navbar.defaultProps={title:"Set title", about:"add about us"}