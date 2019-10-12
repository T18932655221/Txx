import React from "react"
import "./index.less"
export default class ShopCarUser extends React.Component {
    render() {
        return (
            <div className="ShopCarUser">
                <div>
                    <i className="iconfont">&#xe630;</i>
                    <span>{this.props.city}</span>
                </div>
                <div>
                    <i className="iconfont">&#xe67a;</i>
                    <span>{this.props.username}</span>
                </div>
            </div>
        )
    }
}