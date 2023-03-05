import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Badge,
  Dropdown,
  ProgressBar,
  Nav,
} from "react-bootstrap";

/// imge
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import avatar4 from "../../../images/avatar/4.jpg";
import avatar5 from "../../../images/avatar/5.jpg";
import avatar6 from "../../../images/avatar/6.jpg";
import avatar7 from "../../../images/avatar/7.jpg";
import avatar8 from "../../../images/avatar/8.jpg";
import { Link } from "react-router-dom";

const Users = () => {
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
  const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );

  return (
    <Fragment>
      <Nav >
		<Nav.Item as='div' className="nav nav-tabs" id="nav-tab" role="tablist">
        <Link as="button" className="nav-link  nt-unseen" id="nav-following-tab" eventKey='Follow' type="button" to="/dashboard">Dashboard</Link>
        <Link as="button" className="nav-link  nt-unseen" id="nav-following-tab" eventKey='Follow' type="button" to="/add-user">Add Users</Link>
        </Nav.Item>
      </Nav>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>All Users List</Card.Title>
              <div>
                <Link to="/add-user">
                  <Button variant="primary">Add Users</Button>
                </Link>&nbsp;&nbsp;
                <Link to="import-user">
                  <Button variant="primary">Import Users</Button>
                </Link>&nbsp;&nbsp;
                <Link to="export-user">
                  <Button variant="primary">Export Users</Button>
                </Link>
              </div>
            </Card.Header>
              <Table responsive striped bordered className="verticle-middle">
                <thead>
                  <tr>
                    <th className="width50 ">
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper_all">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkAll"
                          required=""
                          onClick={() => chackboxFun("all")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkAll"
                        ></label>
                      </div>
                    </th>
                    <th>
                      <strong>EID</strong>
                    </th>
                    <th>
                      <strong>SID</strong>
                    </th>
                    <th>
                      <strong>USER</strong>
                    </th>
                    <th>
                      <strong>DEPARTMENT</strong>
                    </th>
                    <th>
                      <strong>Email</strong>
                    </th>
                    <th>
                      <strong>USER TYPE</strong>
                    </th>
                    <th>
                      <strong>REGISTRATION</strong>
                    </th>
                    <th>
                      <strong>LAST LOGIN</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar1}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          to="/edit-user"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar2}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar3}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar4}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar5}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar6}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar7}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar8}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar1}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar2}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                          onClick={() => chackboxFun()}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td>
                    <strong>000001</strong>
                    </td>
                    <td>
                      <strong>00000s1</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar3}
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>Information Technology</td>
                    <td>example@example.com </td>
                    <td>Learners</td>
                    <td>22/11/2022</td>
                    <td>3 hrs Ago</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Users;
