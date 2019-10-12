import React from "react"
import BottomNav from "../../components/bottomnav/index"
import Minenav from "./minenav"
export default class Mine extends React.Component{
    render(){
        return(
            <div>
                <Minenav/>
                <BottomNav />
            </div>
        )
    }
}