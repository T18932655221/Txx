import React from "react"
import api from "../../../api/index"
import "./index.less"
export default class Shopfamily extends React.Component{
    constructor(){
        super();
        this.state = {
            shophot2Data:[]
        }
    }
    componentDidMount(){
        api.getShophot2()
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            this.setState({
                shophot2Data:data
            })
        })
    }
    render(){
        const {shophot2Data}= this.state ;
        return(
            <div className="homefamily">
                <h5>家庭常用</h5>
                <div className="homefamilybottom">
                   {
                       shophot2Data.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <img src={item.img} alt=""/>
                                    <span>{item.title}</span>
                                </div>
                            )
                       })
                   }
               </div>
            </div>
        )
    }
}