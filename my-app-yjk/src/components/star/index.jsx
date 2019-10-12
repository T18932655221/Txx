import React from 'react'
import './style.less'

export default class Star extends React.Component {

    render() {
        let star = this.props.star;
        if (star >= 5) {
            star = 5;
        }
        return (
            <div className="star-container">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    // star 是参数 = 3
                    let lightClass = star >= item ? ' light' : ''
                    return <i key={index} className={'iconfont' + lightClass}>&#xe67a;</i>
                })}
            </div>
        )
    }
}

