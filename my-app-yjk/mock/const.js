const sql=require('mysql')

const config={
    host:'localhost',
    user:'root',
    password:'',
    database:'dote'
}
const client = sql.createConnection(config)
module.exports=function(sql,params,callback){
    client.query(sql,params,function(error,result){
        if(error){
            console.log('数据库操作失败')
        }else{
            callback(result)
        }
    })
}