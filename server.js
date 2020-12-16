const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require("mongoose");
const namesModel = require("./schema")
const configureModel = require("./configureSchema")
const expenseModel = require("./expenseSchema")
const cors = require('cors');
const bearerToken = require('express-bearer-token');

app.use(bearerToken());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static('public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//let url = 'mongodb://localhost:27017/mongodb_project';

const port = 3000;

const secretKey = 'My super secret key';
const jwtMW = exjwt({
    secret: secretKey,
    algorithms: ['HS256']
});

let users = [
    {
        id: 1,
        username: 'fabio',
        password: '123'
    },
    {
        id: 2,
        username: 'nolasco',
        password: '456'  
    }
];

app.post('/api/login', (req, res) => {
const { username, password } = req.body;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to mongo");
    namesModel.find()
    .then((data)=>{
        console.log(data)
        const { username, password } = req.body;
        for (let user of data) {
            if (username == user.username && password == user.password) {
                if (username == user.username && password == user.password) {
                let token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '2m'});
                res.json({
                    success: true,
                    err: null,
                    token
                });
                break;
                }
                else {
                    res.status(401).json({
                        success: false,
                        token: null,
                        err: 'Username or password is incorrect'
                    });
                }
            }
        }
        mongoose.connection.close();
    })
    .catch((connectionError)=>{
        console.log(connectionError)
    })
})

/*for (let user of users) {
    if (username == user.username && password == user.password) {
        let token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '180000'});
        res.json({
            success: true,
            err: null,
            token
        });
        break;
    }
    else {
        res.status(401).json({
            success: false,
            token: null,
            err: 'Username or password is incorrect'
        });
    }
}*/
});

app.post('/api/signedup', (req, res) => {
    const { username, password } = req.body;
    
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to mongo");
        namesModel.find()
        .then((data)=>{
            console.log(data)
            res.json(data);
            res.send(data)
            mongoose.connection.close();
        })
        .catch((connectionError)=>{
            console.log(connectionError)
        })
    })
    .catch((connectionError)=>{
            console.log(connectionError)
        })
    })

    app.post('/api/configureData', (req, res) => {
        const { username, password } = req.body;
        
        mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log("Connected to mongo");
            configureModel.find()
            .then((data)=>{
                console.log(data)
                res.json(data);
                res.send(data)
                mongoose.connection.close();
            })
            .catch((connectionError)=>{
                console.log(connectionError)
            })
        })
        .catch((connectionError)=>{
                console.log(connectionError)
            })
        })

        app.post('/api/expenseModel', (req, res) => {
            const { username, password } = req.body;
            
            mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                console.log("Connected to mongo");
                expenseModel.find()
                .then((data)=>{
                    console.log(data)
                    res.json(data);
                    res.send(data)
                    mongoose.connection.close();
                })
                .catch((connectionError)=>{
                    console.log(connectionError)
                })
            })
            .catch((connectionError)=>{
                    console.log(connectionError)
                })
            })

            app.post('/api/signup', (req, res) => {
                const { username, password } = req.body;
                
                mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
                const newData = namesModel({
                    id: req.body.id,
                    username: req.body.username,
                    password: req.body.password,
                });
                namesModel.insertMany(newData)
                .then((data)=>{
                    console.log(data)
                    res.send(data)
                    mongoose.connection.close();
                })
                .catch((connectionError)=>{
                        console.log(connectionError)
                    })
                })

                api.post('/api/configure', (req, res) => {
                    const secretKey = 'mysecret';
                    const authHeader = req.headers.authorization;
                    if (authHeader){
                        const token = authHeader.split(' ')[1];
                        jwt.verify(token, secretKey, (err, data)=>{
                            if (err)
                            res.send(err)
                            res.send(data)
                        })
                    } else {
                        res.sendStatus(403).send("Error 403")
                    }
                    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
                const newData = namesModel({
                    id: req.body.id,
                    username: req.body.username,
                    password: req.body.password,
                });
                configureModel.insertMany(newData)
                .then((data)=>{
                    console.log(data)
                    res.send(data)
                    window.location.href = 'http://localhost:3000/';
                    mongoose.connection.close();
                })
                .catch((connectionError)=>{
                    console.log(connectionError)
                })
                })


 


app.get('/api/settings', jwtMW, (req, res) => {
    res.json({
        success: true,
        myContent: 'Settings.'
    });
});

app.get('/api/dashboard', jwtMW, (req, res) => {
    res.json({
        success: true,
        myContent: 'Secret content that only logged in people can see.'
    });
});

app.get('/api/prices', jwtMW, (req, res) => {
    res.json({
        success: true,
        myContent: 'this is the price $3.99'
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.use(function (err, req, next)   {
      if (err.name === 'UnauthorizedError') {
          res.status(401).json({
              success: false,
              officialError: err,
              err: 'Username or password is incorrect 2'
          });
      }
      else {
          next(err);
      }
  });

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
  });