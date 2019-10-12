import React from "react" 

import {NavLink} from "react-router-dom"
import "./index.less"
export default class Lifenav extends React.Component{
    render(){
        const {tit}=this.props
        return(
            <div className="Lifenav">
                <NavLink to="/" className="Lifenavl">
                <i className="iconfont">&#xe630;</i>
                </NavLink>
                <span>{tit}</span>
                <NavLink to="/" className="Lifenavr">
                <i className="iconfont">&#xe78f;</i>
                </NavLink>
            </div>
        )
    }
}