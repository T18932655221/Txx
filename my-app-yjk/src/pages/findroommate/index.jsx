import React from "react"
import Findnav from "../../components/findnav"
import Findlist from "./findlist"
import api from "../../api/index"
import img1 from "../../static/images/find.jpg"
import "./index.less"
export default class Findroommate extends React.Component {
    constructor() {
        super()
        this.state = {
            finddata: []
        }
    }
    componentDidMount() {
        api.getFind()
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    finddata: data
                })
            })
    }
    render() {
        const { finddata } = this.state
        return (
            <div className="Findroommate">
                <Findnav tit="找室友" />
                <div className="Findroommateimg">
                    <img src={img1} alt="" />
                </div>
                {
                    finddata.map(item => {
                        return (
                            <Findlist data={item} key={item.id}/>
                        )
                    })
                }

            </div>
        )
    }
}