import React from "react"
import "./index.less"
export default class Findlist extends React.Component {
    render() {
        const data = this.props.data
        return (
            <div className="Findlist">
                <p>
                    <span className="Findliststate">{data.state}</span>
                    <span className="Findlisttitle">{data.title}</span>
                </p>
                <div className="FindlistT">
                    <img src={data.imageUrl} alt="图片加载失败" />
                </div>
                <div className="FindlistB">
                    <img src={data.potrait} alt="图片加载失败" title="博主头像" />
                    <span className="Findlistauthor">{data.author}</span>
                    <span className="Findlisttime">发布于：{data.time}</span>
                </div>
            </div>
        )
    }
}