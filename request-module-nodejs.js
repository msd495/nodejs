const request = require('request');
const https = require('https');
const options = {  
    url: 'https://www.reddit.com/r/funny.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};

request(options, function(err, res, body) {  
    let json = JSON.parse(body);
    console.log("calling this 22222222222222222222222222222222");
    console.log(json);
    console.log("*******************************************");
    https.get('https://encrypted.google.com/', (res) => { // <- this is a function that is called when there's a response. Waiting for a response is as easy as writing code inside this function (or use async await)
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    console.log("calling this...............................");
    res.on('data', (d) => { //this is a function attached to the response's 'data' event. it's called every time a chunk of data arrives. (multiple times per request)
        
        process.stdout.write(d);
    });

    }).on('error', (e) => { //the https.get function returns a request that can emit an error event. this is an eventlistener for that. try an invalid url to test this branch of your code
    console.error(e);
    });
});



