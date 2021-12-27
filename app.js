const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // body-parser 등록
const mysql = require('mysql');
const router = require('./router/index');
// const main = require('./router/main') // export module를 import 하는거
// const email = require('./router/email') // export module를 import 하는거

// let connection = mysql.createConnection({
//     host: 'nowrica.synology.me',
//     port: '33336',
//     user: 'root',
//     password: '1234',
//     database: 'express'
// });
//
// connection.connect();

app.listen(3000, function () {
    console.log("Start! express server on port 3000");
});
// static dir를 express에 등록
app.use(express.static('public'));
// response를 json으로 받는다
app.use(bodyParser.json());
// response를 인코딩한다
app.use(bodyParser.urlencoded({extended: true}));
// 난 어떤 engine을 쓸거야
app.set('view engine', 'ejs');
// 라우터 설정
app.use(router); // path 따로 적을거 없으면 그냥 모듈만 적기
// app.use('/main', main);
// app.use('/email', email);

// url routing
// app.get('/', function (req, res) {
//     res.sendfile(__dirname + "/public/main.html");
// })

// app.get('/main', function (req, res) {
//     res.sendfile(__dirname + "/public/main.html");
// })
// 페이지를 렌더링 한다
// app.post('/email_post', function (req, res) {
//     // get : req.param('email');
//     // res.send("<h1>어서오세요 !</h1>" + req.body.email + "<h1>님</h1>");
//     res.render('email.ejs', {'email': req.body.email});
// })

// app.post('/ajax_send_email', function (req, res) {
//     // 여기서 check validation about input value ==> DB 조회를 하여 값 처리
//     let responseData = {'result': 'ok', 'email': req.body.email}
//     res.json(responseData);
// })

// app.post('/ajax_send_email', function (req, res) {
//     // 여기서 check validation about input value ==> DB 조회를 하여 값 처리
//     let email = req.body.email;
//     let responseData = {}; // json으로 주기 위해 object 초기화
//     try{
//         let rows = connection.query("SELECT * FROM member", (err, rows) => {
//             if(!err){
//                 console.log("이게 값이다");
//                 console.log(rows);
//                 console.log(rows[0].name);
//             } else {
//                 console.log(err);
//             }
//             res.json(rows)
//         });
//     }
//     catch(err){
//         throw err;
//     }
// })

