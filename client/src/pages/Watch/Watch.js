import { ArrowBackOutlined } from '@material-ui/icons'
import './Watch.scss'
import { Link, useLocation } from 'react-router-dom'

const Watch = () => {
    const location = useLocation();
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            <video
                className="video"
                autoplay
                progress
                controls
                src={location.movie.video} />
        </div>
    )
}

export default Watch
