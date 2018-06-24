const express = require('express');
const bodyParser = require('body-parser');
const knex = require('../db/knex.js');

const router = express.Router();
router.use(bodyParser.json())

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

router.get('/api/venues/:id', function(req, res, next) {
  const venueId = req.params.id;
  knex('venues')
    .select()
    .where({
      id: venueId,
    })
    .then(venues => res.status(200).json(venues[0]))
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.post('/api/venues', function(req, res, next) {
  const newVenue = req.body;
  knex('venues')
    .returning(['id', 'venue_name', 'venue_address', 'venue_website'])
    .insert([
      {
        venue_name: newVenue.venue_name,
        venue_address: newVenue.venue_address,
        venue_website: newVenue.venue_website,
      },
    ])
    .then(resultArray => resultArray[0])
    .then(result => res.status(200).json(result))
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.put('/api/venues/:id', function (req, res, next) {
  const venueId = req.params.id;
  const venueFieldsToUpdate = req.body;
  knex('venues')
    .where('id', venueId)
    .update({
      ...venueFieldsToUpdate,
    })
  .then((count) => {
    console.log('Number of fields updated: ' + count);
    res.status(200).send();
  })
  .catch(error => {
    console.warn(error);
    res.status(400).json(error)
  });
});

router.delete('/api/venues/:id', function (req, res, next) {
  const venueId = req.params.id;
  knex('venues')
    .where('id', venueId)
    .del()
  .then((count) => {
    console.log('Number of venues deleted: ' + count);
    res.status(200).send();
  })
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

router.get('/api/productions/:id', function(req, res, next) {
  const productionId = req.params.id;
  knex('productions')
    .select()
    .where({
      id: productionId,
    })
    .then(productions => res.status(200).json(productions[0]))
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.post('/api/productions', function(req, res, next) {
  const newProduction = req.body;
  knex('productions')
    .returning(['id', 'name', 'company', 'url', 'copy', 'my_role'])
    .insert([
      {
        name: newProduction.name,
        company: newProduction.company,
        url: newProduction.url,
        copy: newProduction.copy,
        my_role: newProduction.my_role,
      },
    ])
    .then(resultArray => resultArray[0])
    .then(result => res.status(200).json(result))
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.put('/api/productions/:id', function (req, res, next) {
  const productionId = req.params.id;
  const productionFieldsToUpdate = req.body;
  knex('productions')
    .where('id', productionId)
    .update({
      ...productionFieldsToUpdate,
    })
  .then((count) => {
    console.log('Number of fields updated: ' + count);
    res.status(200).send();
  })
  .catch(error => {
    console.warn(error);
    res.status(400).json(error)
  });
});

router.delete('/api/productions/:id', function (req, res, next) {
  const productionId = req.params.id;
  knex('productions')
    .where('id', productionId)
    .del()
  .then((count) => {
    console.log('Number of productions deleted: ' + count);
    res.status(200).send();
  })
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

router.get('/api/shows/:id', function(req, res, next) {
  const showId = req.params.id;
  knex('shows')
    .select()
    .where({
      id: showId,
    })
    .then(shows => res.status(200).json(shows[0]))
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.post('/api/shows', function(req, res, next) {
  const newShow = req.body;
  knex('shows')
    .returning(['id', 'start', 'end', 'production_id', 'venue_id'])
    .insert([
      {
        start: newShow.start,
        end: newShow.end,
        production_id: newShow.production_id,
        venue_id: newShow.venue_id,
      },
    ])
    .then(resultArray => resultArray[0])
    .then(result => res.status(200).json(result))
    .catch(error => {
      console.warn(error);
      res.status(400).json(error)
    });
});

router.put('/api/shows/:id', function (req, res, next) {
  const showId = req.params.id;
  const showFieldsToUpdate = req.body;
  knex('shows')
    .where('id', showId)
    .update({
      ...showFieldsToUpdate,
    })
  .then((count) => {
    console.log('Number of fields updated: ' + count);
    res.status(200).send();
  })
  .catch(error => {
    console.warn(error);
    res.status(400).json(error)
  });
});

router.delete('/api/shows/:id', function (req, res, next) {
  const showId = req.params.id;
  const showFieldsToUpdate = req.body;
  knex('shows')
    .where('id', showId)
    .del()
  .then((count) => {
    console.log('Number of shows updated: ' + count);
    res.status(200).send();
  })
  .catch(error => {
    console.warn(error);
    res.status(400).json(error)
  });
});

module.exports = router;
