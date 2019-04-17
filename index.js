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

// SSL

var options = {
    key: fs.readFileSync('./vip_nginx/vip.key'),
    cert: fs.readFileSync('./vip_nginx/vip.pem')
}

app.use(koaStaticCache(__dirname + '/static', {
    prefix: '/',
    maxAge: 0,
    gzip: true
}))

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
   
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(80);

https.createServer(options, app.callback()).listen(443);