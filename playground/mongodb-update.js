const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bb0c96df1717419f43416bb')
  },{
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result.value);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bb0c96df1717419f43416bb')
  },{
    $set: {name: "Rivka"}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result.value);
  });

  // db.close();
});
