const MongoClient = require('mongodb').MongoClient;
   


async function getEmpData() {

    let client = await MongoClient.connect(process.env.DB_URL);
     let connection = client.db('issueTracker');   // Establish connection
   return connection.collection('IssueTracker2023');  // creating a collection and naming it also
}

module.exports = getEmpData;

