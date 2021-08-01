import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ColorizeIcon from "@material-ui/icons/Colorize";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link-doj">
              <li className="sidebarListItem active">
                <DashboardIcon className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Sales
            </li>
            <Link to="/orders" className="link-doj">
              <li className="sidebarListItem">
                <LocalHospitalIcon className="sidebarIcon" />
                Orders
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/addfood" className="link-doj">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Add Food
              </li>
            </Link>
            <Link to="/restaurants" className="link-doj">
              <li className="sidebarListItem">
                <ColorizeIcon className="sidebarIcon" />
                Restaurants
              </li>
            </Link>
            <Link to="/category" className="link-doj">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Category
              </li>
            </Link>
            <Link to="#" className="link-doj collapsed" data-toggle="collapse" data-target="#collapsseProducts" aria-expanded="false">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Products
                <div className="sb-sidenav-collapse-arrow"><i className=" ml-3 fas fa-angle-down"></i></div>
              </li>
            </Link>
            <div className="collapse" id="collapsseProducts" aria-labelledby="HeadingOne" data-parent="sidenavAccordion">
              <nav className="sb-sidenav-menu-nested d-flex flex-column">
                <Link className="pl-5 link-doj" to="/addfood">Add Food</Link>
                <Link className="pl-5 link-doj" to="/viewfood">Show food</Link>
              </nav>
            </div>

            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
