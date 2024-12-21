const express = require('express');
const router = express.Router();
const UserController = require('../controller/users.js')

//Create - Post
router.post('/', UserController.createNewUser);
//Read - Get
router.get('/', UserController.getAllUsers);
//Update - Patch
router.patch('/:idUser', UserController.updateUser);
//Delete - Delete
router.delete('/:idUser', UserController.deleteUser);

module.exports = router;