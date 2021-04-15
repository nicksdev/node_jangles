const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mongouser:mongopass55@cluster0.rzjur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");

  if(err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
}

console.log('Connected...');

  // perform actions on the collection object
  console.log("Closing...")
  client.close();
});