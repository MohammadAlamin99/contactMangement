
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineDashboard } from "react-icons/md";
import { useRef } from "react";
import { addContactRequest } from "../../apiRequiest/apiRequiest";

const ApplicationNavbar = () => {
    const path = useLocation().pathname;
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const photoRef = useRef();

    const onSubmitHandler = async ()=>{
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const phone = phoneRef.current.value;
      const address = addressRef.current.value;
      const photo = photoRef.current.value;
    
      let result = await addContactRequest(name,email,phone,address,photo);
      window.location.href = "/";
    }
 
    
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
      <div className="col-lg-10 vh-100" style={{background:"#E0EDEA"}}>
        <div className="row">
         
         
          <div className="form text-center">
                    <p>Get your create account now.</p>
                    <input ref={nameRef} type="text" placeholder='Name'/> <br />
                    <input ref={emailRef} type="text" placeholder='Email' /> <br />
                    <input ref={phoneRef} type="text" placeholder='Phone' /> <br />
                    <input ref={addressRef} type="text" placeholder='Address' /> <br />
                    <input ref={photoRef} type="text" placeholder='Photo URL' /> <br />

                </div>
                <div className="btnSection">
                    <button onClick={onSubmitHandler} className='btn mb-2'
                        style={{background:"#11998E ", color:"white",fontFamily:"'Barlow', sans-serif",fontSize:"16px"}}>Create Contact</button> <br />
                </div>
          </div>
        </div>
      
    
      </div>
                
                
            </div>
   
        </>
    );
};

export default ApplicationNavbar;