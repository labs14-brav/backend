
exports.up = function(knex) {
  return knex.schema.createTable('mediator_cases', table => {
      table.increments()
      table.integer('mediator_id')
      table.integer('case_id')
      table.datetime("accepted_at")
      table.datetime("declined_at")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('mediator_cases');
};
