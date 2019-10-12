import React from "react"
import api from "../../../api/index"
import Homehotlist from "./homehotlist"
import { NavLink } from "react-router-dom"
import "./index.less"
export default class Homehot extends React.Component {
    constructor() {
        super()
        this.state = {
            homedata: []
        }
    }
    componentDidMount() {
        api.getHomehot()
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data)
                this.setState({
                    homedata: data
                })
            })
    }
    render() {
        const { homedata } = this.state
        return (
            <div className="HomeHot">
                <div className="HomeHot-top">
                    <NavLink to="/findroommate">
                        <span>找 室 友</span>
                    </NavLink>
                    <NavLink to="/shop">
                        <span>宜居社区</span>
                    </NavLink>
                </div>
                <div className="HomeHot-bottom">
                    <h5>热门房源</h5>
                    {
                        homedata.map((item) => {
                            return <Homehotlist data={item} key={item.id} />
                        })
                    }
                </div>
            </div>
        )
    }
}