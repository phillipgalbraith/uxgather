/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex){
    await knex.schema
      .createTable('users', (users) => {
        users.increments('user_id')
        users.string('first_name', 200)
        users.string('last_name', 200)
        users.string('username', 200).notNullable().unique()
        users.string('password', 200).notNullable()
        users.string('email', 200).notNullable()
        users.timestamps(false, true)
      })
      .createTable('suites', (suites) =>{
        suites.increments('suite_id')
        suites.string('name').notNullable()
        suites.string('client').notNullable()
        suites.string('environment').notNullable()
        //suite owner
        suites.integer('user_id')
          .unsigned()
          .notNullable()
          .references('user_id')
          .inTable('users')
          .onDelete('RESTRICT')
      })
      .createTable('tests', (tests) =>{
        tests.increments('test_id')
        tests.string('name', 200)
        tests.specificType('directions', "text ARRAY")
        //this is the email of the tester assigned to the test
        tests.string('tester_email')
        //the tester has "rsvp"d
        tests.boolean('tester_filled')
        // the facilitator in charge of this test
        tests.integer('user_id')
          .unsigned()
          .notNullable()
          .references('user_id')
          .inTable('users')
          .onDelete('RESTRICT')
        tests.integer('suite_id')
          .notNullable()
          .references('suite_id')
          .inTable('suites')
          .onDelete('RESTRICT')
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('tests')
      .dropTableIfExists('suites')
      .dropTableIfExists('users')
  }

