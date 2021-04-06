// const MongoClient = require('mongodb').MongoClient;

const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    } 

    console.log('Connected to Mongodb server.');

    db.collection('My_Bio').find({name: "Emmanuel"}).toArray().then((docs) => {
        console.log('My_Bio');
        console.log(JSON.stringify(docs, undefined, 2));
        
    }, (err) => {
        console.log(`Unable to fetch the name ${err}`);
    });




    // db.collection('Todos').find({
    //     _id: new ObjectID('6064f24ea51d793da5638505')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(`Unable to fetch ${err}`);
    // });
            
});
    
   
