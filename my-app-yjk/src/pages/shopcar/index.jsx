import React from "react"
import ShopCarNav from "../../components/findnav"
import { connect } from "react-redux"
import ShopCarUser from "./shopcaruser"
import ShopCarList from "./shopcarlist"
class ShopCar extends React.Component{
     componentWillMount(){
         if(!this.props.login.username){
            this.props.history.push("/setlogin")
         }
     }
    render(){
        return(
            <div>
                <ShopCarNav tit="购物车"/>
                <ShopCarUser username={this.props.login.username} city={this.props.city.cityname}/>
                <ShopCarList username={this.props.login.username}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        login:state.login,
        city:state.city
    }

}
export default connect(mapStateToProps)(ShopCar)




// import React, { useState, useEffect } from "react"
// import ShopCarNav from "../../components/findnav"
// import { connect } from "react-redux"
// import ShopCarUser from "./shopcaruser"
// import ShopCarList from "./shopcarlist"

// const ShopCar = function () {
//     useEffect(() => {
//         if (!this.props.login.username) {
//             this.props.history.push("/setlogin")
//         }
//     })
//     return (
//         <div>
//             <ShopCarNav tit="购物车" />
//             <ShopCarUser username={this.props.login.username} city={this.props.city.cityname} />
//             <ShopCarList username={this.props.login.username} />
//         </div>
//     )
// }
// function mapStateToProps(state) {
//     return {
//         login: state.login,
//         city: state.city
//     }
// export default connect(mapStateToProps)(ShopCar)