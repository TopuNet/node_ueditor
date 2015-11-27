/*
 *@ malongjun
 *@ 20151109
 *@ 编辑器上传图片操作
 * 参考网站：http://www.xiaoboy.com/detail/1341545081.html
 *http://blog.netpi.me/nodejs/ueditor-nodejs/
 */
var express = require('express');
var router = express.Router();
var ueditor = require("ueditor");
var bodyParser = require('body-parser');
//fs为文件模块，path为系统路径模块。
var fs = require("fs");
var path = require('path');

router.get("/ueditor", ueditor(path.resolve('UploadFile/'), function (req, res, next) {
    // ueditor 客户发起上传图片请求
    if (req.query.action === 'uploadimage') {
        var foo = req.ueditor;
        var imgname = req.ueditor.filename;
        var img_url = '/ueditor/';
        //存放编辑器的图片
        var goalDirPath = path.resolve('UploadFile/ueditor');
        //没有ueditor 文件夹
        if (!fs.existsSync(goalDirPath)) {
            //新建
            fs.mkdirSync(goalDirPath);
        }
        //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.ue_up(img_url);
    }
        //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = '/ueditor/';
        // 客户端会列出 dir_url 目录下的所有图片
        res.ue_list(dir_url);
    }
        // 客户端发起其它请求
    else {
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/ueditor/nodejs/config.json');
    }
}));

router.post("/ueditor", ueditor(path.resolve('UploadFile/'), function (req, res, next) {
    // ueditor 客户发起上传图片请求
    if (req.query.action === 'uploadimage') {
        var foo = req.ueditor;
        var imgname = req.ueditor.filename;
        var img_url = '/ueditor/';
        //存放编辑器的图片
        var goalDirPath = path.resolve('UploadFile/ueditor');
        //没有ueditor 文件夹
        if (!fs.existsSync(goalDirPath)) {
            //新建
            fs.mkdirSync(goalDirPath);
        }
        //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.ue_up(img_url);

    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = '/ueditor/';
        // 客户端会列出 dir_url 目录下的所有图片
        res.ue_list(dir_url);
    }
        // 客户端发起其它请求
    else {
        //res.setHeader('Content-Type', 'application/json');
        //res.redirect('/ueditor/nodejs/config.json');
        res.send("客户端发起其它请求");
    }
}));

module.exports = router;






