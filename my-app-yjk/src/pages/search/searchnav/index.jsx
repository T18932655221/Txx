import React from "react"
import SearchInput from "../../../components/SearchInput"
import "./index.less"
export default class Searchnav extends React.Component {
    onClickFindnav(){
        window.history.back();
    }
    render() {
        return (
            <div className="Searchnav" >
               <i className="iconfont Findnavl" onClick={this.onClickFindnav}>&#xe682;</i>
                <div  className="Searchnavinput" >
                    <SearchInput />
                </div>
            </div>
        )
    }
}