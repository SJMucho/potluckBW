exports.seed = function (knex) {
  return knex("food_items").insert([
    { item_name: "pie", item_type: "dessert", user_id: 3 },
    { item_name: "wings", item_type: "main", user_id: 1 },
    { item_name: "crudite", item_type: "12/20/2021", user_id: 2 },
  ]);
};
