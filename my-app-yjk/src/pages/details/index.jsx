import React from "react"
import Findnav from "../../components/findnav"
import Detailsinfo from "./detailsinfo"

export default class Details extends React.Component{
    render(){
        return(
            <div>
                <Findnav tit="详情页"/>
                <Detailsinfo id={this.props.match.params.id}/>
            </div>
        )
    }
}
