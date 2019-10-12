import React from "react"
import { Link } from "react-router-dom"
import SearchInput from "../SearchInput"
import "./index.less"

class Topnav extends React.Component {

    render() {
        return (
            <div className="HomeTop">
                <Link className="HomeTop-lef" to="/city">
                    <span className="HomeTop-lefsp">{this.props.cityname} ∨</span>
                </Link>
                <div className="HomeTop-cent">
                    <i className="iconfont">&#xe720;</i>
                    <SearchInput />
                </div>
                <div className="HomeTop-rigt">
                    <Link to="/shopcar">
                        <i className="iconfont">&#xe78f;</i>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Topnav