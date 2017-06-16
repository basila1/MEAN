var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.list = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      return next(err);
    } else {
      res.json(users);
    }
  });
};

//Mongoose module to call the model method that will return the User model you previously de ned. Next, you create
//a controller method named create(), which you will later use to create new users. Using the new keyword, the create() //method creates a new model instance, which is populated using the request body. Finally, you call the model //instance's save() method that either saves the user and outputs the user object, or fail, passing the error to the //next middleware.
