import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import pic1 from '../../../../images/Users/Filessvg.svg'

import {
    Dropdown,
    DropdownButton,
    ButtonGroup,
    Nav,
    Button,
    FormCheck,
  } from "react-bootstrap";

const LearnerFiles = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Saved Files </h4>
                </div>
        
      <div className="row mb-5">
                <div className="col-lg-3">
                </div>
                <div className="col-lg-7">
                    <img src={pic1} height={500} width={500}/>
                    <h4 className="mb-10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You dont have saved any files</h4>
                </div>
                </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default LearnerFiles