import React from "react"
import { NavLink } from "react-router-dom";

import "./index.less"
export default class BottomNav extends React.Component{
    render(){
        return(
            <div className="bottomnav">
                <ul>
                    <li>
                        <NavLink to='/'>
                        <i className="iconfont">&#xe66c;</i>
                        首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop'>
                        <i className="iconfont">&#xe72b;</i>
                        商城
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/life'>
                        <i className="iconfont">&#xe6a1;</i>
                        生活服务
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/mine'>
                        <i className="iconfont">&#xe67a;</i>
                        我的
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}