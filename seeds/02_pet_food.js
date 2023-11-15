/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE pet_food CASCADE')
  await knex('pet_food').del()
  await knex('pet_food').insert([
    {id: 1, brand: 'Purina'},
    {id: 2, brand: 'Blue Buffalo'},
    {id: 3, brand: 'Fancy Feast'}
  ]);
};
