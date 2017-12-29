
'use strict';

const knex = require('./knex')

function getSummaries(req, res) {
  return knex.raw('select users.id, name, goal_num, sum(progress) from users join progress on users.id=progress.user_id group by users.id order by name')
      .then(users => {
        if (!users || !users.rows || users.rows < 1) res.sendStatus(404)
        else res.status(200).json(users.rows)
      })
}

function getDetails(req, res) {
  let queryString = "select * from users join progress on users.id=progress.user_id where users.name='";
  queryString += req.params.name
  queryString += "' order by date"
  return knex.raw(queryString)
      .then(details => {
        if (!details || !details.rows || details.rows.length < 1) res.sendStatus(404)
        else res.status(200).json(details.rows)
      })
}

function createDetails(req, res) {
  return knex('progress')
      .insert({'user_id': req.body.user_id, 'date': req.body.date,
                'progress': req.body.progress })
      .returning(['date', 'progress', 'user_id'])
      .then(progress => {
        if (!progress || progress.length < 1) res.sendStatus(404)
        else res.status(200).json(progress[0])
      })
}

function tryLogin(req, res) {
  return knex('users')
      .where('name', req.body.name)
      .then(users => {
        if (!users || users.length < 1) res.sendStatus(404)
        else {
          if (users[0].pswd == req.body.pswd)
            res.status(200).json(users)
          else res.sendStatus(404)
        }
      })
}


module.exports = {
  getSummaries, getDetails, createDetails, tryLogin
}
