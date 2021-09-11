const User = require('../models/user');

class UsersService {

  static add(newUser) {
    return new Promise((resolve) => {
      resolve(new User(newUser).save());
    });
  }

  static getAll() {
    return new Promise((resolve) => {
      resolve(User.find());
    });
  }

  static getById(id) {
    return new Promise((resolve) => {
      resolve(User.findById(id));
    });
  }

  static update(userId, updatedUser) {
    return new Promise((resolve) => {
      User.findById(userId)
        .then(user => {
          user.email = updatedUser.email || user.email;
          user.password = updatedUser.password || user.password;
          user.confirmPassword = updatedUser.confirmPassword || user.confirmPassword;
          resolve(user.save());
        })
    });
  }

  static delete(userId) {
    return new Promise((resolve) => {
      resolve(User.findByIdAndRemove(userId));
    });
  }
}

module.exports = UsersService;