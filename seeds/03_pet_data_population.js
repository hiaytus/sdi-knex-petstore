/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Fido', pet_type_id: 3, pet_food_id: 1},
    {id: 2, name: 'Starbuck',pet_type_id: 3, pet_food_id: 2},
    {id: 3, name: 'Malibu', pet_type_id: 2, pet_food_id: 3},
    {id: 4, name: 'Spot', pet_type_id: 1, pet_food_id: 1}
  ]);
};
