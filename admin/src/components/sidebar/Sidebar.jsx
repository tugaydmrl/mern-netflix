import { Add, ChatBubbleOutline, DynamicFeed, Home, List, MailOutline, PermIdentity, PlayCircleOutline, Report, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons'
import './Sidebar.css'
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/" className="link">
                                <Home className="sidebarIcon" />
                                Home
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/users" className="link">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/newuser" className="link">
                                <Add className="sidebarIcon" />
                                Add User
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/movies" className="link">
                                <PlayCircleOutline className="sidebarIcon" />
                                Movies
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/newmovie" className="link">
                                <Add className="sidebarIcon" />
                                Add Movie
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/lists" className="link">
                                <List className="sidebarIcon" />
                                Lists
                            </Link>
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
    )
}

export default Sidebar
