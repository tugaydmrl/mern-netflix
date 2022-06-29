import { Visibility } from "@material-ui/icons"
import { useEffect, useState } from "react"
import "./WidgetSm.css"
import axios from "axios"

const WidgetSm = () => {
    const [newUsers, setNewUsers] = useState([])

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzczMTlhZTZkM2EwMjM3OGE0ZjExOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTAxOTM4NCwiZXhwIjoxNjMxNDUxMzg0fQ.Y6bZ-fKC6Blf6E36-R6ATSyo41vhEogI9-8gcrcTXco"
                    }
                })
                setNewUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getNewUsers();
    }, [])

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((user) => (
                    <li className="widgetSmListItem">
                        <img src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSm
