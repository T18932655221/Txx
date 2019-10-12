import React from "react"
import "./style.less"
import Star from "../../../../components/star"
export default class Item extends React.Component {
    render() {
        const item = this.props.data
        return (
            <div>
                <div className="comment-item">
                    <h3>
                        <i className="iconfont">&#xe67a;</i>
                        &nbsp;
                    {item.username}
                    </h3>
                    <Star star={ item.star }/>
                    <p>{item.comment}</p>
                </div>
            </div>
        )
    }
}