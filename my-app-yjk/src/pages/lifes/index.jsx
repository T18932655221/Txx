import React from "react"
import BottomNav from "../../components/bottomnav/index"
import Lifenav from "./lifenav" 
import Lifelist from "./lifelist"
import "./index.less"
export default class Life extends React.Component{
    render(){
        return(
            <div className="Life">
                <Lifenav tit="生活服务"/>
                <Lifelist />
                <BottomNav />
            </div>
        )
    }
}