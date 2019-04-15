const express = require('express');
const app = express();
const port = 3000;
var fs = require('fs');

var server = app.listen(process.env.PORT || port, '0.0.0.0', function() {
    console.log('App listening at http://%s:%s', server.address().address,
    server.address().port);
    console.log('Press Ctrl+C to quit.');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./public/html/index.html', 'utf-8', function(error, content){
        res.end(content);
    })
})

// data request
app.get('/sources', function(req, res){
    list = {'sources':{'src_1':['file_1', 'file_2', 'file_3'], 'src_2':['file_1', 'file_2', 'file_3'],
                  'src_3':['file_1', 'file_2', 'file_3'], 'src_4':['file_1', 'file_2', 'file_3'],
                  'src_5':['file_1', 'file_2', 'file_3'], 'src_6':['file_1', 'file_2', 'file_3'],
                  'src_7':['file_1', 'file_2', 'file_3'], 'src_8':['file_1', 'file_2', 'file_3'],
                  'src_9':['file_1', 'file_2', 'file_3'], 'src_10':['file_1', 'file_2', 'file_3'],
                  'src_11':['file_1', 'file_2', 'file_3'], 'src_14':['file_1', 'file_2', 'file_3'],
                  'src_13':['file_1', 'file_2', 'file_3'], 'src_16':['file_1', 'file_2', 'file_3'],
                  'src_15':['file_1', 'file_2', 'file_3'], 'src_17':['file_1', 'file_2', 'file_3'],
                  
}};
    res.send(list);
})

app.get('/data', function(req, res){
    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify({ a: 1 }));
    // var data = require('public/resources/data.json');
    // res.json()
    var readable = fs.createReadStream('public/resources/data.json');
    readable.pipe(res);
})