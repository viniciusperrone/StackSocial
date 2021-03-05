import { Knex } from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('posts', table => {
    table.uuid('id').primary();
    table.string('title').notNullable();
    table.string('content').notNullable();
    table.string('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
  })
}

export async function down(knex: Knex){
  return knex.schema.dropTable('posts');
}