import React from "react"
import Setlogin from "./setlogin"
import Setlogout from "./setlogout"
import { connect }  from "react-redux"
import { bindActionCreators } from "redux"
import * as collectActions from "../../actions/collect"
class Set extends React.Component{
    constructor() {
        super();
        this.state = {
            islog:false,
            nike: ''
        }
    }
    //数据写入本地
    // localStorage.setItem('nick', data[0].uname)
    // //生命周期函数渲染页面完成
    // // 删除本地数据
    // localStorage.removeItem('nick')
    componentWillMount=()=> {
        // 判断本地是否存在数据
        // if (localStorage.getItem("nike")) {
        //     this.setState({
        //         islog: true,
        //         nike: localStorage.getItem("nike")
        //     })
        // }
        if(this.props.login.username){
            this.setState({
                    islog: true,
                    nike: this.props.login.username
                })
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.islog?
                    <Setlogout User={this.state.nike}/>:
                    <Setlogin />
                }
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
        collectActions:bindActionCreators(collectActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Set)