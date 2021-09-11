let NeDB = require('nedb');
let db = new NeDB({
    filename:'nedb.db',
    autoload:true
});

class QuestionsDB {
    
    static add(newQuestion){
        return new Promise((resolve) => {
            newQuestion.status = newQuestion.status || 'new2',
            db.insert(newQuestion, (err, question)=> {
              if(err) {
                resolve(null);
              } else {
                resolve(question);
              }
            });
          });
    }
}

module.exports = NeDB;