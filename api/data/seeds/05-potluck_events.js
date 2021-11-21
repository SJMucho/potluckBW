exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("potluck_events")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("potluck_events").insert([
        { date: "12/12/2021", org_id: 3 },
        { date: "11/21/2021", org_id: 1 },
        { date: "12/20/2021", org_id: 2 },
      ]);
    });
};
