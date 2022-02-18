// server.js
// express server
// express 모듈 불러오기
const express = require("express");
const path = require("path");

// express 사용
const app = express();

// server.js 의 실행경로 + "/static"을 localhost:port/static으로 마운트
app.use("/static", express.static(path.resolve(__dirname, "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
});

// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));