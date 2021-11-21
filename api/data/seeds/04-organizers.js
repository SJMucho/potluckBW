
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('organizers').del()
    .then(function () {
      // Inserts seed entries
      return knex('organizers').insert([
        {location: 'New York, NY', user_id: '1'},
        {location: 'Chicago, Il', user_id: '2'},
        {location: 'Fort Luaderdale, FL', user_id: '3'},
        {location: 'Pittsburg, PA', user_id: '4'},
        {location: 'Phoenix, AZ', user_id: '5'}
      ]);
    });
};
