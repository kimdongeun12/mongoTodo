// require()는 es6 에서부터 사용되는 호출 메소드
const express = require("express"); //  서버 구동하는 프레임워크
const mongoose = require("mongoose"); // mongoDB와 다른 API 데이터를 전달 및 받기위한 기능
const path = require("path");
const bodyParser = require("body-parser"); // 데이터 송수신을 위한 기능


const app = express();


app.set("view engine", "ejs");  // express 서버에서 화면을 보여주기 위한 설정 ejs는(ex: php , jsp)처럼 사용
app.set("views", path.join(__dirname, 'views')); // path로 경로를 설정하는부분 __dirname은 절대경로 , __filename은 전체적인 경로

app.use("/public", express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// router설정
const router = require("./routes/index");
app.use(router);

mongoose.connect("mongodb://admin:adimin@localhost:27017/node?authSource=admin", {useNewUrlParser: true, useUnifiedTopology: true}, function(err , database){ // mongodb의 데이터 호출 
    if(err){
        console.error("mongoDB Connection Error!", err);
    }
    console.log("mongoDB Connected!");
    console.log(database)
    // console.log(database);
    // Server Open
    app.listen(3000, function(){
        console.log("Server listening on port 3000!");
    });
});



