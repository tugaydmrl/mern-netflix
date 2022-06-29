import "./WidgetLg.css"

const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest movies</h3>
            <table className="widgetLgTable">
                <tbody>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Movie</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">IMBD</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgMovie">
                            <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Avengers Endgame</span>
                        </td>
                        <td className="widgetLgDate">22 Apr 2019</td>
                        <td className="widgetLgImdb">8.4</td>
                        <td className="widgetLgStatus"><Button type="Published" /></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgMovie">
                            <img src="https://movies.universalpictures.com/media/nob-theatrical-fight-split-1-ondemandnow-en-us-716x1075-jpg-6087358a2c598-1.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Nobody</span>
                        </td>
                        <td className="widgetLgDate">26 Mar 2021</td>
                        <td className="widgetLgImdb">7.4</td>
                        <td className="widgetLgStatus"><Button type="Declined" /></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgMovie">
                            <img src="https://resizing.flixster.com/4MrL62heb7yBgBt8zllSeqNZxg4=/206x305/v2/https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Inception</span>
                        </td>
                        <td className="widgetLgDate">13 Jul 2010</td>
                        <td className="widgetLgImdb">8.8</td>
                        <td className="widgetLgStatus"><Button type="Pending" /></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgMovie">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/91ebheNmoUL._RI_.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">The Dark Knight</span>
                        </td>
                        <td className="widgetLgDate">18 Jul 2008</td>
                        <td className="widgetLgImdb">9.0</td>
                        <td className="widgetLgStatus"><Button type="Published" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLg