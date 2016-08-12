var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/' + 
process.argv[2], function(err, db) {
    if (err) throw err
    
    var collection = db.collection('users')
    
    collection.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, function(err) {
        if (err) throw err
        
        db.close()
    })
})