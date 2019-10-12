import React from "react"
import api from "../../../api/index"
import "./index.less"
export default class Shophot extends React.Component{
    constructor(){
        super();
        this.state = {
            shophot1Data:[]
        }
    }
    componentDidMount(){
        api.getShophot1()
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            this.setState({
                shophot1Data:data
            })
        })
    }
    render(){
        const {shophot1Data}= this.state ;
        return(
            <div className="homehot">
               <div className="homehottop">
                   <span>新品上市</span>
                   <span>二手商城</span>
                   <h5>热销单品</h5>
               </div>
               <div className="homehotbottom">
                   {
                       shophot1Data.map((item,index)=>{
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