import React from "react"

import { withRouter } from "react-router-dom"
import "./index.less"
class Findnav extends React.Component {
    onClickFindnav() {
        window.history.back();
    }
    render() {
        const { tit } = this.props
        return (
            <div className="Findnav">
                <i className="iconfont Findnavl" onClick={this.onClickFindnav}>&#xe682;</i>
                <span>{tit}</span>
                <i className="iconfont Findnavr">&#xe78f;</i>
            </div>
        )
    }
}

export default withRouter(Findnav)