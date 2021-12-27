const express = require('express');
const app = express();
const router = express.Router(); // express 하위 Router 메소드
const path = require('path'); // 상대 경로로 이동

router.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, "../public/main.html")); //__dirname = 현재 디렉토리
})

module.exports = router;
