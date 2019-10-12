import React from "react"
import Findnav from "../../../components/findnav/index"
import image from "../../../static/images/21.png"
import { connect }  from "react-redux"
import { bindActionCreators } from "redux"
import * as loginActions from "../../../actions/login"
import "./index.less"
class Setlogout extends React.Component {
    Outlogin=()=>{
        // // 删除本地数据
        // localStorage.removeItem('nike')
        this.props.loginActions.logto({
            username:null
        })

        window.history.back();
    }
    render() {
        return (
            <div className="Setlogout">
                <Findnav tit="个人设置" />
                <div className="Setlogout-cont">
                    <p>头像
                        <i className="iconfont">&#xe63e;</i>
                        <img src={image} alt=""/>
                    </p>
                    <p>昵称
                    <i className="iconfont">&#xe63e;</i>
                    <span>{this.props.User}</span>
                    </p>
                    <p>证件信息
                    <i className="iconfont">&#xe63e;</i>
                    </p>
                    <p>资质信息
                    <i className="iconfont">&#xe63e;</i>
                    </p>
                    <p>学历信息
                    <i className="iconfont">&#xe63e;</i>
                    </p>
                    <p>账号信息管理
                    <i className="iconfont">&#xe63e;</i>
                    </p>
                    <p>关于我们
                    <i className="iconfont">&#xe63e;</i>
                    </p>
                    <button onClick={this.Outlogin}>退出登录</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        login:state.login,
        collect:state.collect
    }
}

function mapDispatchToProps(dispatch){
    return{
        loginActions:bindActionCreators(loginActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Setlogout)