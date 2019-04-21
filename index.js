const Koa = require('koa')
const Router = require('koa-router')
const koaStaticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser')
const https = require('https')
const enforceHttps = require('koa-sslify').default
const fs = require('fs')
const query = require('./sql')
const redeem = require('./redeem')
const app = new Koa()
const router = new Router()
const cors = require('koa2-cors')

// SSL
var options = {
    key: fs.readFileSync('./vip_nginx/vip.key'),
    cert: fs.readFileSync('./vip_nginx/vip.pem')
}

app.use(koaStaticCache(__dirname + '/dist', {
    prefix: '/',
    maxAge: 0,
    gzip: true
}))

app.use(cors());
app.use(enforceHttps())
app.use(bodyParser())

// app.use( async (ctx) => {
//     ctx.body =  ctx.request.body
// })

// ssq
router
    .get('/ssq', async ctx => {
        var page = ctx.query.page ? ctx.query.page : 1
        const PER_PAGE = 50
        var  sql = `SELECT * FROM ssq ORDER BY id DESC LIMIT ${PER_PAGE} OFFSET ${PER_PAGE*(page-1)}`;
        var rows = await query(sql)

        ctx.body = {
            code: 0,
            msg: '请求成功',
            data: rows
        }
    })
    .post('/ssq/comparer', async ctx => {
        
        var red = ctx.request.body.red,
            blue = ctx.request.body.blue

        var sql = `SELECT * FROM ssq`
        var rows = await query(sql)
        var result = redeem(red, blue, rows)

        ctx.body = {
            code: 1,
            msg: 'success',
            data: result
        }
    })
    .post('/auth/login', async ctx => {
        console.log(1)
        ctx.body = { 'errno': 0, 'data': 'd76b0c86-051c-4567-85c8-ab8320c42168', 'errmsg': '成功' }
    })
    .get('/auth/info', async ctx => {
        ctx.body = { 'errno': 0, 'data': { 'roles': ['超级管理员'], 'name': 'admin123', 'perms': ['*'], 'avatar': 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif' }, 'errmsg': '成功' }
    })
   
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(80);

https.createServer(options, app.callback()).listen(443);