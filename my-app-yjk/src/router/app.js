import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "../pages/Layout"
import Home from "../pages/home"
import Shop from "../pages/shop"
import Mine from "../pages/mine"
import Life from "../pages/lifes"
import Findroommate from "../pages/findroommate"
import City from "../pages/city"
import Search from "../pages/search"
import Details from "../pages/details"
import Set from "../pages/set"
import Collect from "../pages/collect"
import ShopCar from "../pages/shopcar"
import Setlogin from "../pages/set/setlogin"
import Setregister from "../pages/set/setregister"
export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Layout path="/">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/shop" component={Shop}></Route>
                        <Route path="/mine" component={Mine}></Route>
                        <Route path="/life" component={Life}></Route>
                        <Route path="/findroommate" component={Findroommate}></Route>
                        <Route path="/city" component={City}></Route>
                        <Route path="/set" component={Set}></Route>
                        <Route path="/setregister" component={Setregister}></Route>
                        <Route path="/setlogin" component={Setlogin}></Route>
                        <Route path="/collect" component={Collect}></Route>
                        <Route path="/shopcar" component={ShopCar}></Route>
                        <Route path="/details/:id" component={Details}></Route>
                        <Route path="/search/:keywords" component={Search}></Route>
                    </Switch>
                </Layout>
            </HashRouter>
        )
    }
}