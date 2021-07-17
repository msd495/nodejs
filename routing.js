let express=require('express')
const bodyParser = require('body-parser');
let router = express.Router();
//import all the files
let util = require('./util');
/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */
class ExpressServer {
    constructor(hostname ='localhost', port= '3443') {
        this.serverName = 'Express Server';
        this.hostname = hostname;
        this.port = port;

        //Auto Start Server
        this.initServer()
        this.listen()
    }

    initServer=()=> {
        //Create Server
        this.server = express()

        this.server.use(bodyParser.json()); // for parsing application/json
        this.server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

        this.server.use('/homepage',util);
        this.server.use('/kormangala',util);
        this.server.get('/', (req, res,next)=> {
            res.send('Hello World!')
            next()
        })

        this.server.post('/insertBook',(req,res)=>{
            console.log("req is ",req.body)
            let obj=req.body;
            let data=[{"name":"harry-potter","author":"xxxx","isbn":"44444"},
                {"name":"harry-potter","author":"xxxx","isbn":"44444"},
                {"name":"harry-potter","author":"xxxx","isbn":"44444"},
                {"name":"harry-potter","author":"xxxx","isbn":"44444"}];
            data.push(obj);
            res.json(data)
        })

        this.server.get('/getAllBooks', (req, res,next)=> {
            console.log(req.query.name);

            var data=[{"name":"harry-potter","author":"xxxx","isbn":"44444"},
                {"name":"harry-potter","author":"xxxx","isbn":"44444"},
                {"name":"harry-potter","author":"xxxx","isbn":"44444"},
                {"name":"harry-potter","author":"xxxx","isbn":"44444"}];

            res.json(data);
            next()
        })

    }

    //Start Listening
    listen=()=>{
        this.server.listen(this.port, () => {
            console.log(`${this.serverName} Started at http://${this.hostname}:${this.port}/`);
        })
    }
}

let expressServerObj = new ExpressServer();
