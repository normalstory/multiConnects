
//프레임워크 
var https = require('https');
var express = require('express');

//파일리드 허용 
var fs = require('fs');
//외부 파일 호출 
var serverJS = require('./server.js');


//https
var options = {  
	key: fs.readFileSync('./keys/key.pem'),
	cert: fs.readFileSync('./keys/cert.pem')
};
