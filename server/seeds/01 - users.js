
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Cokey', email: 'cokey@cokey.com',
                pswd: 'codyChanceJD',
                goal_text: '3000 body lifts in January', goal_num: 3000},
        {id: 2, name: 'Paige', email: 'paige@paige.com',
                pswd: 'KyleAlex',
                goal_text: '3000 body lifts in January', goal_num: 3000},
        {id: 3, name: 'Tracey', email: 'tracey@tracey.com',
                pswd: 'Wes',
                goal_text: '3000 body lifts in January', goal_num: 3000}
      ]);
    })
    .then(function() {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    })
};
