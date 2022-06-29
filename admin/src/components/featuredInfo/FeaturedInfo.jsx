import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./FeaturedInfo.css"

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">New Users</span>
                <div className="featuredStatsContainer">
                    <span className="featuredStats">9</span>
                    <span className="featuredStatsRate">+7 <ArrowUpward className="featuredIcon" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Watch Time</span>
                <div className="featuredStatsContainer">
                    <span className="featuredStats">89.4 hours</span>
                    <span className="featuredStatsRate">-11.4 hours <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Movies and Series</span>
                <div className="featuredStatsContainer">
                    <span className="featuredStats">15</span>
                    <span className="featuredStatsRate">6 <ArrowUpward className="featuredIcon" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
