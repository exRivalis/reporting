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
    list = {'sources':{'adv':['adv_1', 'adv_2', 'adv_3'], 'bdf':['bdf_1', 'bdf_2'], 'aqzc20':['f1', 'f2', 'f54'],
            'adv1':['adv_1'], 'bdf1':['bdf_1'], 'aqzc202':['f1'],
            'adv2':['adv_1'], 'bdf2':['bdf_1'], 'aqzc222':['f1'],
            'adv3':['adv_1'], 'bdf13':['bdf_1'], 'aqzc203':['f1'],
            'adv4':['adv_1'], 'bdf4':['bdf_1'], 'aqzc204':['f1'],
            'adv5':['adv_1'], 'bdf5':['bdf_1'], 'aqzc2025':['f1'],    
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