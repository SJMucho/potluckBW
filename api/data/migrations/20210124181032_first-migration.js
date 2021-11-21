exports.up = async (knex) => {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments("user_id");
    tbl.string("username", 200).notNullable();
    tbl.string("password", 200).notNullable();
    // users.timestamps(false, true);
  });

  await knex.schema.createTable("food_items", (tbl) => {
    tbl.increments("item_id");
    tbl.string("item_name", 128).notNullable().unique();
    tbl.string("item_type").notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE");
  });

  await knex.schema.createTable("organizers", (tbl) => {
    tbl.increments("org_id");
    tbl.string("location").notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE");
  });

  await knex.schema.createTable("potluck_events", (tbl) => {
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
