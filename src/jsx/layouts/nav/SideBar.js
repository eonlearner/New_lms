/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect, useState } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";

import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";

import medal from "../../../images/medal.png";


class MM extends Component {
	componentDidMount() {
		this.$el = this.el;
		this.mm = new Metismenu(this.$el);
	}
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
	const {
		iconHover,
		sidebarposition,
		headerposition,
		sidebarLayout,
	} = useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
	
	//sidebar icon Heart blast
	var handleheartBlast = document.querySelector('.heart');
        function heartBlast() {
            return handleheartBlast.classList.toggle("heart-blast");
        }
        handleheartBlast.addEventListener('click', heartBlast);
	
  }, []);
 //For scroll
 const [hideOnScroll, setHideOnScroll] = useState(true)
	useScrollPosition(
		({ prevPos, currPos }) => {
		  const isShow = currPos.y > prevPos.y
		  if (isShow !== hideOnScroll) setHideOnScroll(isShow)
		},
		[hideOnScroll]
	)
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
      "schedule",
      "message",
      "activity",
      "task",
    ],
	superadmin = [
		"",
		"dashboard-dark",
		"users",
		"categories",
	],
	admin = [
		"",
		"dashboard-dark",
		"users",
		"categories",
	],
	maininstructor = [
		"inst-dash",
		"dashboard-dark",
		"users",
		"categories",
	],
	learner = [
		"learn-dash",
		"st-profile",
		"courses",
		"classroom",
		"conference",
		"virtual-training",
		"discussion",
		"calender",
		"groups",
	],
	users = [
		"users-list",
		"add-user",
		"import-user",
		"export-user",
		"user-types",
		"add-user-type",
	],
	ausers = [
		"a-users-list",
		"ad-add-user",
		"ad-edit-user",
		"ad-user-types",
		"ad-add-user-type",
		"ad-edit-user-type",
		"ad-import-user",
		"ad-export-user",
		"ad-user-files",
		"ad-user-groups",
		"ad-user-course",
		"ad-user-progress",
		"ad-user-certificates",
		"ad-user-timeline",
		"ad-user-infographic",

	],
	importexport = [
		"su-import-user",
		"su-export-user",
	],
	usertypes = [
		"user-types",
		"add-user-type",
	],
	categories = [
		"categories",
		"add-category",
	],
	courses = [
		"courses",
		"course-details-1",
		"course-details-2",
		"add-courses",
		"courses-info",
	],
	admcourses = [
		"adm_courses",
		"adm_course-details-1",
		"adm_course-details-2",
		"adm_add-courses",
		"adm_courses-info",
	],
	groups = [
		"groups",
		"add-groups",
	],
	events = [
		"events",
		"add-events",
	],
	instructor=[
		"instructor-dashboard",
		"instructor-courses",
		"instructor-schedule",
		"instructor-students",
		"instructor-resources",
		"instructor-transactions",
		"instructor-liveclass",
		"form-validation-jquery",
	],
	reports = [
		"reports-overview",
		"user-reports",
		"course-reports",
		"group-reports",
		"scorm-reports",
		"test-reports",
		"survey-reports",
		"assign-reports",
		"ilt-reports",
		"custom-reports",
		"infographics",
	],
	accountsettings = [
		"basic-settings",
		"certificates",
		"domains",
		"ecommerce",
		"gamification",
		"subscriptions",
		"themmes-page",
		"user-settings",
	],
	trainings =[
		"classroom",
		"conference",
		"virtual-training",
		"add-classroom",
		"add-conference",
		"add-virtual-trainings",
	],
	calender =[
		"calender",
		"add-c-event",
		"private-address",
	],
	discussion = [
		"discussion",
		"add-discussion",
	],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];
  return (
    <div
      className={`dlabnav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? hideOnScroll > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">
        <MM className="metismenu" id="menu">
			<li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-grid"></i>
					<span className="nav-text">Dashboard</span>
				</Link>
				<ul>
					<li><Link className={`${path === "dashboard" ? "mm-active" : ""}`} to="/dashboard">Light Mode</Link></li>
					<li><Link className={`${path === "dashboard-dark" ? "mm-active" : ""}`} to="/dashboard-dark">Dark Mode</Link></li>
					{/* <li><Link className={`${path === "schedule" ? "mm-active" : ""}`} to="/schedule">Schedule</Link></li>
					<li><Link className={`${path === "instructors" ? "mm-active" : ""}`} to="/instructors">Instructors</Link></li>
					<li><Link className={`${path === "message" ? "mm-active" : ""}`} to="/message">Message</Link></li>
					<li><Link className={`${path === "activity" ? "mm-active" : ""}`} to="/activity">Activity</Link></li>
					<li><Link className={`${path === "profile" ? "mm-active" : ""}`} to="/profile">Profile</Link></li> */}
						{/* <li><Link className={`${path === "task" ? "mm-active" : ""}`} to="/task">Task</Link></li> */}
				</ul>
			</li>


{/* *********************************** Superadmin Dashboard Options************************************ */}



			<li className={`${superadmin.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-grid"></i>
					<span className="nav-text">SUPERADMIN</span>
				</Link>
				<ul>
				<li><Link className={`${path === "dashboard" ? "mm-active" : ""}`} to="/dashboard">Superadmin Dashboard</Link></li>
				<li className={`${users.includes(path) ? "mm-active" : ""}`}>
					<Link className="has-arrow" to="#" >
						<i className="bi bi-person-circle"></i>
						<span className="nav-text">USERS</span>
					</Link>
					<ul>
						<li><Link className={`${path === "users-list" ? "mm-active" : ""}`} to="/users-list"> Users </Link></li>
						<li><Link className={`${path === "add-user" ? "mm-active" : ""}`} to="/add-user"> Add User </Link></li>
					</ul>
				</li>
				<li className={`${categories.includes(path) ? "mm-active" : ""}`}>
					<Link className="has-arrow" to="#" >
						<i className="bi bi-list-ul"></i>
						<span className="nav-text">CATEGORIES</span>
					</Link>
					<ul>
						<li><Link className={`${path === "categories" ? "mm-active" : ""}`} to="/categories"> Categories </Link></li>
						<li><Link className={`${path === "add-category" ? "mm-active" : ""}`} to="/add-category"> Add Category</Link></li>
							{/* <li><Link className={`${path === "task" ? "mm-active" : ""}`} to="/task">Task</Link></li> */}
					</ul>
				</li>
				<li className={`${courses.includes(path) ? "mm-active" : ""}`}>
					<Link className="has-arrow" to="#" >
						<i className="bi bi-book"></i>
						<span className="nav-text">COURSES</span>
					</Link>
					<ul>
						<li><Link className={`${path === "courses-info" ? "mm-active" : ""}`} to="/courses-info">Courses</Link></li>
						<li><Link className={`${path === "add-courses" ? "mm-active" : ""}`} to="/add-courses">Add Courses</Link></li>
						<li><Link className={`${path === "courses" ? "mm-active" : ""}`} to="/courses">Course Store</Link></li>
					</ul>
				</li>
				<li className={`${groups.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-people"></i>
					<span className="nav-text">GROUPS</span>
				</Link>
				<ul>
					<li><Link className={`${path === "groups" ? "mm-active" : ""}`} to="/groups">Groups</Link></li>
					<li><Link className={`${path === "add-groups" ? "mm-active" : ""}`} to="/add-groups">Add Groups</Link></li>
				</ul>
			</li>
			<li className={`${events.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-calendar-check"></i>
					<span className="nav-text">EVENT ENGINE</span>
				</Link>
				<ul>
					<li><Link className={`${path === "events" ? "mm-active" : ""}`} to="/events">Events</Link></li>
					<li><Link className={`${path === "add-events" ? "mm-active" : ""}`} to="/add-events">Add Notification</Link></li>
				</ul>
			</li>
			<li className={`${usertypes.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-tags-fill"></i>
					<span className="nav-text">USER TYPES</span>
				</Link>
				<ul>
					<li><Link className={`${path === "user-types" ? "mm-active" : ""}`} to="/user-types"> User Types</Link></li>
						{/* <li><Link className={`${path === "task" ? "mm-active" : ""}`} to="/task">Task</Link></li> */}
				</ul>
			</li>
			<li className={`${importexport.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-tags-fill"></i>
					<span className="nav-text">IMPORT/EXPORT</span>
				</Link>
				<ul>
					<li><Link className={`${path === "import-user" ? "mm-active" : ""}`} to="/import-user"> Import </Link></li>
					<li><Link className={`${path === "export-user" ? "mm-active" : ""}`} to="/export-user"> Export </Link></li>
						{/* <li><Link className={`${path === "task" ? "mm-active" : ""}`} to="/task">Task</Link></li> */}
				</ul>
			</li>
			<li className={`${reports.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i class="bi bi-graph-up"></i> 
					<span className="nav-text">REPORTS</span></Link>
				<ul>
					<li><Link className={`${path === "reports-overview" ? "mm-active" : ""}`} to="/reports-overview">Overview</Link></li>
					<li><Link className={`${path === "user-reports" ? "mm-active" : ""}`} to="/user-reports">User Reports</Link></li>
					<li><Link className={`${path === "course-reports" ? "mm-active" : ""}`} to="/course-reports">Course Reports</Link></li>
					<li><Link className={`${path === "group-reports" ? "mm-active" : ""}`} to="/group-reports">Group Reports</Link></li>
					<li><Link className={`${path === "scorm-reports" ? "mm-active" : ""}`} to="/scorm-reports">Scorm Reports</Link></li>
					<li><Link className={`${path === "test-reports" ? "mm-active" : ""}`} to="/test-reports">Test Reports</Link></li>
					<li><Link className={`${path === "survey-reports" ? "mm-active" : ""}`} to="/survey-reports">Survey Reports</Link></li>
					<li><Link className={`${path === "assign-reports" ? "mm-active" : ""}`} to="/assign-reports">Assignment Reports</Link></li>
					<li><Link className={`${path === "ilt-reports" ? "mm-active" : ""}`} to="/ilt-reports">ILT Reports</Link></li>
					<li><Link className={`${path === "custom-reports" ? "mm-active" : ""}`} to="/custom-reports">Custom Reports</Link></li>
					<li><Link className={`${path === "infographics" ? "mm-active" : ""}`} to="/infographics">Infographics</Link></li>
				</ul>
			</li>
			<li className={`${accountsettings.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-gear-fill"></i>
					<span className="nav-text">Account & Setting</span></Link>
				<ul>
					<li><Link className={`${path === "basic-settings" ? "mm-active" : ""}`} to="/basic-settings">Basic Settings</Link></li>
					<li><Link className={`${path === "certificates" ? "mm-active" : ""}`} to="/certificates">Certificates</Link></li>
					<li><Link className={`${path === "domains" ? "mm-active" : ""}`} to="/domains">Domain</Link></li>
					<li><Link className={`${path === "ecommerce" ? "mm-active" : ""}`} to="/ecommerce">E-commerce</Link></li>
					<li><Link className={`${path === "gamification" ? "mm-active" : ""}`} to="/gamification">Gamifications</Link></li>
					<li><Link className={`${path === "subscriptions" ? "mm-active" : ""}`} to="/subscriptions">Subscription</Link></li>
					<li><Link className={`${path === "/thoms-page" ? "mm-active" : ""}`} to="/thoms-page">Themes</Link></li>
					<li><Link className={`${path === "user-settings" ? "mm-active" : ""}`} to="/user-settings">Users Settings</Link></li>
				</ul>
			</li>
		</ul>
	</li>




{/* *********************************** Admin Dashboard Options************************************ */}



<li className={`${admin.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-grid"></i>
					<span className="nav-text">ADMIN</span>
				</Link>
				<ul>
				<li><Link className={`${path === "dashboard" ? "mm-active" : ""}`} to="/dashboard">Admin Dashboard</Link></li>
				<li className={`${ausers.includes(path) ? "mm-active" : ""}`}>
					<Link className="has-arrow" to="#" >
						<i className="bi bi-person-circle"></i>
						<span className="nav-text">USERS</span>
					</Link>
					<ul>
						<li><Link className={`${path === "a-users-list" ? "mm-active" : ""}`} to="/a-users-list"> Users </Link></li>
					<li><Link className={`${path === "ad-user-types" ? "mm-active" : ""}`} to="/ad-user-types"> User Types</Link></li>
					<li><Link className={`${path === "ad-user-progress" ? "mm-active" : ""}`} to="/ad-user-progress"> User Progress</Link></li>
					<li><Link className={`${path === "ad-user-infographic" ? "mm-active" : ""}`} to="/ad-user-infographic"> User Infographics</Link></li>
					</ul>
				</li>
				<li className={`${admcourses.includes(path) ? "mm-active" : ""}`}>
					<Link className="has-arrow" to="#" >
						<i className="bi bi-book"></i>
						<span className="nav-text">COURSES</span>
					</Link>
					<ul>
						<li><Link className={`${path === "adm_courses-info" ? "mm-active" : ""}`} to="/adm_courses-info">Courses</Link></li>
						<li><Link className={`${path === "adm_add-courses" ? "mm-active" : ""}`} to="/adm_add-courses">Add Courses</Link></li>
						<li><Link className={`${path === "adm_courses" ? "mm-active" : ""}`} to="/adm_courses">Course Store</Link></li>
					</ul>
				</li>
				<li className={`${groups.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-people"></i>
					<span className="nav-text">GROUPS</span>
				</Link>
				<ul>
					<li><Link className={`${path === "groups" ? "mm-active" : ""}`} to="/groups">Groups</Link></li>
					<li><Link className={`${path === "add-groups" ? "mm-active" : ""}`} to="/add-groups">Add Groups</Link></li>
				</ul>
			</li>
			<li className={`${events.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-calendar-check"></i>
					<span className="nav-text">EVENT ENGINE</span>
				</Link>
				<ul>
					<li><Link className={`${path === "events" ? "mm-active" : ""}`} to="/events">Events</Link></li>
					<li><Link className={`${path === "add-events" ? "mm-active" : ""}`} to="/add-events">Add Notification</Link></li>
				</ul>
			</li>
			<li className={`${reports.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i class="bi bi-graph-up"></i> 
					<span className="nav-text">REPORTS</span></Link>
				<ul>
					<li><Link className={`${path === "reports-overview" ? "mm-active" : ""}`} to="/reports-overview">Overview</Link></li>
					<li><Link className={`${path === "user-reports" ? "mm-active" : ""}`} to="/user-reports">User Reports</Link></li>
					<li><Link className={`${path === "course-reports" ? "mm-active" : ""}`} to="/course-reports">Course Reports</Link></li>
					<li><Link className={`${path === "group-reports" ? "mm-active" : ""}`} to="/group-reports">Group Reports</Link></li>
					<li><Link className={`${path === "infographics" ? "mm-active" : ""}`} to="/infographics">Infographics</Link></li>
				</ul>
			</li>
			<li className={`${accountsettings.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-gear-fill"></i>
					<span className="nav-text">Account & Setting</span></Link>
				<ul>
					<li><Link className={`${path === "basic-settings" ? "mm-active" : ""}`} to="/basic-settings">Basic Settings</Link></li>
					<li><Link className={`${path === "certificates" ? "mm-active" : ""}`} to="/certificates">Certificates</Link></li>
					<li><Link className={`${path === "domains" ? "mm-active" : ""}`} to="/domains">Domain</Link></li>
					<li><Link className={`${path === "ecommerce" ? "mm-active" : ""}`} to="/ecommerce">E-commerce</Link></li>
					<li><Link className={`${path === "gamification" ? "mm-active" : ""}`} to="/gamification">Gamifications</Link></li>
					<li><Link className={`${path === "subscriptions" ? "mm-active" : ""}`} to="/subscriptions">Subscription</Link></li>
					<li><Link className={`${path === "/thoms-page" ? "mm-active" : ""}`} to="/thoms-page">Themes</Link></li>
					<li><Link className={`${path === "user-settings" ? "mm-active" : ""}`} to="/user-settings">Users Settings</Link></li>
				</ul>
			</li>
		</ul>
	</li>	






{/* *********************************** Instructor Dashboard Options************************************ */}



<li className={`${maininstructor.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-grid"></i>
					<span className="nav-text">INSTRUCTOR</span>
				</Link>
				<ul>
				<li><Link className={`${path === "inst-dash" ? "mm-active" : ""}`} to="/inst-dash">Instructor Dashboard</Link></li>
				<li className={`${courses.includes(path) ? "mm-active" : ""}`}>
					<Link className="has-arrow" to="#" >
						<i className="bi bi-book"></i>
						<span className="nav-text">COURSES</span>
					</Link>
					<ul>
						<li><Link className={`${path === "courses-info" ? "mm-active" : ""}`} to="/courses-info">Courses</Link></li>
						<li><Link className={`${path === "add-courses" ? "mm-active" : ""}`} to="/add-courses">Add Courses</Link></li>
						<li><Link className={`${path === "add-courses" ? "mm-active" : ""}`} to="/users_course_progress">USER & PROGRESS</Link></li>
						<li><Link className={`${path === "add-courses" ? "mm-active" : ""}`} to="/course_files">FILES</Link></li>
						<li><Link className={`${path === "add-courses" ? "mm-active" : ""}`} to="/rules-path">RULES & PATH</Link></li>
						<li><Link className={`${path === "add-courses" ? "mm-active" : ""}`} to="/course-reports">REPORTS</Link></li>
					</ul>
				</li>
				<li className={`${groups.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-people"></i>
					<span className="nav-text">GROUPS</span>
				</Link>
				<ul>
					<li><Link className={`${path === "groups" ? "mm-active" : ""}`} to="/groups">Groups</Link></li>
					<li><Link className={`${path === "add-groups" ? "mm-active" : ""}`} to="/add-groups">Add Groups</Link></li>
				</ul>
			</li>
			<li className={`${trainings.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-people"></i> <span className="nav-text">Trainings</span></Link>
				<ul>
					<li><Link className={`${path === "classroom" ? "mm-active" : ""}`} to="/classroom">Classroom Training</Link></li>
					<li><Link className={`${path === "conference" ? "mm-active" : ""}`} to="/conference">Conference Training</Link></li>
					<li><Link className={`${path === "virtual-training" ? "mm-active" : ""}`} to="/virtual-training">Virtual Trainings</Link></li>
					<li><Link className={`${path === "add-classroom" ? "mm-active" : ""}`} to="/add-classroom">Add Classroom</Link></li>
					<li><Link className={`${path === "add-conference" ? "mm-active" : ""}`} to="/add-conference">Add Conference</Link></li>
					<li><Link className={`${path === "add-virtual-trainings" ? "mm-active" : ""}`} to="/add-virtual-trainings">Add Virtual Trainings</Link></li>
				</ul>
			</li>
			<li className={`${discussion.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-chat-quote-fill"></i> <span className="nav-text">Discussions</span></Link>
				<ul>
					<li><Link className={`${path === "discussion" ? "mm-active" : ""}`} to="/discussion">Discussion</Link></li>
					<li><Link className={`${path === "add-discussion" ? "mm-active" : ""}`} to="/add-discussion">Add Discussion</Link></li>
				</ul>
			</li>
			<li className={`${calender.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-calendar3"></i> <span className="nav-text">Calender</span></Link>
				<ul>
					<li><Link className={`${path === "calender" ? "mm-active" : ""}`} to="/calender">Calender</Link></li>
					<li><Link className={`${path === "add-c-event" ? "mm-active" : ""}`} to="/add-c-event">Add Event</Link></li>
				</ul>
			</li>
		</ul>
	</li>	






{/* *********************************** Learner Dashboard Options************************************ */}



<li className={`${learner.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-grid"></i>
					<span className="nav-text">LEARNERS</span>
				</Link>
				<ul>
				<li><Link className={`${path === "learn-dash" ? "mm-active" : ""}`} to="/learn-dash">Overview</Link></li>
				<li className={`${courses.includes(path) ? "mm-active" : ""}`}>
					<Link className="has-arrow" to="#" >
						<i className="bi bi-book"></i>
						<span className="nav-text">COURSES</span>
					</Link>
					<ul>
						<li><Link className={`${path === "courses-info" ? "mm-active" : ""}`} to="/courses-info">Courses</Link></li>
						<li><Link className={`${path === "courses" ? "mm-active" : ""}`} to="/courses">Course Store</Link></li>
					</ul>
				</li>
				<li className={`${trainings.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-people"></i> <span className="nav-text">Trainings</span></Link>
				<ul>
					<li><Link className={`${path === "classroom" ? "mm-active" : ""}`} to="/classroom">Classroom Training</Link></li>
					<li><Link className={`${path === "conference" ? "mm-active" : ""}`} to="/conference">Conference Training</Link></li>
					<li><Link className={`${path === "virtual-training" ? "mm-active" : ""}`} to="/virtual-training">Virtual Trainings</Link></li>
				</ul>
			</li>
			<li className={`${discussion.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-chat-quote-fill"></i> <span className="nav-text">Discussions</span></Link>
				<ul>
					<li><Link className={`${path === "discussion" ? "mm-active" : ""}`} to="/discussion">Discussion</Link></li>
				</ul>
			</li>
			<li className={`${calender.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-calendar3"></i> <span className="nav-text">Calender</span></Link>
				<ul>
					<li><Link className={`${path === "calender" ? "mm-active" : ""}`} to="/calender">Calender</Link></li>
				</ul>
			</li>
			<li className={`${discussion.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-cursor-text"></i> <span className="nav-text">Transcript</span></Link>
				<ul>
					<li><Link className={`${path === "discussion" ? "mm-active" : ""}`} to="/discussion">Transcript</Link></li>
				</ul>
			</li>
				<li className={`${groups.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-people"></i>
					<span className="nav-text">GROUPS</span>
				</Link>
				<ul>
					<li><Link className={`${path === "groups" ? "mm-active" : ""}`} to="/groups">Groups</Link></li>
				</ul>
			</li>
			<li className={`${discussion.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-file-earmark-zip"></i> <span className="nav-text">Files</span></Link>
				<ul>
					<li><Link className={`${path === "discussion" ? "mm-active" : ""}`} to="/discussion">Files</Link></li>
				</ul>
			</li>
			<li className={`${discussion.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-award"></i> <span className="nav-text">Certificates</span></Link>
				<ul>
					<li><Link className={`${path === "/user-certificates" ? "mm-active" : ""}`} to="/user-certificates">Certificates</Link></li>
				</ul>
			</li>
			<li className={`${discussion.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-hourglass-split"></i> <span className="nav-text">Timeline</span></Link>
				<ul>
					<li><Link className={`${path === "discussion" ? "mm-active" : ""}`} to="/discussion">Timeline</Link></li>
				</ul>
			</li>
		</ul>
	</li>	




			{/* <li className={`${users.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-person-circle"></i>
					<span className="nav-text">Users</span>
				</Link>
				<ul>
					<li><Link className={`${path === "users-list" ? "mm-active" : ""}`} to="/users-list"> Users </Link></li>
				</ul>
			</li>
			<li className={`${categories.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-list-ul"></i>
					<span className="nav-text">Categories</span>
				</Link>
				<ul>
					<li><Link className={`${path === "categories" ? "mm-active" : ""}`} to="/categories"> Categories </Link></li>
					<li><Link className={`${path === "add-category" ? "mm-active" : ""}`} to="/add-category"> Add Category</Link></li>
				</ul>
			</li>
			
			<li className={`${courses.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-book"></i>
					<span className="nav-text">Courses</span>
				</Link>
				<ul>
					<li><Link className={`${path === "courses-info" ? "mm-active" : ""}`} to="/courses-info">Courses</Link></li>
					<li><Link className={`${path === "courses" ? "mm-active" : ""}`} to="/courses">Course Store</Link></li>
					<li><Link className={`${path === "add-courses" ? "mm-active" : ""}`} to="/add-courses">Add Courses</Link></li>
				</ul>
			</li>
			<li className={`${groups.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-people"></i>
					<span className="nav-text">Groups</span>
				</Link>
				<ul>
					<li><Link className={`${path === "groups" ? "mm-active" : ""}`} to="/groups">Groups</Link></li>
					<li><Link className={`${path === "add-groups" ? "mm-active" : ""}`} to="/add-groups">Add Groups</Link></li>
				</ul>
			</li>
			<li className={`${events.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-calendar-check"></i>
					<span className="nav-text">Events Engine</span>
				</Link>
				<ul>
					<li><Link className={`${path === "events" ? "mm-active" : ""}`} to="/events">Events</Link></li>
					<li><Link className={`${path === "add-events" ? "mm-active" : ""}`} to="/add-events">Add Notification</Link></li>
				</ul>
			</li>
			<li className={`${instructor.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-joystick"></i> <span className="nav-text">Instructor</span></Link>
				<ul>
					<li><Link className={`${path === "instructor-dashboard" ? "mm-active" : ""}`} to="/instructor-dashboard">Dashboard</Link></li>
					<li><Link className={`${path === "instructor-courses" ? "mm-active" : ""}`} to="/instructor-courses">Courses</Link></li>
					<li><Link className={`${path === "instructor-schedule" ? "mm-active" : ""}`} to="/instructor-schedule">Schedule</Link></li>
					<li><Link className={`${path === "instructor-students" ? "mm-active" : ""}`} to="/instructor-students">Students</Link></li>
					<li><Link className={`${path === "instructor-resources" ? "mm-active" : ""}`} to="/instructor-resources">Resources</Link></li>
					<li><Link className={`${path === "instructor-transactions" ? "mm-active" : ""}`} to="/instructor-transactions">Transactions</Link></li>
					<li><Link className={`${path === "instructor-liveclass" ? "mm-active" : ""}`} to="/instructor-liveclass">Live Class</Link></li>
				</ul>
			</li>
			<li className={`${usertypes.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
					<i className="bi bi-tags-fill"></i>
					<span className="nav-text">User Types</span>
				</Link>
				<ul>
					<li><Link className={`${path === "user-types" ? "mm-active" : ""}`} to="/user-types"> User Types</Link></li>
				</ul>
			</li>
			<li className={`${reports.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i class="bi bi-graph-up"></i> <span className="nav-text">Reports</span></Link>
				<ul>
					<li><Link className={`${path === "reports-overview" ? "mm-active" : ""}`} to="/reports-overview">Overview</Link></li>
					<li><Link className={`${path === "user-reports" ? "mm-active" : ""}`} to="/user-reports">User Reports</Link></li>
					<li><Link className={`${path === "course-reports" ? "mm-active" : ""}`} to="/course-reports">Course Reports</Link></li>
					<li><Link className={`${path === "group-reports" ? "mm-active" : ""}`} to="/group-reports">Group Reports</Link></li>
					<li><Link className={`${path === "scorm-reports" ? "mm-active" : ""}`} to="/scorm-reports">Scorm Reports</Link></li>
					<li><Link className={`${path === "test-reports" ? "mm-active" : ""}`} to="/test-reports">Test Reports</Link></li>
					<li><Link className={`${path === "survey-reports" ? "mm-active" : ""}`} to="/survey-reports">Survey Reports</Link></li>
					<li><Link className={`${path === "assign-reports" ? "mm-active" : ""}`} to="/assign-reports">Assignment Reports</Link></li>
					<li><Link className={`${path === "ilt-reports" ? "mm-active" : ""}`} to="/ilt-reports">ILT Reports</Link></li>
					<li><Link className={`${path === "custom-reports" ? "mm-active" : ""}`} to="/custom-reports">Custom Reports</Link></li>
					<li><Link className={`${path === "infographics" ? "mm-active" : ""}`} to="/infographics">Infographics</Link></li>
				</ul>
			</li>
			<li className={`${accountsettings.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-gear-fill"></i> <span className="nav-text">Account & Setting</span></Link>
				<ul>
					<li><Link className={`${path === "basic-settings" ? "mm-active" : ""}`} to="/basic-settings">Basic Settings</Link></li>
					<li><Link className={`${path === "certificates" ? "mm-active" : ""}`} to="/certificates">Certificates</Link></li>
					<li><Link className={`${path === "domains" ? "mm-active" : ""}`} to="/domains">Domain</Link></li>
					<li><Link className={`${path === "ecommerce" ? "mm-active" : ""}`} to="/ecommerce">E-commerce</Link></li>
					<li><Link className={`${path === "gamification" ? "mm-active" : ""}`} to="/gamification">Gamifications</Link></li>
					<li><Link className={`${path === "subscriptions" ? "mm-active" : ""}`} to="/subscriptions">Subscription</Link></li>
					<li><Link className={`${path === "themes-page" ? "mm-active" : ""}`} to="/themes-page">Themes</Link></li>
					<li><Link className={`${path === "user-settings" ? "mm-active" : ""}`} to="/user-settings">Users Settings</Link></li>
				</ul>
			</li>
			<li className={`${trainings.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-people"></i> <span className="nav-text">Trainings</span></Link>
				<ul>
					<li><Link className={`${path === "classroom" ? "mm-active" : ""}`} to="/classroom">Classroom Training</Link></li>
					<li><Link className={`${path === "conference" ? "mm-active" : ""}`} to="/conference">Conference</Link></li>
					<li><Link className={`${path === "virtual-training" ? "mm-active" : ""}`} to="/virtual-training">Virtual Trainings</Link></li>
					<li><Link className={`${path === "add-classroom" ? "mm-active" : ""}`} to="/add-classroom">Add Classroom</Link></li>
					<li><Link className={`${path === "add-conference" ? "mm-active" : ""}`} to="/add-conference">Add Conference</Link></li>
					<li><Link className={`${path === "add-virtual-trainings" ? "mm-active" : ""}`} to="/add-virtual-trainings">Add Virtual Trainings</Link></li>
				</ul>
			</li>
			<li className={`${calender.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-calendar3"></i> <span className="nav-text">Calender</span></Link>
				<ul>
					<li><Link className={`${path === "calender" ? "mm-active" : ""}`} to="/calender">Calender</Link></li>
					<li><Link className={`${path === "add-c-event" ? "mm-active" : ""}`} to="/add-c-event">Add Event</Link></li>
				</ul>
			</li>
			<li className={`${discussions.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#"> <i className="bi bi-chat-quote-fill"></i> <span className="nav-text">Discussions</span></Link>
				<ul>
					<li><Link className={`${path === "discussion" ? "mm-active" : ""}`} to="/discussion">Discussion</Link></li>
					<li><Link className={`${path === "add-discussion" ? "mm-active" : ""}`} to="/add-discussion">Add Discussion</Link></li>
				</ul>
			</li>
			<li className={`${app.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow ai-icon" to="#" >
					<i className="bi bi-info-circle"></i>
					<span className="nav-text">Apps</span>
				</Link>
				<ul>
					<li><Link className={`${path === "app-profile" ? "mm-active" : ""}`} to="/app-profile">Profile</Link></li>
					<li><Link className={`${path === "post-details" ? "mm-active" : ""}`} to="/post-details">Post Details</Link></li>
					<li className={`${email.includes(path) ? "mm-active" : ""}`}><Link className="has-arrow" to="#" >Email</Link>
						<ul  className={`${email.includes(path) ? "mm-show" : ""}`}>
						  <li><Link className={`${ path === "email-compose" ? "mm-active" : ""}`} to="/email-compose">Compose</Link></li>
						  <li><Link className={`${path === "email-inbox" ? "mm-active" : ""}`} to="/email-inbox">Inbox</Link></li>
						  <li><Link className={`${path === "email-read" ? "mm-active" : ""}`} to="/email-read">Read</Link></li>
						</ul>
					</li>
					<li><Link className={`${path === "app-calender" ? "mm-active" : ""}`}to="/app-calender">Calendar</Link></li>
					<li className={`${shop.includes(path) ? "mm-active" : ""}`}><Link className="has-arrow" to="#" >Shop</Link>
						<ul className={`${shop.includes(path) ? "mm-show" : ""}`}>
							<li><Link className={`${ path === "ecom-product-grid" ? "mm-active" : ""}`} to="/ecom-product-grid">Product Grid</Link></li>
							<li><Link className={`${ path === "ecom-product-list" ? "mm-active" : ""}`} to="/ecom-product-list">Product List</Link></li>
							<li><Link className={`${ path === "ecom-product-detail" ? "mm-active" : "" }`} to="/ecom-product-detail">Product Details</Link></li>
							<li><Link className={`${ path === "ecom-product-order" ? "mm-active" : "" }`} to="/ecom-product-order">Order</Link></li>
							<li><Link className={`${ path === "ecom-checkout" ? "mm-active" : ""}`} to="/ecom-checkout">Checkout</Link></li>
							<li><Link className={`${ path === "ecom-invoice" ? "mm-active" : "" }`} to="/ecom-invoice">Invoice</Link></li>
							<li><Link className={`${ path === "ecom-customers" ? "mm-active" : "" }`} to="/ecom-customers">Customers</Link></li>
						</ul>
					</li>
				</ul>
			</li>
			<li className={`${charts.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow ai-icon" to="#" >
					<i className="bi bi-pie-chart"></i>
					<span className="nav-text">Charts</span>
				</Link>
				<ul>
					<li><Link className={`${path === "chart-rechart" ? "mm-active" : ""}`} to="/chart-rechart">RechartJs</Link></li>
					<li><Link className={`${path === "chart-chartjs" ? "mm-active" : ""}`} to="/chart-chartjs">Chartjs</Link></li>
					<li><Link className={`${path === "chart-chartist" ? "mm-active" : ""}`} to="/chart-chartist">Chartist</Link></li>
					<li><Link className={`${path === "chart-sparkline" ? "mm-active" : ""}`} to="/chart-sparkline">Sparkline</Link></li>
					<li><Link className={`${path === "chart-apexchart" ? "mm-active" : ""}`} to="/chart-apexchart" >Apexchart</Link></li>
				</ul>
			</li>
			<li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow ai-icon" to="#" >
					<i className="bi bi-star"></i>
					<span className="nav-text">Bootstrap</span>
				</Link>
				<ul >
					<li><Link className={`${path === "ui-accordion" ? "mm-active" : ""}`} to="/ui-accordion">Accordion</Link></li>
					<li><Link className={`${path === "ui-alert" ? "mm-active" : ""}`} to="/ui-alert"> Alert</Link></li>
					<li><Link className={`${path === "ui-badge" ? "mm-active" : ""}`} to="/ui-badge">Badge</Link></li>
					<li><Link className={`${path === "ui-button" ? "mm-active" : ""}`} to="/ui-button">Button</Link></li>
					<li><Link className={`${path === "ui-modal" ? "mm-active" : ""}`} to="/ui-modal">Modal</Link></li>
					<li><Link className={`${path === "ui-button-group" ? "mm-active" : ""}`} to="/ui-button-group">Button Group</Link></li>
					<li><Link className={`${path === "ui-list-group" ? "mm-active" : ""}`} to="/ui-list-group" >List Group</Link></li>
					<li><Link className={`${path === "ui-card" ? "mm-active" : ""}`} to="/ui-card">Cards</Link></li>
					<li><Link className={`${path === "ui-carousel" ? "mm-active" : ""}`} to="/ui-carousel">Carousel</Link></li>
					<li><Link className={`${path === "ui-dropdown" ? "mm-active" : ""}`} to="/ui-dropdown">Dropdown</Link></li>
					<li><Link className={`${path === "ui-popover" ? "mm-active" : ""}`} to="/ui-popover">Popover</Link></li>
					<li><Link className={`${path === "ui-progressbar" ? "mm-active" : ""}`} to="/ui-progressbar">Progressbar</Link></li>
					<li><Link className={`${path === "ui-tab" ? "mm-active" : ""}`} to="/ui-tab">Tab</Link></li>
					<li><Link className={`${path === "ui-typography" ? "mm-active" : ""}`} to="/ui-typography">Typography</Link></li>
					<li><Link className={`${path === "ui-pagination" ? "mm-active" : ""}`} to="/ui-pagination">Pagination</Link></li>
					<li><Link className={`${path === "ui-grid" ? "mm-active" : ""}`} to="/ui-grid">Grid</Link></li>
				</ul>
			</li>
			<li className={`${forms.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow ai-icon" to="#" >
					<i className="bi bi-file-earmark-check"></i>
					<span className="nav-text forms">Forms</span>
				</Link>
				<ul >
					<li><Link className={`${path === "form-element" ? "mm-active" : ""}`} to="/form-element">Form Elements</Link></li>
					<li><Link className={`${path === "form-wizard" ? "mm-active" : ""}`} to="/form-wizard"> Wizard</Link></li>
					<li>
						<Link className={`${path === "form-editor-summernote" ? "mm-active" : ""}`}to="/form-editor-summernote">
							Summernote
						</Link>
					</li>
					<li><Link className={`${path === "form-pickers" ? "mm-active" : ""}`} to="/form-pickers">Pickers</Link></li>
					<li>
						<Link className={`${path === "form-validation-jquery" ? "mm-active" : ""}`} to="/form-validation-jquery">
							Form Validate
						</Link>
					</li>
				</ul>
			</li>
			<li className={`${table.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow ai-icon" to="#" ><i className="bi bi-file-earmark-spreadsheet"></i><span className="nav-text">Table</span></Link>
				<ul>
					<li>
						<Link className={`${ path === "table-filtering" ? "mm-active" : "" }`} to="/table-filtering">
							Table Filtering
						</Link>
					</li>
					<li>
						<Link className={`${ path === "table-sorting" ? "mm-active" : "" }`} to="/table-sorting">
							Table Sorting
						</Link>
					</li>
					<li>
						<Link className={`${ path === "table-bootstrap-basic" ? "mm-active" : "" }`} to="/table-bootstrap-basic">
							Bootstrap
						</Link>
					</li>
					<li>
						<Link className={`${ path === "table-datatable-basic" ? "mm-active" : ""}`} to="/table-datatable-basic">
							Datatable
						</Link>
					</li>
				</ul>
			</li>
			<li className={`${pages.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow ai-icon" to="#" >
					<i className="bi bi-file-earmark-break"></i>
					<span className="nav-text">Pages</span>
				</Link>
				<ul>
					<li className={`${error.includes(path) ? "mm-active" : ""}`}>
						<Link className="has-arrow" to="#" >Error</Link>
						<ul>
							<li><Link className={`${ path === "page-error-400" ? "mm-active" : "" }`} to="/page-error-400">Error 400</Link></li>
							<li><Link className={`${ path === "page-error-403" ? "mm-active" : "" }`} to="/page-error-403">Error 403</Link></li>
							<li><Link className={`${ path === "page-error-404" ? "mm-active" : "" }`} to="/page-error-404">Error 404</Link></li>
							<li><Link className={`${ path === "page-error-500" ? "mm-active" : "" }`} to="/page-error-500">Error 500</Link></li>
							<li><Link className={`${ path === "page-error-503" ? "mm-active" : "" }`} to="/page-error-503">Error 503</Link></li>
						</ul>
					</li>
					<li><Link className={`${path === "page-lock-screen" ? "mm-active" : ""}`} to="/page-lock-screen">Lock Screen</Link></li>
				</ul>
			</li> */}
        </MM>
			<div className="">

			</div>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<div className="copyright">
				<p><strong>EON Learnings Online App </strong> © 2023 All Rights Reserved</p>
				<p className="fs-12">Made with <span className="heart"></span></p>
			</div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
