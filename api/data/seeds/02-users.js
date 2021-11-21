exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Coco", password: "abc123" },
        { username: "Walter", password: "def456" },
        { username: "Pedro", password: "ghi789" },
        { username: "Moira", password: "jkl101112" },
        { username: "Alex", password: "mno131415" },
        { username: "Elliot", password: "pqr161718" },
        { username: "Jay", password: "pqr161718" },
      ]);
    });
};
