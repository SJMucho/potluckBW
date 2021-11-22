exports.seed = function (knex) {
  return knex("potluck_events").insert([
    { event_name: "Potluck 1", date: "12/12/2021", city_id: 3, org_id: 3 },
    { event_name: "Potluck 2", date: "11/21/2021", city_id: 1, org_id: 1 },
    { event_name: "Potluck 3", date: "12/20/2021", city_id: 2, org_id: 2 },
  ]);
};