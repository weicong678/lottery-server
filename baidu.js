var AipOcrClient = require("baidu-aip-sdk").ocr;
var fs = require('fs');

// 设置APPID/AK/SK
var APP_ID = '15984011';
var API_KEY = '5R3nyMyHXAr9zQ7ZzlLps93I';
var SECRET_KEY = 'NPLjxS66W482gX9dY0ybFoW5ZnAgp1X1';

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

function transform (filePath){

    return new Promise((resolve, reject)=>{

        var image = fs.readFileSync("./uploads/"+ filePath).toString("base64");

        // 调用通用文字识别, 图片参数为本地图片
        client.generalBasic(image).then(function(result) {

            resolve(result)
            console.log(JSON.stringify(result));
        }).catch(function(err) {
            // 如果发生网络错误
            reject(err)
            console.log(err);
        });

    })

}



module.exports = transform

// // 如果有可选参数
// var options = {};
// options["language_type"] = "CHN_ENG";
// options["detect_direction"] = "true";
// options["detect_language"] = "true";
// options["probability"] = "true";

// // 带参数调用通用文字识别, 图片参数为本地图片
// client.generalBasic(image, options).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });;
