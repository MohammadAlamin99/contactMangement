import React from 'react';

const ApplicationHeader = () => {
  return (
    <div>
        <div className="container-fluid">
          <div className="row pt-3">
            <div className="col-lg-2">
              <div className="log text">
              <p style={{color:"#11998E", fontWeight:"900"}}>Logo Here</p>    
              </div>
            </div>
            <div className="col-lg-7" style={{background:"#E0EDEA"}}>
              <div className="text pt-2">
                <p>Add your contact</p>
              </div>
              
            </div>
            <div className="col-lg-3" style={{background:"#E0EDEA"}}>
              
            </div>
          </div>
        </div>
    </div>
  );
};

export default ApplicationHeader;