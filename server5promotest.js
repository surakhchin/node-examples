var mongoose = require('mongoose'),
    assert = require('assert');

var Promotions = require('./models/promotion-3');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new dish
    Promotions.create({
        name: 'Weekend Grand Budget',
        image: "test.PNG",
        label: 'New',
        price: 19.99,
        description: 'Featuring...'
    }, function (err, dish) {
        if (err) throw err;
        console.log('Promo created!');
        console.log(dish);

        var id = dish._id;

        // get all the dishes
        setTimeout(function () {
            Promotions.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated description Feature!'
                    }
                }, {
                    new: true
                })
                .exec(function (err, dish) {
                    if (err) throw err;
                    console.log('executed Promo query printing description update:!');
                    console.log(dish);

                    // dish.comments.push({
                    //     rating: 5,
                    //     comment: 'I\'m getting a sinking feeling!',
                    //     author: 'Leonardo di Carpaccio'
                    // });

                    dish.save(function (err, dish) {
                        if (err) throw err;
                        console.log('Saved Promo! logging promo!');
                        console.log(dish);

                        db.collection('promotions').drop(function () {
                            db.close();
                        });
                    });
                });
        }, 3000);
    });
});