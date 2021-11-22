
exports.seed = function (knex) {
  return knex("organizers").insert([
    { user_id: 1, city_id: 1 },
    { user_id: 2, city_id: 2 },
    { user_id: 3, city_id: 3 },
    { user_id: 4, city_id: 4 },
    { user_id: 5, city_id: 5 },
  ]);
};