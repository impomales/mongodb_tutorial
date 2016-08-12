var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) throw err
    
    var collection = db.collection('docs')
    var document = {
        firstName: process.argv[2],
        lastName: process.argv[3]
    }
    
    collection.insert(document, function(err, data) {
        if (err) throw err
        console.log(JSON.stringify(document))
    })
    
    db.close()
})