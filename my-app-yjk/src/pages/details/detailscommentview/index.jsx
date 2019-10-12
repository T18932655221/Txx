import React from "react"
import Item from "./item"
export default class Detailscommentview extends React.Component{
    render(){
        const data=this.props.data
        // console.log(data);
        return(
            <div className="comment-list">
               {
                   data.map((item,index)=>{
                       return <Item key={index} data={item}/>
                   })
                   
               }
            </div>
        )
    }
}
