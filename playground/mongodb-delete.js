const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');



db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5bb85a8d6344332b3e3591d0')
}).then((result) => {
  console.log(result);
});


  // db.close();
});
