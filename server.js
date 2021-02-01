const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});
//사전에 세팅
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //엔진은 ejs를 쓸거야.
app.engine('html', require('ejs').renderFile); 

//라우터에 따라 어떤 걸 보여줄지
app.get('/', function (req, res){
    res.render('lotto.html');
});

app.get('/about', function (req, res){
    res.send('about page');
});


var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '35.226.6.133',
  user            : 'root',
  password        : 'w123123',
  database        : 'mogang'
});
// 35.226.6.133


app.get('/db', function (req, res){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM professor', function (error, results, fields) {
            res.send(JSON.stringify(results));
            console.log('results',results);
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
    });
});