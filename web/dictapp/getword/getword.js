var http = require('http');
var divide = require('./divide1')

exports.getAndDivide = function(req, res) {
    var options = {
        host: 'dict.youdao.com',
        port: 80,
        path: '/search?q=' + req.params.word
    };

    http.get(options, function(httpres) {
        // console.log("Got response: " + httpres.statusCode, httpres.headers);
        var buffers = [], size = 0;
        httpres.on('data', function(buffer) {
            buffers.push(buffer);
            size += buffer.length;
        });
        httpres.on('end', function() {
            var buffer = new Buffer(size), pos = 0;
            for(var i = 0, l = buffers.length; i < l; i++) {
                buffers[i].copy(buffer, pos);
                pos += buffers[i].length;
            }
            // // 'content-type': 'text/html;charset=gbk'
            // // 百度返回的页面数据流竟然还无法使用gbk完全解码。。
            // var gbk_to_utf8_iconv = new Iconv('GBK', 'UTF-8//TRANSLIT//IGNORE');
            // var utf8_buffer = gbk_to_utf8_iconv.convert(buffer);
            // console.log(buffer.toString());
            var htmlText = buffer.toString();
            var start = htmlText.indexOf('<div class="trans-container">');
            var end = htmlText.indexOf('</div>', start);
            var translation = htmlText.substring(start + '<div class="trans-container">'.length, end);
            console.log(translation);

            var pstart = htmlText.indexOf('<span class="phonetic">');
            pstart = htmlText.indexOf('<span class="phonetic">', pstart);
            var pend = htmlText.indexOf('</span>', pstart);
       
            var pronounce = htmlText.substring(pstart + '<span class="phonetic">'.length, pend)
            console.log("pronounce: " + pronounce);
            parts = divide.divide(pronounce.substring(1, pronounce.length - 1 ))
            console.log(parts);
            var dividedPronounce = parts.join("-");
            res.end(JSON.stringify({"translation": translation, "pronounce": pronounce, "dividedPronounce": dividedPronounce}));
            // for (var i = 0; i < pronounce.length; i++) {
            //     console.log(divide.isyy(pronounce[i]));
            // };
            //divide.isyy(pronounce);
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
}