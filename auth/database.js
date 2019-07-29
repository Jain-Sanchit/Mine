const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })

const getDb = () => client.connect().then(() => {
  const db = client.db('datab')
  return db
})


const insertData = (user) =>
  getDb()
  .then(db => db.collection('users'))
  .then(collection => collection.insertOne(user))

  const getTracks = () => 
  getDb()
  .then(db => db.collection('users'))
  .then(collection => collection.find())
  .then(cursor => cursor.toArray())

  getTracks().then(users => console.log(users))

  module.exports={insertData}