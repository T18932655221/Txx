// import React from "react"
// import api from "../../../api"
// import ShopCarListView from "../shopcarlistview"
// export default class ShopCarList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             orders: []
//         }
//     }
//     componentDidMount() {
//         const user = this.props.username
//         api.getShopcar(user)
//             .then(res => res.json())
//             .then(data => {
//                 // console.log(data);
//                 this.setState({
//                     orders: data
//                 })
//             })
//     }
//     render() {
//         return (
//             <div>
//                 <ShopCarListView orders={this.state.orders}/>
//             </div>
//         )
//     }
// }

import React, { useState, useEffect } from "react"
import api from "../../../api"
import ShopCarListView from "../shopcarlistview"
export default function ShopCarList({ username }) {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        let flag = true;
        api.getShopcar(username)
            .then(res => res.json())
            .then(data => {
                if (flag) {
                    setOrder(data)
                }

            })
        return function clearAsync() {
            // 清除网络请求
            flag = false;
        }
    })
    return (
        <div>
            <ShopCarListView orders={orders} />
        </div>
    )

}