import React from "react"
import "./index.less"
import imgbanner from "../../../static/images/img_banner.png"
import img_baojie from "../../../static/images/img_baojie.png"
import img_banjia from "../../../static/images/img_banjia.png"
import img_jiaxiu from "../../../static/images/img_jiaxiu.png"
import img_richang from "../../../static/images/img_richang.png"
import img_yijubanjai from "../../../static/images/img_yijubanjai.png"
import img_chongzhika from "../../../static/images/img_chongzhika.png"
import img_chuman from "../../../static/images/img_chuman.png"

export default class Lifelist extends React.Component {
    render() {
        return (
            <div className="Lifelist">
                <img src={imgbanner} alt="" />
                <h5>生活缴费</h5>
                <div className="Lifelistlife">
                    <div>
                        <i className="iconfont font1">&#xe615;</i>
                        <span>水费</span>
                    </div>
                    <div>
                        <i className="iconfont font2">&#xe673;</i>
                        <span>电费</span>
                    </div>
                    <div>
                        <i className="iconfont font3">&#xe62b;</i>
                        <span>网费</span>
                    </div>
                    <div>
                        <i className="iconfont font4">&#xe617;</i>
                        <span>更多</span>
                    </div>
                </div>
                <div className="Lifelistlife2">
                    <div>
                        <img src={img_baojie} alt="" />
                        <span>保洁</span>
                    </div>
                    <div>
                        <img src={img_banjia} alt="" />
                        <span>搬家</span>
                    </div>
                    <div>
                        <img src={img_jiaxiu} alt="" />
                        <span>家修</span>
                    </div>
                </div>
                <h5>热门推荐
                    <span>
                        为您提供最优质的服务，享受生活的每一天
                    </span>
                </h5>
                <div className="Lifelistlifehot">
                    <div>
                    <img src={img_richang} alt="" />
                        <span>日常保洁</span>
                    </div>
                    <div>
                    <img src={img_chuman} alt="" />
                        <span>除螨保洁</span>
                    </div>
                    <div>
                    <img src={img_yijubanjai} alt="" />
                        <span>易居搬家</span>
                    </div>
                    <div>
                    <img src={img_chongzhika} alt="" />
                        <span>充值卡优惠</span>
                    </div>
                </div>
            </div>
        )
    }
}