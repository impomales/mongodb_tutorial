var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
        if (err) throw err
        
        var collection = db.collection('parrots')
        collection.find({age: {$gt: parseInt(process.argv[2])}},  {
            name: 1,
            age: 1, 
            _id: 0
        })
            .toArray(function(err, docs) {
                if (err) throw err
                
                console.log(docs)
            })
        db.close()
    })