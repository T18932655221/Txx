import React from "react"
import "./index.less"
export default class Item extends React.Component {
    render() {
        const data = this.props.data
        return (
            <div className="collectItem">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                商品编号:
                            <span>{item.id}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}