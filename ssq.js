const Koa = require('koa')
const Router = require('koa-router')
const koaStaticCache = require('koa-static-cache')
const mysql = require('mysql')
const MYSQL_CONFIG = require('./config/mysql_config')
const superagent = require('superagent')
const cheerio = require('cheerio')
const fs = require('fs')
const iconv = require('iconv-lite')
var charset = require("superagent-charset");

charset(superagent); //设置字符

var connection = mysql.createConnection(MYSQL_CONFIG)
connection.connect()

const app = new Koa()

/* 
    * http://kaijiang.500.com/shtml/ssq/13150.shtml
    * 第一期 2013年
    * 一年最多 156期
*/

const SSQ_URL = 'http://kaijiang.500.com/shtml/ssq';
const FIRS_YEAR = 03;
var requstData = {
    year: 19,
    num: 148
}

Task()
function Task(){
    var url = ToUrl(requstData.year, requstData.num)
    
    if(requstData.year > 19) {
        console.log('爬完了')
        return false
    }

    superagent.get(url).charset('gbk').then(res=>{
        
        var $=cheerio.load(res.text);
        var $reds =  $('.ball_red')
        var redArr = []
        var blue = $('.ball_blue').text()
        var number = $('.cfont2').text()
        var date = $('.span_right').text()
        if($reds) {
            $reds.each((index,item)=>{
                redArr.push($(item).text())
            }) 
            requstData.num+= 1
            Add({
                number,
                date: date.substring(date.indexOf('开奖日起：')+6, date.indexOf('兑奖截止日期')-2).replace(/[年月]/g, '-'),

                // 乱码了
                // date: date.substring(date.indexOf('开奖日起：')+6, date.indexOf('兑奖截止日期')-3).replace(/(骞�)|(鏈�)/g, '-'),
                redArr: redArr.toString(),
                blue
            })
            
        } else {
            requstData.year+=1
            requstData.num = 1
        }
        Task()
        
    }).catch((err)=>{
        requstData.year+=1
        requstData.num = 1
        Task()
    })
}
function ToUrl(year, num) {
    if(year<=9) {
        year =  '0' + year
    }
    if(num<=9) {
        num =  '00' + num
    } else if(num <=99 ){
        num = '0' + num
    }
    return SSQ_URL + '/' + year + num + '.shtml'
} 

// 写入mysql

function Add(obj){

    var  addSql = 'INSERT INTO ssq(id, number, date, red, blue) VALUES(0,?,?,?,?)';
    var  addSqlParams = [obj.number, obj.date, obj.redArr, obj.blue];
 
    //增
    connection.query(addSql,addSqlParams,function (err, result) {
            if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
            }        
    
        console.log(obj.date)
    });

}

// 写入本地text

// function Write(obj){
//     console.log(obj.date)
//     var data = `${obj.number} ${obj.date} ${obj.redArr} ${obj.blue}`
//     fs.writeFile('./test2.txt', data + '\n', { flag: 'a' }, function(err)  {
//         if (err) {
//             throw err;
//         }
//     });
// }
