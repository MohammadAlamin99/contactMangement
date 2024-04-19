import React from 'react';
import logo from '../assets/images/logo.png'
import { GrFormSearch } from "react-icons/gr";

const Header = () => {
  return (
    <div>
        <div className="container-fluid">
          <div className="row pt-3">
            <div className="col-lg-2">
              <div className="log text">
                <p style={{color:"#11998E", fontWeight:"900"}}>Logo Here</p>    
              </div>
            </div>
            <div className="col-lg-7">
              <div className="text pt-2">
                <p>All Contacts</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="search d-flex">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" />
              <GrFormSearch className='s-icon'/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Header;