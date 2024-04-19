
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineDashboard } from "react-icons/md";
import DashBoard from './DashBoard';

const Navigation = () => {
    const path = useLocation().pathname;
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">    
             <div className="left-area overflow-auto bg-body">
               <ul style={{ listStyle: "none" }} className="p-0 ">
                <div className="menuHeadline">
                    <p>Menu</p>
                </div>
                <Link to={"/"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <RxDashboard/>
                    </span>
                  <span className=''>
                  All Contacts
                  </span>
                </li>
            </Link>
            <Link to={"/AddContacts"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/AddContacts" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <MdOutlineDashboard/>
                    </span>
                  <span className=''>
                  Add Contacts   
                  </span>
                </li>
            </Link>
                
      </ul>
    </div>
      </div>
                <div className="col-lg-10">
                  <DashBoard/>
                </div>
               
            </div>
        </div>
        </>
    );
};

export default Navigation;