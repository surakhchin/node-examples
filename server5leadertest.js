var mongoose = require('mongoose'),
    assert = require('assert');

var Leaders = require('./models/leader-3');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new dish
    Leaders.create({
        name: 'Peter Pan',
        image: "test.PNG",
        designation: 'Chief Epicurus Officer',
        abbr: 'CEO',
        description: 'Our CEO, Peter,...'
    }, function (err, dish) {
        if (err) throw err;
        console.log('Leader created!');
        console.log(dish);

        var id = dish._id;

        // get all the dishes
        setTimeout(function () {
            Leaders.findByIdAndUpdate(id, {
                    $set: {
                        description: 'The leader description is updated!'
                    }
                }, {
                    new: true
                })
                .exec(function (err, dish) {
                    if (err) throw err;
                    console.log('Logging the update by printing update:');
                    console.log(dish);

                    // dish.comments.push({
                    //     rating: 5,
                    //     comment: 'I\'m getting a sinking feeling!',
                    //     author: 'Leonardo di Carpaccio'
                    // });

                    dish.save(function (err, dish) {
                        if (err) throw err;
                        console.log('Saved update, printing again for fun!');
                        console.log(dish);

                        db.collection('leaders').drop(function () {
                            db.close();
                        });
                    });
                });
        }, 3000);
    });
});