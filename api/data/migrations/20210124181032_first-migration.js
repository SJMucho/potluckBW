exports.up = async (knex) => {
  await knex.schema.createTable("users", (users) => {
    users.increments("user_id");
    users.string("username", 200).notNullable();
    users.string("password", 200).notNullable();
    users.timestamps(false, true);
  });

  await knex.schema.createTable("food_items", (food_items) => {
    food_items.increments("item_id");
    food_items.string("item_name").notNullable().unique();
  });

  await knex.schema.createTable()
};


exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("food_items");
  await knex.schema.dropTableIfExists("users");
};
