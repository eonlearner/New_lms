import React, { Fragment, useState } from "react";
import PageTitle from "../../layouts/PageTitle";
import { Link, useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Dropdown,
  ProgressBar,
  Button,
  Nav,
} from "react-bootstrap";

/// imge
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";

const Info = () => {
  const [popup, setPopup] = useState({
    show: false, // initial values set to false and null
    id: null,
      });
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
let history = useHistory();
  return (
    <Fragment>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Courses</Card.Title>
              <div>
                <Link to="/add-courses">
                  <Button variant="primary">Add Courses</Button>
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="width80">
                      <strong>COURSE</strong>
                    </th>
                    <th>
                      <strong>CATEGORY</strong>
                    </th>
                    <th>
                      <strong>LAST UPDATED ON</strong>
                    </th>
                    <th>
                      <strong>OPTION</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course_overview"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="/edit-courses"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td><Link to={"/add-courses"}><strong>Content and LMS</strong></Link>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Content and LMS</strong>
                    </td>
                    <td>Samples</td>
                    <td>19/11/2022</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/add-courses"><i class="bi bi-plus-circle">&nbsp;</i>Add</Dropdown.Item>
                          <Dropdown.Item href="/course-reports"><i class="bi bi-graph-up">  &nbsp;</i>Reports</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-pencil-square">  &nbsp;</i>Edit</Dropdown.Item>
                          <Dropdown.Item href="#"><i class="bi bi-x-circle">  &nbsp;</i>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div>
      <Button onClick={() => history.goBack()}>Back</Button>
      </div>
    </Fragment>
  );
};

export default Info;