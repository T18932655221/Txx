import { httpGet,httpPost } from "../utils/http"
import base from "./base"

const api = {
    /**
     * 商城 热销产品
     */
    getShophot1(){
        return httpGet(base.baseUrl + base.shophot1);
    },
    /**
     * 商城 热门产品
     */
    getShophot2(){
        return httpGet(base.baseUrl + base.shophot2);
    },

    /** 
     * 首页  租房信息 
     * */ 
    getHomehot(){
        return httpGet(base.baseUrl + base.homehot);
    },
    /** 
     * 找室友 
     * */ 
    getFind(){
        return httpGet(base.baseUrl + base.find);
    },
    /** 
     * 城市信息
     * */ 
    getCity(){
        return httpGet(base.baseUrl + base.city);
    },
    /** 
     * 搜索信息
     * */ 
    getSearch(Keywords){
        return httpGet(base.baseUrl + base.search+"?keywords="+Keywords);
    },
    /**
     * 登陆接口
     */
    getLogin(params){
        return httpPost(base.baseUrl + base.login,params);
    },
    /**
     * 注册接口
     */
    getLogto(params){
        return httpPost(base.baseUrl + base.logto,params);
    },
    /**
     * 购物车评价
     */
    setFeelBack(params){
        return httpPost(base.baseUrl + base.feelback,params);
    },
    /**
     * 购物车信息
     */
    getShopcar(user){
        return httpGet(base.baseUrl + base.shopcar+"?user="+user);
    },
    /** 
     * 详情
     * */ 
    getDetails(id){
        return httpGet(base.baseUrl + base.details+"?id="+id);
    },
    /** 
     * 房屋评价
     * */ 
    getComment(id){
        return httpGet(base.baseUrl + base.comment+"?id="+id);
    },

}

export default api