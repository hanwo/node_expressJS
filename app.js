var express = require('express');
var app = express()
var bodyParser = require('body-parser') // body-parser 등록

app.listen(3000,function() {
	console.log("Start! express server on port 3000");
});
// static dir를 express에 등록
app.use(express.static('public'));
// response를 json으로 받는다
app.use(bodyParser.json());
// response를 인코딩한다
app.use(bodyParser.urlencoded({extended:true}));
// 난 어떤 engine을 쓸거야
app.set('view engine', 'ejs');

// url routing
app.get('/',function(req,res){
	res.sendfile(__dirname+"/public/main.html");
})

app.get('/main',function(req,res){
	res.sendfile(__dirname+"/public/main.html");
})
// 페이지를 렌더링 한다
app.post('/email_post',function(req,res){
	// get : req.param('email');
	// res.send("<h1>어서오세요 !</h1>" + req.body.email + "<h1>님</h1>");
	res.render('email.ejs', {'email' : req.body.email});
})

app.post('/ajax_send_email',function(req,res){
	// 여기서 check validation about input value ==> DB 조회를 하여 값 처리
	let responseData = {'result' : 'ok', 'email' : req.body.email}
	res.json(responseData);
})

app.get('/search_get',function(req,res){
	// 여기서 check validation about input value ==> DB 조회를 하여 값 처리
	res.render('practice.ejs', );
})

app.post('/ajax_send_email',function(req,res){
	// 여기서 check validation about input value ==> DB 조회를 하여 값 처리
	let responseData = {'result' : 'ok', 'email' : req.body.email}
	res.json(responseData);
})
