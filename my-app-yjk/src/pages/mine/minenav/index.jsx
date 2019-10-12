import React from "react"
import imgT from "../../../static/images/20.png"
import { Link } from "react-router-dom"
import "./index.less"
export default class Minenav extends React.Component {
    render() {
        return (
            <div className="Minenavt">
                <div className="Minenav">
                    <i className="iconfont font1">&#xe64a;</i>
                    <img src={imgT} alt="" />
                    <Link to="/set">
                        <i className="iconfont font2" onClick={this.Changenick}>&#xe617;</i>
                    </Link>
                </div>
                <div className="Minelist">
                    <div className="Minelists listtop">
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe625;</i>
                            </div>
                            <p>优惠券</p>
                        </Link>
                        <Link to="/collect">
                            <div>
                                <i className="iconfont">&#xe757;</i>
                            </div>
                            <p>收藏</p>
                        </Link>
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe6ce;</i>
                            </div>
                            <p>约看</p>
                        </Link>
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe62c;</i>
                            </div>
                            <p>订单</p>
                        </Link>
                    </div>
                    <div className="Minelists">
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe654;</i>
                            </div>
                            <p>私人助理</p>
                        </Link>
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe64a;</i>
                            </div>
                            <p>微聊</p>
                        </Link>
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe683;</i>
                            </div>
                            <p>评价</p>
                        </Link>
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe62d;</i>
                            </div>
                            <p>投诉建议</p>
                        </Link>
                    </div>
                </div>
                <h5>宜居管家<span>宜居专享服务</span></h5>
                <div className="Mineli">
                    <div className="Minelis listtop">
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe618;</i>
                            </div>
                            <p>我的合同</p>
                        </Link>
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe65a;</i>
                            </div>
                            <p>转租</p>
                        </Link>
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe65d;</i>
                            </div>
                            <p>退租</p>
                        </Link>

                    </div>
                    <div className="Minelis">
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe612;</i>
                            </div>
                            <p>芝麻信用</p>
                        </Link>
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe64a;</i>
                            </div>
                            <p>续租</p>
                        </Link>
                        <Link to="/">
                            <div>
                                <i className="iconfont">&#xe62c;</i>
                            </div>
                            <p>账单</p>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
}