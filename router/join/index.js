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

router.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, '../../public/join.html'))
})

router.post('/', (req, res) => {
    let body = req.body;
    let name = body.name;
    let age = body.age;
    let email = body.email;
    let query = connection.query('insert into member (name,age,email) values("' + name + '","' + age + '","' + email + '")', (rows, err) => {
        if(err) throw err
        console.log(rows);
        console.log("ok DB Insert");
    })
})

module.exports = router;
