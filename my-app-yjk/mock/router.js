const express = require("express");
const router=express.Router();
const Shopdata=require("./data/shopdata")
const Homedata=require("./data/homedata")
const Finddata=require("./data/findroommatedata")
const Citydata=require("./data/citydata")
const Searchdata=require("./data/searchdata")
const Detailsdata=require("./data/detailsdata")
const Commentdata=require("./data/commentdata")
const Shopcardata=require("./data/shopcardata")
const url=require("url")
const Fn=require("./const")

// 商城热销单品接口
router.get("/shophot1",function(req,res){
    res.send(Shopdata.hot1)
})

// 商城家庭常用接口
router.get("/shophot2",function(req,res){
    res.send(Shopdata.hot2)
})

// 首页热门房源接口
router.get("/homehot",function(req,res){
    res.send(Homedata.data)
})

//搜索页面接口
router.get("/search",function(req,res){
    let Keywords=url.parse(req.url,true).query.Keywords;
    console.log(Keywords)
    res.send(Searchdata)
})

//找室友数据接口
router.get("/find",function(req,res){
    res.send(Finddata.data)
})

//城市数据接口
router.get("/city",function(req,res){
    res.send(Citydata.data)
})

// 登录接口
router.post('/login',function(req,res){
    const sql = "select * from yjk where `username`=? and `password`=?";
    // 读取参数
    const username = req.body.uname;
    const password = req.body.password;
    const paramsArr = [username,password]
    Fn(sql,paramsArr,function(result){
        if(result.length>0){
            res.send(result);
        }else{
            res.send({
                msg:"查询失败,用户名密码不存在"
            })
        }
    })
})

// 注册接口
router.post("/logto",function(req,res){
    
    const sql = "insert into yjk values(null,?,?)";
    const username = req.body.uname;
    const password = req.body.password;
    const paramsArr = [username,password]
    Fn(sql,paramsArr,function(result){
        if(result.affectedRows > 0){
            res.send({
                msg:"注册成功"
            })
        }else{
            res.send({
                msg:"注册失败"
            })
        }
    })
})

// 详情数据
router.get("/details",function(req,res){
    let id=url.parse(req.url,true).query.id;
    console.log(id)
    res.send(Detailsdata)
})

// 房屋评价
router.get("/comment",function(req,res){
    let id=url.parse(req.url,true).query.id;
    console.log(id)
    res.send(Commentdata)
})
//购物车数据
router.get("/shopcar",function(req,res){
    let user=url.parse(req.url,true).query.user;
    console.log(user)
    res.send(Shopcardata)
})
//购物车用户评价
router.post("/feelback",function(req,res){
    const content=req.body.content
    if(content){
        res.send({
            msg:"评价成功"
        })
    }else{
        res.send({
            msg:"评价失败"
        })
    }
})
module.exports=router