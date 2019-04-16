const Koa = require('koa')
const Router = require('koa-router')
const koaStaticCache = require('koa-static-cache')
const query = require('./sql')
const multer = require('koa-multer')
const baidu = require('./baidu')
const app = new Koa()
const router = new Router()


app.use(koaStaticCache(__dirname + '/static', {
    prefix: '/',
    maxAge: 0,
    gzip: true
}))

//文件上传
//配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
      var fileFormat = (file.originalname).split(".");
      cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({ storage: storage });
//路由
router
    .post('/upload', upload.single('file'), async (ctx, next) => {
        console.log(ctx.req.file)

        var data = await baidu(ctx.req.file.filename)
        console.log(typeof data, data.words_result)
        ctx.body = {
            data: data.words_result
        }
    })
    .get('/test', ctx=>{
        console.log(11)
        ctx.body = {
            data: '你好',
        
        }
    })     
  
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(8080);