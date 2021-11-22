exports.seed = function (knex) {
  return knex("cities").insert([
    { city_name: "New York, NY" },
    { city_name: "Pheonix, AZ" },
    { city_name: "Brooklyn, NY" },
    { city_name: "Fort Luaderdale, FL" },
    { city_name: "Portsmouth, NH" },
  ]);
};
