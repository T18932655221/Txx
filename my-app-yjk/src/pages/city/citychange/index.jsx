import React from "react"
import "./index.less"
export default class Citychange extends React.Component{
    clickCitychange(e){
        console.log(e.item);
        this.props.onChangeCity(e.item);
    }
    render(){
        const citydata=this.props.citydata;
        return(
            <div className="Citychange">
                <h3>热门城市</h3>
                <ul>
                    {
                       citydata.map((item,index)=>{
                            return(
                                <li key={index} onClick={(e)=>this.clickCitychange({item},e)}>
                                    <span>{item}</span>
                                </li>
                            )
                       }) 
                    }
                </ul>
            </div>
        )
    }
}