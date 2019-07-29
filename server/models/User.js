'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

class User {
  static all() {
    return db('users')
  }

  static async deactivate(email) {
    if (email) {
      return db('users').where('email', email).update({ deactivated_at: new Date() })
    }
  }
}

/**
 * Export model
 */

module.exports = User
