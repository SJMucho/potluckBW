exports.up = async (knex) => {
  await knex.schema.createTable("users", (users) => {
    users.increments("user_id");
    users.string("username", 200).notNullable();
    users.string("password", 200).notNullable();
    // users.timestamps(false, true);
  });

  await knex.schema.createTable("food_items", (food_items) => {
    food_items.increments("item_id");
    food_items.string("item_name", 128).notNullable().unique();
    food_items.string("item_type").notNullable();
  });

  await knex.schema.createTable("organizers", (organizers) => {
    organizers.increments("org_id");
    organizers.string("location").notNullable();
    organizers
      .integer("users_id")
      .unsigned()
      .notNullable()
      .references("users_id")
      .inTable("users")
      .onDelete("CASCADE");
  });

  await knex.schema.createTable("potluck_events", (potluck_events) => {
    tbl.increments("potluck_id");
    tbl.date("date").notNullable();
    tbl.string("location").notNullable();
    tbl
      .integer("org_id")
      .unsigned()
      .notNullable()
      .references("org_id")
      .inTable("organizers")
      .onDelete("CASCADE");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("potluck_events");
  await knex.schema.dropTableIfExists("organizers");
  await knex.schema.dropTableIfExists("food_items");
  await knex.schema.dropTableIfExists("users");
};
