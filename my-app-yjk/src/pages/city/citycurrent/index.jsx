import React from "react"
import "./index.less"
export default class Citycurrent extends React.Component{
    render(){
        return(
            <div className="Citycurrent">
                <h3>当前城市：{this.props.cityname}</h3>
            </div>
        )
    }
}