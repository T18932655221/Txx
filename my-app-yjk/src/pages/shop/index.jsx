import React from "react"
import BottomNav from "../../components/bottomnav/index"
import Topnav from "../../components/topnav/index"
import Shophot from "./shophot"
import Shopfamily from "./shopfamily"
import Swiper from "../../components/swiper/index"
import { connect } from "react-redux"
import banner1 from "../../static/images/banner1.png"
import banner2 from "../../static/images/banner2.png"
import banner3 from "../../static/images/banner3.png"
 class Shop extends React.Component{
    render(){
        return(
            <div>
                <Topnav cityname={this.props.city.cityname}/>
                <Swiper banners={[banner1,banner2,banner3]}/>
                <Shophot />
                <Shopfamily />
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
)(Shop)