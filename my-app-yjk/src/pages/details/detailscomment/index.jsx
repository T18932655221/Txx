import React from "react"
import api from "../../../api"
import Detailscommentview from "../detailscommentview"
import Loadmore from "../../../components/LoadMore"
import "./index.less"
export default class Detailscomment extends React.Component{
    constructor(){
        super()
        this.state={
            commentdata:[],
            hasMore:false
        }
    }
    componentDidMount(){
        const id=this.props.id
        this.http(id)
    }
    http(id){
        api.getComment(id)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            this.setState({
                commentdata:this.state.commentdata.concat(data.data), 
                hasMore:data.hasMore
            })
        })
    }
    LoadMoreHeader=()=>{
        const id=this.props.id
        this.http(id)
    }
    render(){
        const {commentdata,hasMore}=this.state
        return(
            <div className="Detailscomment">
                <h2>房屋评价</h2>
                {
                    commentdata.length>0?
                    <Detailscommentview data={commentdata}/>:
                    <div>您期待的数据正在赶来...</div>
                }
                {
                    hasMore?
                    <Loadmore onLoadMore={this.LoadMoreHeader}/>:
                    <div>没有数据啦</div>
                }
                
            </div>
        )
    }
}
