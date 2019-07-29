'use strict'

/**
 * Dependencies
 */


const express = require('express');
const UsersController = require('../controllers/UsersController');
const restrictedMiddleware = require('../middleware/restricted');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /
 */

router.route('/:id/mediator-request-accepted')
router.route('/:id/mediator-request-declined')
/**
 * Export router
 */

module.exports = router