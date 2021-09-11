const express = require('express');
const router = express.Router();

const UsersService = require('../services/UsersService');
const checkAuth = require('../middleware/check-auth');
const notFound = require('../middleware/not-found');

router.post('/signup', async (request, response) => {
  const question = await UsersService.add(request.body);
  response
    .status(201)
    .json(question);
});

router.get('/', checkAuth, async (request, response) => {
  const users = await UsersService.getAll();
  users && users.length
    ? response.json(users)
    : response.status(204).end();
});

router.get('/:userId', async (request, response) => {
  const user = await UsersService.getById(request.params.userId);
  user
    ? response.json(user)
    : notFound(request, response);
});

router.patch('/:userId', checkAuth, async (request, response) => {
  const updatedUser = await UsersService.update(
    request.params.userId,
    request.body
  );
  updatedUser
    ? response.json(updatedUser)
    : notFound(request, response);
});

router.delete('/:userId', checkAuth, async (request, response) => {
  const isDeleted = await UsersService.delete(request.params.userId);
  isDeleted
    ? response.end()
    : notFound(request, response)
});

module.exports = router;