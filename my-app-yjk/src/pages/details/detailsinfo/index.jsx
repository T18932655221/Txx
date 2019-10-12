import React from "react"
import api from "../../../api"
import Swiper from "../../../components/swiper"
import Detailsinfoview from "../detailsinfoview"
export default class Detailsinfo extends React.Component{
    constructor(){
        super()
        this.state={
            detailsImgs:[],
            detailsdata:{}
        }
    }
    componentDidMount(){
        const id=this.props.id
        api.getDetails(id)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            this.setState({
                detailsImgs:data.imgs,
                detailsdata:data
            })
        })
    }
    render(){
        const {detailsImgs,detailsdata}=this.state
        return(
            <div>
                {
                    detailsImgs.length>0?
                    <Swiper banners={detailsImgs}/>:
                    <div>您期待的画面暂未出现</div>
                }
                {
                    detailsdata.title?
                    <Detailsinfoview data={detailsdata} id={this.props.id}/>:
                    <div>您期待的画面暂未出现</div>
                }
               
            </div>
        )
    }
}