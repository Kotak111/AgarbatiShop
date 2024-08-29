import React from 'react';
import "../css/header.css"
import { Link } from 'react-router-dom';
import ModelLayout from './modelLayout';

function Header(props) {
  const obj = { "/": "Home", "/about": "About", "/contact": "Contact", "/privacy": "Privacy", "/blog": "Blog" }
  const newData = Object.entries(obj).map((ele) => {
    return <li className="nav-item ">
      <Link className="nav-link " to={ele[0]}>{ele[1]}</Link>
    </li>
  })

  const obj2 = { "/stick": "DhupStick" };
  const dropdata = Object.entries(obj2).map((ele) => {
    return <li><Link className="dropdown-item" to={ele[0]}>{ele[1]}</Link></li>
  })
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-3 fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"#"}>Harsh<strong style={{ color: "orange" }}>Agarbati</strong></Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon " ></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
              {newData}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </Link>
                <ul className="dropdown-menu p-3" aria-labelledby="navbarDropdown">
                  {dropdata}
                </ul>
              </li>

              <li className='nav-item'>
                <div className='d-flex icon'>
                  <strong><Link><i className="fa-solid fa-cart-shopping hed-i" style={{ color: "white", opacity: "0.8" }} data-bs-target="#staticBackdrop" data-bs-toggle="modal">
                  </i>
                  </Link></strong>

                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ModelLayout/>
      

    </>
  );
}

export default Header;