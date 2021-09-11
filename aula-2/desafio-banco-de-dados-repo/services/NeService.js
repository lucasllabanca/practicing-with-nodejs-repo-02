const NeDB = require('../databases/NeDB');

class NeService {

  static add(newRegistro) {
    return new Promise((resolve) => {
      resolve(NeDB.add(newRegistro));
    });
  }
}

module.exports = NeService;