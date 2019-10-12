import React from "react"

import { Link } from "react-router-dom"
import api from "../../../api/index"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as loginActions from "../../../actions/login"
import "./index.less"
class Setlogin extends React.Component {
    onClickFindnav() {
        window.history.back();
    }
    denglu=()=>{
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        api.getLogin({
            uname: username,
            password: password
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data.length > 0) {
                    //数据写入本地
                    // localStorage.setItem('nike', data[0].username)
                    /**
                    * 存储用户登陆信息redux
                    */
                    this.props.loginActions.login({
                    username: data[0].username
                    })
                    // 返回上一页
                    window.history.back();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="Setlogin">
                <div className="Setlogin-Top">
                    <i className="iconfont" onClick={this.onClickFindnav}>&#xe682;</i>
                    <h1>宜居</h1>
                </div>
                <div className="Setlogin-Center">
                    <input type="text" placeholder="用户名/手机号/邮箱" id="username" />
                    <input type="password" placeholder="密码" id="password" />
                    <button>忘记密码</button>
                    <button onClick={this.denglu}>登录</button>
                    <Link to="/setregister">注册</Link>
                </div>
                <div className="Setlogin-Right">
                    <div>
                        <p>第三方登录</p>
                        <span>QQ</span>
                        <span>微信</span>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(loginActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Setlogin)