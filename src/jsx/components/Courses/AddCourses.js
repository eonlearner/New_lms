import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Select from "react-select";
import PageTitle from "../../layouts/PageTitle";
import { Formik } from "formik";
import * as Yup from "yup";
import TimePickerPicker from 'react-time-picker';
import profile from "../../../images/profile/coursessss.jpg";
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
  Nav,
  Modal,
  Table,
} from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Your username must consist of at least 3 characters ")
    .max(50, "Your username must consist of at least 3 characters ")
    .required("Please enter a username"),
  password: Yup.string()
    .min(5, "Your password must be at least 5 characters long")
    .max(50, "Your password must be at least 5 characters long")
    .required("Please provide a password"),
});

const options = [
  { value: "certificate_1", label: "Certificate 1" },
  { value: "certificate_2", label: "Certificate 2" },
  { value: "certificate_3", label: "Certificate 3" },
  { value: "certificate_4", label: "Certificate 4" },
];
const options_1 = [
  { value: "level_1", label: "Level 1" },
  { value: "level_2", label: "Level 2" },
  { value: "level_3", label: "Level 3" },
  { value: "level_4", label: "Level 4" },
];
const options_2 = [
  { value: "parent_category_1", label: "Parent Category 1" },
  { value: "parent_category_2", label: "Parent Category 2" },
  { value: "parent_category_3", label: "Parent Category 3" },
  { value: "parent_category_4", label: "Parent Category 4" },
];
const AddCourses = () => {
  const [largeModal, setLargeModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [value, onChange] = useState(new Date());
  const [file, setFile] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
const chackbox = document.querySelectorAll(".bs_exam_topper input");
const motherChackBox = document.querySelector(".bs_exam_topper_all input");
const chackboxFun = (type) => {
  for (let i = 0; i < chackbox.length; i++) {
    const element = chackbox[i];
    if (type === "all") {
      if (motherChackBox.checked) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    } else {
      if (!element.checked) {
        motherChackBox.checked = false;
        break;
      } else {
        motherChackBox.checked = true;
      }
    }
  }
};
let history = useHistory();
  return (
    <Fragment>
      <Nav >
				<Nav.Item as='div' className="nav nav-tabs" id="nav-tab" role="tablist">
        <Link as="button" className="nav-link  nt-unseen" id="nav-following-tab" eventKey='Follow' type="button" to="/dashboard">Dashboard</Link>
        <Link as="button" className="nav-link  nt-unseen" id="nav-following-tab" eventKey='Follow' type="button" to="/course_users">Users</Link>
        <Link as="button" className="nav-link  nt-unseen" id="nav-following-tab" eventKey='Follow' type="button" to="/course_groups">Groups</Link>
        </Nav.Item>
      </Nav>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add Course Form </h4>
            </div>
            <div className="card-body">
              <div className="form-validation">
                <form
                  className="form-valide"
                  action="#"
                  method="post"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-username"
                        >
                          Course Name
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="val-username"
                            name="val-username"
                            placeholder="e.g. React-Redux"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-xl-12 col-form-label"
                          htmlFor="val-suggestions"
                        >
                          Add Photo<span className="text-danger">*</span>
                        </label>
                        <div className="profile-info">
                          <div className="profile-photo">
                          <input type="file" onChange={handleChange} />
                          <br/><br/>
                          <img src={file} width="250" height="250"/>
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-suggestions"
                        >
                          Description <span className="text-danger">*</span>
                        </label>
                        <div className="col-xl-12">
                          <textarea
                            className="form-control"
                            id="val-suggestions"
                            name="val-suggestions"
                            rows="5"
                            placeholder="Brief Description about Course..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                          <div className="col-lg-4 ms-auto">
                      <br/>
                      <br/>
                        <label
                          className="form-check css-control-primary css-checkbox"
                          htmlFor="val-terms"
                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                          />Active
                          </label>
                        </div>
                          <div className="col-lg-8 ms-auto">
                      <br/>
                      <br/>
                        <label
                          className="form-check css-control-primary css-checkbox"
                          htmlFor="val-terms"
                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                          />Hide from Course Catalog
                          </label>
                      <br/>
                      <br/>
                        </div>
                        </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-email"
                        >
                          Course Code <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="val-email"
                            name="val-email"
                            placeholder="Enter the Course Code"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-currency"
                        >
                          Price
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="val-currency"
                            name="val-currency"
                            placeholder="$21.60"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                      </div>
                      <label>Course Video</label>
                  <div className="input-group mb-3  input-success">
                  </div> 
                      <span className="input-group-text">
                        Use Your Video Link
                      </span>
                    
                    <input type="text" className="form-control" placeholder=" https://youtube.com"/>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="formFileLg" className="form-label">Use Your Video</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file" />
                  </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-confirm-password"
                        >
                          Capacity{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="val-confirm-password"
                            name="val-confirm-password"
                            placeholder="Unlimited"
                          />
                        </div>
                      </div>


                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-currency"
                        >
                          Time Options
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-md-6 mb-3">
                          <div className="example rangeDatePicker">
                            <p className="mb-1">Date Range With Time</p>
                            {/* <DateRangePicker
                              startText="Start"
                              endText="End"
                              startPlaceholder="Start Date"
                              endPlaceholder="End Date"
                            />   */}

                            <DateRangePicker>
                                <input type="text" className="form-control input-daterange-timepicker" />
                            </DateRangePicker>
                            <br/>
                            <br/>Pick Your Time of Course
                            <TimePickerPicker className="form-control input-daterange-timepicker" onChange={onChange} value={value} />
                              </div>
                          </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-website"
                        >
                          Certificate
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                        >
                        </Select>
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-website"
                        >
                          Level
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options_1}
                        >
                        </Select>
                        </div>
                      </div>
                        <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-username"
                        >
                          Name
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="val-username"
                            name="val-username"
                            placeholder="e.g. John Doe"
                          />
                        </div>
                      </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-website"
                        >
                          Parent Category
                          <span className="text-danger">*</span>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-lg-6">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options_2}
                        >
                        </Select>
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-currency"
                        >
                          Price
                          <span className="text-danger">*</span>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="val-currency"
                            name="val-currency"
                            placeholder="$21.60"
                          />
                        </div>
                      </div>
                    </div>
                      <br/>
                      
                      <br/>

                      <div className="form-group mb-3 row">
                        <div className="col-lg-3 ">
                      <button
                        type="submit"
                        className="btn me-2 btn-primary"
                      >
                        Save
                      </button> or &nbsp;&nbsp;
                      <Button onClick={() => history.goBack()} className="btn btn-light">Cancel</Button></div>
                        <div className="col-lg-5 ms-auto">
                        <DropdownButton
                          as={ButtonGroup}
                          id="dropdown-button-drop-up"
                          drop="up"
                          variant="primary"
                          title="ADD"
                          className="me-1 mt-1"
                        >
                          <Dropdown.Item href="/content"><i class="bi bi-back"> &nbsp;</i>Content</Dropdown.Item>
                          <Dropdown.Item href="/webcontent"><i class="bi bi-cloud"> &nbsp;</i>Web Content</Dropdown.Item>
                          <Dropdown.Item href="/video"><i class="bi bi-play-circle"> &nbsp;</i>Video</Dropdown.Item>
                          <Dropdown.Item href="/audio"><i class="bi bi-file-music"> &nbsp;</i>Audio</Dropdown.Item>
                          <Dropdown.Item href="/presentation"><i class="bi bi-file-slides"> &nbsp;</i>Presentation | Documents</Dropdown.Item>
                          <Dropdown.Item href="/scorm"><i class="bi bi-command"> &nbsp;</i>SCORM | xAPI | cmi5</Dropdown.Item>
                          <Dropdown.Item href="/iframe"><i class="bi bi-code-slash"> &nbsp;</i>iFrame</Dropdown.Item>
                          <Dropdown.Item href="/test-question"><i class="bi bi-journal-check"> &nbsp;</i>Test</Dropdown.Item>
                          <Dropdown.Item href="/survey-question"><i class="bi bi-check2-square"> &nbsp;</i>Survey</Dropdown.Item>
                          <Dropdown.Item href="/assignment"><i class="bi bi-clipboard"> &nbsp;</i>Assignment</Dropdown.Item>
                          <Dropdown.Item href="/instructor-led"><i class="bi bi-calendar4-week"> &nbsp;</i>Instructor-led training</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-tropical-storm"> &nbsp;</i>Section</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-vr"> &nbsp;</i>Clone from another course</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-link"> &nbsp;</i>Link from another course</Dropdown.Item>
                        </DropdownButton>
                        <button type="submit" className="btn btn-primary me-1 col-lg-5 ms-auto">
                          View as Learner
                        </button>
                        <DropdownButton
                          as={ButtonGroup}
                          id="dropdown-button-drop-up"
                          drop="up"
                          variant="primary"
                          title="..."
                          className="me-1 mt-1"
                        >
                          <Dropdown.Item href="message_users"><i class="bi bi-chat-right-text"> &nbsp;</i>Message Users</Dropdown.Item>
                          <Dropdown.Item href="ad_event"><i class="bi bi-calendar4-week"> &nbsp;</i>Add Event</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-cloud-snow-fill"> &nbsp;</i>Make Course Public</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-lock"> &nbsp;</i>Lock Course Content</Dropdown.Item>
                          <Dropdown.Item 
                  variant="primary"
                  className="mb-2 me-2"
                  onClick={() => setLargeModal(true)}><i class="bi bi-tablet"> &nbsp;</i>
                  Mobile App Compatibility
                </Dropdown.Item>
                <Modal
                  className="fade bd-example-modal-lg"
                  show={largeModal}
                  size="lg"
                >
                  <Modal.Header>
                    <Modal.Title>Modal App Compatibility</Modal.Title>
                    <Button
                      variant=""
                      className="btn-close"
                      onClick={() => setLargeModal(false)}
                    >
                      
                    </Button>
                  </Modal.Header>
                  <Modal.Body>
                  <Table responsive>
                <thead>
                  <tr>
                    <th className="width80">
                      Unit Name
                    </th>
                    <th>
                      Mobile App Compatible
                    </th>
                    <th>
                      Offline Compatible
                    </th>
                    <th>
                      Render as web page
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      How to create Instructor-led Training
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                    <div className="col-xl-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                      </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      How to create Instructor-led Training
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                    <div className="col-xl-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                      </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      How to create Instructor-led Training
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                    <div className="col-xl-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                      </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      How to create Instructor-led Training
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                    <div className="col-xl-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                      </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      How to create Instructor-led Training
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                    <div className="col-xl-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                      </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      How to create Instructor-led Training
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                    <div className="col-xl-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                      </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      How to create Instructor-led Training
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                    <div className="col-xl-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                      </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      How to create Instructor-led Training
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                    <div className="col-xl-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                      </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      How to create Instructor-led Training
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                    <div className="col-xl-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                      </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      How to create Instructor-led Training
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔️</td>
                    <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                    <div className="col-xl-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                      </div>
                      </div>
                    </td>
                    
                  </tr>
                </tbody>
              </Table>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="danger light"
                      onClick={() => setLargeModal(false)}
                    >
                      Close
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-primary"
                    >
                      Save changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                        </DropdownButton>
                      </div>
            </div>
        </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddCourses;
