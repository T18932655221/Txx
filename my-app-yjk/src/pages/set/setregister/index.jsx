import React from "react"
import Findnav from "../../../components/findnav/index"
import api from "../../../api/index"
import "./index.less"
export default class Setregister extends React.Component {
    Setregisteruser() {
        // 用户名
        const Setregisterusername = document.getElementById("Setregisterusername").value
        // 密码
        const Setregisterpassword = document.getElementById("Setregisterpassword").value
        //确认密码
        const SetregisterpasswordZ = document.getElementById("SetregisterpasswordZ").value
        //判断两次输入的密码是否一致
        if (Setregisterpassword === SetregisterpasswordZ) {
            //注册
            api.getLogto({
                uname: Setregisterusername,
                password: Setregisterpassword
            })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    // 注册
                    alert("注册成功");
                })
                //返回
                window.history.back();
        }else{
            alert("密码不一致，请重新输入");
        }

        
    }
    render() {
        return (
            <div className="Setregister">
                <Findnav tit="注册" />
                <div className="Setregister-cont">
                    <input type="text" placeholder="用户名/邮箱/手机号" id="Setregisterusername" />
                    <input type="password" placeholder="密码" id="Setregisterpassword" />
                    <input type="password" placeholder="确认密码" id="SetregisterpasswordZ" />
                    <p>点击“注册”代表您已阅读并同意用户使用协议</p>
                    <button onClick={this.Setregisteruser}>注册</button>
                </div>
            </div>
        )
    }
}