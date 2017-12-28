
'use strict';

// const express = require('express');
// const knex = require('../knex')

// const router = express.Router();
//
// router.get('/', getAll)
// router.post('/', create)
// router.patch('/:id', updateOne)
// router.get('/:id', getOne)
// router.delete('/:id', deleteOne)

function getSummaries(req, res) {
  // return knex('messages')
  //     .select('id', 'name', 'message')
  //     .orderBy('created_at', 'desc')
  //     .then(messages => {
  //       if (!messages || messages.length < 1) res.sendStatus(404)
  //       else res.status(200).json(messages)
  //     })
  res.sendStatus(200)
}

function getDetails(req, res) {
  // return knex('messages')
  //     .select('id', 'name', 'message')
  //     .where('id', req.params.id)
  //     .then(messages => {
  //       if (!messages || messages.length < 1) res.sendStatus(404)
  //       else res.status(200).json(messages[0])
  //     })
  res.sendStatus(200)
}

function createDetails(req, res) {
  // return knex('messages')
  //     .insert({'name': req.body.name, 'message': req.body.message })
  //     .returning(['name', 'message'])
  //     .then(messages => {
  //       if (!messages || messages.length < 1) res.sendStatus(404)
  //       else res.status(200).json(messages[0])
  //     })
      res.sendStatus(200)
}


module.exports = {
  getSummaries, getDetails, createDetails
}
