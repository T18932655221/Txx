import React from "react"
import Tabs from "../../../components/tabs"
import Detailscomment from "../detailscomment"
import DetailsBuyStore from "../detailsbuystore"
import "./index.less"
export default class Detailsinfoview extends React.Component{
    render(){
        const data=this.props.data
        const id=this.props.id
        return(
            <div>
                <Tabs defaultActiveKey="1">
                    <div tab="房屋信息" key="1">
                        <div className="detail-info">
                            <h3>{data.title}</h3>
                            <div className="box">
                                <ul>
                                    <li>
                                        <span>{data.price}/月</span>
                                        <p>租金</p>
                                    </li>
                                    <li>
                                        <span>{data.info.type}/月</span>
                                        <p>房型</p>
                                    </li>
                                    <li>
                                        <span>{data.houseType}</span>
                                        <p>面积</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="info">
                                <div className="info-list">
                                    <p>楼层：{data.info.level}</p>
                                    <p>装修：{data.info.style}</p>
                                </div>
                                <div className="info-list">
                                    <p>类型：{data.info.type}</p>
                                    <p>朝向：{data.info.orientation}</p>
                                </div>
                                <div className="info-list">
                                    <p>年代：{data.info.years}</p>
                                </div>
                            </div>
                        </div>
                        {/* 收藏与购买 */}
                        <DetailsBuyStore id={id }/>
                    </div>
                    <div tab="房屋评价" key="2">
                        <Detailscomment id={ id }/>
                    </div>
                </Tabs>
            </div>
        )
    }
}
