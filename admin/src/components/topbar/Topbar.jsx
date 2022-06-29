import { Badge } from '@material-ui/core'
import { Language, Notifications, Settings } from '@material-ui/icons'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../context/authContext/AuthActions'
import { AuthContext } from '../../context/authContext/AuthContext'
import './Topbar.css'

const Topbar = () => {
    const { dispatch } = useContext(AuthContext)

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/" exact className="topbarLink">
                        <span className="logo">stideadmin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Badge badgeContent={2} color="error">
                            <Notifications />
                        </Badge>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://i.ibb.co/vqK85Jp/Screenshot-5.jpg" alt="" className="avatar" />
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Topbar
