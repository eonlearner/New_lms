import React,{useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Select from "react-select";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { read, utils, writeFile } from 'xlsx';
import {Tab, Nav, Button, Dropdown} from 'react-bootstrap';
import DropDownBlog  from '../Dashboard/DropDownBlog';
import LearningActivityChart from "../Dashboard/Dashboard/LearningActivityChart";


import PerfectScrollbar from "react-perfect-scrollbar";
import TotalCourse from "../../pages/WidgetBasic/TotalCourse";

import courses8 from './../../../images/courses/pic-2.jpg';
import pic1 from '../../../images/Users/Selectquestion.svg';

const options = [
  { value: "certificate_1", label: "Certificate 1" },
  { value: "certificate_2", label: "Certificate 2" },
  { value: "certificate_3", label: "Certificate 3" },
  { value: "certificate_4", label: "Certificate 4" },
];
  
const AdmTestOption = () => {
	const [dropSelect, setDropSelect] = useState('This Month');
    const [selectedOption, setSelectedOption] = useState(null);
    const [ movies, setMovies] = useState([]);

  return (
    <Fragment>
    <Nav >
      <Nav.Item as='div' className="nav nav-tabs" id="nav-tab" role="tablist">
        <Link as="button" className="nav-link  nt-unseen" id="nav-following-tab" eventKey='Follow' type="button" to="/test-question">Select Question</Link>
        <Link as="button" className="nav-link  nt-unseen" id="nav-following-tab" eventKey='Follow' type="button" to="/test-order">Set Question Order</Link>
        <Link as="button" className="nav-link  nt-unseen" id="nav-following-tab" eventKey='Follow' type="button" to="/test-weight">Set Question Weight</Link>
        <Link as="button" className="nav-link  nt-unseen" id="nav-following-tab" eventKey='Follow' type="button" to="/test-option">Test Options</Link>
      </Nav.Item>
    </Nav>

    <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">

              <div className="me-2">
              <input
                type="text"
                className="form-control"
                id="val-username"
                placeholder="Hitesh 100"
                />
                </div>
              <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                >
                </Select>
                </div>
                <br/>
                <br/>
                <div className='row'>
                <div className="col-lg-12">						
                    <div className="card-body">

                        
                <div className='row'>
                <div className="col-lg-1">	
                </div>
                <div className="col-lg-10">	
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please add some questions to the test first</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
	    </div>	
    </div>
    </div>
    </Fragment>
  )
}

export default AdmTestOption