import React from "react"
import CollectNav from "../../components/findnav"
import { connect } from "react-redux"
import Item from "./item"
class Collect extends React.Component{
    componentWillMount(){
        if(!this.props.login.username){
           this.props.history.push("/setlogin")
        }
    }
    render(){
        console.log(this.props.collect.collect);
        const collectArr=this.props.collect.collect
        return(
            <div>
                <CollectNav tit="收藏页面"/>
                {
                    collectArr.length>0?
                    <Item data={collectArr}/>
                    :
                   <div>暂无收藏信息</div>
                }
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        login:state.login,
        collect:state
    }
        
}
export default connect(mapStateToProps)(Collect)