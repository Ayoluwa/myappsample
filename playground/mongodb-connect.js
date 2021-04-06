// const MongoClient = require('mongodb').MongoClient;

const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    } 

    console.log('Connected to Mongodb server.');

    db.collection('My_Bio').insertOne({
        name: 'Ayooluwa',
        age: 25,
        location: 'Queens',
        favorite_dish: 'spaghetti'
    

    }, (err, result) => {
        if (err) {
        return console.log('Unable to fetch Todos', err);

        }
        
        console.log(result.ops);
    });
    
     db.close();

});
















// db.collection('Music_Album').insertOne({
    //     artiste: "Kirk Franklin",
    //     album: 'Hero',
    //     age: 40,
    //     married: true,
    //     atheist: false
 

    // }, (error, answer) => {
    //     if (error){
    //         return console.log('Unable to bring out', error);
    //     }
    //     console.log(answer.ops[0]._id.getTimestamp());
    // });











    
    




