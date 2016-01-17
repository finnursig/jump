var User = require('../models/User').Model;
var Promise = require('bluebird');

var create = (profile) => {
    return new Promise((resolve, reject) => {
        var user = new User();

        user.facebookId = profile.id;
        user.name = profile.displayName;

        user.save();

        resolve(user);
    });
};

var findByFacebookId = (id) => {
    return User.findOne({ facebookId: id });
};

var findByFacebookIdOrCreate = (profile) => {
    return findByFacebookId(profile.id)
        .then((user) => {
            console.log(user);

            if(!user){
                return create(profile);
            }

            return new Promise((resolve) => {
                resolve(user)
            });
        });
};

var getAll = () => {
    return User.find({});
};

module.exports = {
    create: create,
    findByFacebookId: findByFacebookId,
    findByFacebookIdOrCreate: findByFacebookIdOrCreate,
    getAll: getAll
}
