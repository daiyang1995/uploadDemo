/**
 * http://usejsdoc.org/

 */
'use strict';
var fs = require('fs');
function uploadTool() {
}
uploadTool.uploadSingle = (req) =>{
    let json = {};
    if(req.files.file.length){
        json.ret = "-1";
        json.msg = "只允许上传一张图片";
        return json;
    }
    let path = req.files.file.path;
    let type = req.files.file.type;
    let data = fs.readFileSync("./"+path);
    data = new Buffer(data).toString('base64');
    data ="data:"+type+";base64,"  +data;
    json.imgBase64 = data;
    return json;
};
uploadTool.uploadBatch = (req) =>{
    var array = [];
    if(req.files.file.length){
        for(let i = 0 ; i < req.files.file.length ; i++){
            let path = req.files.file[i].path;
            let type = req.files.file[i].type;
            let data = fs.readFileSync("./"+path);
            data = new Buffer(data).toString('base64');
            data ="data:"+type+";base64,"  +data;
            array[i] = data;
            // req.body.imgBase64[i] = data;
        }
    }else{
        let path = req.files.file.path;
        let type = req.files.file.type;
        let data = fs.readFileSync("./"+path);
        data = new Buffer(data).toString('base64');
        data ="data:"+type+";base64,"  +data;
        array[0] = data;
    }
    let json = {};
    json.imgBase64 = array;
    return json;
};
module.exports = uploadTool;