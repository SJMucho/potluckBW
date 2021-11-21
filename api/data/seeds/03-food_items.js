exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("food_items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("food_items").insert([
        { item_name: "potato salad", item_type: "appetizer", user_id: 1 },
        { item_name: "crudite", item_type: "appetizer", user_id: 3 },
        { item_name: "strawberry shortcake", item_type: "desert", user_id: 2 },
        { item_name: "sliders", item_type: "main", user_id: 2 },
        { item_name: 'chicken wings', item_type: 'main', user_id: 4}
      ]);
    });
};
