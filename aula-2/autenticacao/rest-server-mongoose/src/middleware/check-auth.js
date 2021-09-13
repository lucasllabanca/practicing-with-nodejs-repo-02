const User = require('../models/user');

const checkAuth = (request, response, next) => {
  const token = request.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(token, 'base64').toString('ascii');
  const [email, password] = credentials.split(':');

  User.findOne({ 'email': email })
  .then(user => {
    if (!user) notAuthorized();
    
    if (password == user.password)
      next(); 
    else 
      notAuthorized(response);
   
  }) 
  .catch(err => {
    notAuthorized(response);
  });
}

const notAuthorized = (response) => {
  const HttpStatusNotAuthorized = 401;
  const errorInfo = {
    status: HttpStatusNotAuthorized,
    message: 'Not authorized'
  };

  response
    .status(HttpStatusNotAuthorized)
    .json(errorInfo);
}

module.exports = checkAuth;