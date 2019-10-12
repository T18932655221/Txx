import React from "react"
import "./index.less"
export default class Homehotlist extends React.Component{
    render(){
        const item=this.props.data
        return(
            <div className="Homehotlist">
                <img src={item.image} alt=""/>
                <div className="Homehotlist-point">
                    <div>
                        <p className="Homehotlist-point-p"><span>{item.area_name} 区</span><span>{item.block_name}{item.comm_name}</span></p>
                        <p className="Homehotlist-point-p">{item.room_num}室——{item.area_num}m²</p>
                    </div>
                    <div>
                        <p className="Homehotlist-point-p"><span className="Homehotlist-point-sp">{item.rent_type_name}</span></p>
                        <p className="Homehotlist-point-price">{item.price}/月</p>
                    </div>
                </div>
            </div>
        )
    }
}