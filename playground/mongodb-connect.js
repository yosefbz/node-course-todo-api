const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Somting to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Yosef Buchnik',
    age: 26,
    loction: 'Tel-Aviv, Almgor 7'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert user');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
