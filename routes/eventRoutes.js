const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js');

router.get('/api/events', function(req, res, next) {
  knex('shows')
    .join('productions', 'shows.production_id', 'productions.id')
    .join('venues', 'shows.venue_id', 'venues.id')
    .select()
    .then(events => res.status(200).json(events))
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});


router.get('/api/venues', function(req, res, next) {
  knex('venues')
    .select()
    .then(venues => res.status(200).json(venues))
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.post('/api/venues', function(req, res, next) {
  const newVenue = req.body;
  knex('venues')
    .insert([
      {
        venue_name: newVenue.venue_name,
        venue_address: newVenue.venue_address,
        venue_website: newVenue.venue_website,
      },
    ])
    .then(() => res.status(200).send())
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.get('/api/productions', function(req, res, next) {
  knex('productions')
    .select()
    .then(productions => res.status(200).json(productions))
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.post('/api/productions', function(req, res, next) {
  const newProduction = req.body;
  knex('productions')
    .insert([
      {
        name: newProduction.name,
        company: newProduction.company,
        url: newProduction.url,
        copy: newProduction.copy,
        my_role: newProduction.my_role,
      },
    ])
    .then(() => res.status(200).send())
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.get('/api/shows', function(req, res, next) {
  knex('shows')
    .select()
    .then(shows => res.status(200).json(shows))
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.post('/api/shows', function(req, res, next) {
  const newShow = req.body;
  knex('shows')
    .insert([
      {
        start: newShow.start,
        end: newShow.end,
        production_id: newShow.production_id,
        venue_id: newShow.venue_id,
      },
    ])
    .then(() => res.status(200).send())
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});


module.exports = router;
