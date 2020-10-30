//var connectionstring="Data Source=127.0.0.1;Initial Catalog=IP_1999;User ID=atbottest;Password=Password#101;Provider=SQLOLEDB";

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var async = require('async');

// Create connection to database
var config = {
server: 'localhost',
authentication: {
    type: 'default',
    options: {
        userName: 'atbottest', 
        password: 'Password@101',
    }
},
options: {
    database: 'IP_1999',
    encrypt: false,

}
}
var connection = new Connection(config)

connection.on('connect', function (err) {
if (err) {
    console.log(err)
} else {
    executeStatement()
}
});

dtrows = [];
dtcolumns = [];

function executeStatement () {
    request = new Request("select top 2* from tmgcompany", function (err, rowCount) {
      if (err) {
        console.log(err)
      } else {
        console.log(rowCount + ' rows')
      }
      connection.close()
    })
    
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
            if (column.value === null) {  
                dtcolumns.push('NULL')
            } 
            else {  
                dtcolumns.push(column.value)  
            }  
        });  
        //console.log(dtcolumns);
        dtrows.push(dtcolumns) 
        dtcolumns = [];
        console.log(dtrows);
    }); 
    connection.execSql(request);
    console.log(dtrows);

}

    /*
    request.on('row', function (columns) {
      columns.forEach(function (column) {
        if (column.value === null) {
          console.log('NULL')
        } else {
          console.log(column.value)
        }
      })
    })
    */

    /*
    request.on("row", (columns) => {
        columns.forEach((column) => {
          console.log("%s\t%s", column.metadata.colName, column.value);
        });
      });
    */