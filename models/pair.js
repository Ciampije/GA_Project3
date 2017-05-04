var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//other models to require go here


//////////////////////////////////////////|
//------------------------------Schema----|
//////////////////////////////////////////|

var userSchema = Schema({
    pair: [{
        beer: String,
        book: String
    }],
 "https://www.poetryfoundation.org/harriet/wp-content/uploads/2015/07/Beer.png"},
    favoriteBook: {type:String, default: "I haven't added my favorite book yet."},
    favoriteBeer: {type:String, default: "I haven't added my favorite beer yet."}

    // books: [Book.schema], //incase?
    // beers: [Beer.schema] //incase?
});


var User = mongoose.model('User', userSchema);

module.exports = User;
