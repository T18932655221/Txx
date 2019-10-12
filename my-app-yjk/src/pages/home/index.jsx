import React from "react"
import BottomNav from "../../components/bottomnav/index"
import Swiper from "../../components/swiper"
import Topnav from "../../components/topnav/index"
import Homehot from "./homehot"
import { connect } from "react-redux"
import banner1 from "../../static/images/banner6.png"
import banner2 from "../../static/images/banner4.png"
import banner3 from "../../static/images/banner5.png"
 class Home extends React.Component{
    render(){
        return(
            
            <div>
                <Topnav cityname={this.props.city.cityname}/>
                <Swiper banners={[banner1,banner2,banner3]}/>
                <Homehot/>
                <BottomNav />
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        city:state.city
    }
}

export default connect(
    mapStateToProps
)(Home)