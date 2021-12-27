const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'nowrica.synology.me',
    port: '33336',
    user: 'root',
    password: '1234',
    database: 'express'
});

connection.connect();

router.post('/form', function (req, res) {
    // get : req.param('email');
    console.log(req.body.email);
    // res.send("<h1>어서오세요 !</h1>" + req.body.email + "<h1>님</h1>");
    res.render('email.ejs', {'email': req.body.email});
})

router.post('/ajax', function (req, res) {
    // 여기서 check validation about input value ==> DB 조회를 하여 값 처리
    let email = req.body.email;
    let responseData = {}; // json으로 주기 위해 object 초기화
    try{
        let rows = connection.query("SELECT * FROM member", (err, rows) => {
            if(!err){
                console.log("이게 값이다");
                console.log(rows);
                console.log(rows[0].name);
            } else {
                console.log(err);
            }
            res.json(rows)
        });
    }
    catch(err){
        throw err;
    }
})

module.exports = router;
