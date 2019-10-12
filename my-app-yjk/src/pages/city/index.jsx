import React from "react"
import Findnav from "../../components/findnav"
import Citycurrent from "./citycurrent"
import Citychange from "./citychange"
import api from "../../api"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as ctiyActions from "../../actions/city"
class City extends React.Component{
    constructor(){
        super()
        this.state={
            citydata:[]
        }
    }
     /**
     * 城市切换
     */
     changeHandler = (cityname) =>{
        this.props.ctiyActions.updateCity({
            cityname:cityname
        })

        // 返回首页
        window.history.back();
     }
    componentDidMount(){
        api.getCity()
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            this.setState({
                citydata:data
            })
        })
    }
    render(){
        return(
            <div>
                <Findnav tit="城市选择"/>
                <Citycurrent cityname={this.props.city.cityname}/>
                <Citychange citydata={this.state.citydata} onChangeCity={ this.changeHandler}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        city:state.city
    }
}
function mapDispatchToProps(dispatch){
    return{
        ctiyActions:bindActionCreators(ctiyActions,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)