
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('progress').del()
    .then(function () {
      // Inserts seed entries
      return knex('progress').insert([
        {id: 1, user_id: 1, date: new Date("1/1/2018"), progress: 100},
        {id: 2, user_id: 1, date: new Date("1/2/2018"), progress: 100},
        {id: 3, user_id: 1, date: new Date("1/3/2018"), progress: 100},
        {id: 4, user_id: 2, date: new Date("1/1/2018"), progress: 100},
        {id: 5, user_id: 2, date: new Date("1/2/2018"), progress: 100},
        {id: 6, user_id: 2, date: new Date("1/3/2018"), progress: 100},
        {id: 7, user_id: 2, date: new Date("1/4/2018"), progress: 100},
        {id: 8, user_id: 3, date: new Date("1/1/2018"), progress: 100},
        {id: 9, user_id: 3, date: new Date("1/3/2018"), progress: 200},
      ]);
    })
  .then(function() {
    return knex.raw("SELECT setval('progress_id_seq', (SELECT MAX(id) FROM progress));")
  })
};
