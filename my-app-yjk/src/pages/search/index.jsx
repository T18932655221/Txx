import React from "react"
import Searchnav from "./searchnav"
import Searchlist from "./searchlist"
import "./index.less"
export default class Search extends React.Component {
    render() {
        return (
            <div className="Search">
                <Searchnav  keywords={ this.props.search }/>
                <Searchlist keyworks={ this.props.match.params.keywords }/>
            </div>
        )
    }
}