const express=require('express');
const mysql=require('mysql');
////////////////start connecting to mysql db
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodemysql'
  });
  
  connection.connect((error)=>{
      if(error){
          throw error;
      }
      console.log("database mysql connected successfully!");
  });
  


const app =express();

app.listen('5000',()=>{
    console.log("server started on port 5000");
});
