const moment = require('moment');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('productions').del(),
    knex('shows').del(),
    knex('venues').del(),
  ])
    .then(function () {
      return knex('venues').insert([
        {
          venue_name: "Garsington Opera",
          venue_address: "Wormsley Estate, Buckinghamshire, HP14 3YG",
          venue_website: "http://garsingtonopera.org",
        },
        {
          venue_name: "Maldon Choral Society",
          venue_address: "United Reformed Church, Market Hill, Maldon, CM9 4PZ",
          venue_website: "http://www.maldonchoralsociety.org.uk/",
        },
      ]);
    })
    .then(function () {
      return knex('productions').insert([
        {
          name: 'Verdi - Falstaff',
          company: "Garsington Opera",
          url: 'http://www.garsingtonopera.org/performance/falstaff',
          copy: 'The lecherous Falstaff, with his infamous roving eye, has finally met his match. His underhand plans to solve money troubles have the three merry wives of Windsor conspiring to teach him a lesson. They are not the only ones with a grudge to bear and he is soon tormented at every turn until he admits defeat and concludes that  all the world is a joke.',
          my_role: 'Chorus',
        },
        {
          name: 'Mozart - Magic Flute',
          company: "Garsington Opera",
          url: 'http://garsingtonopera.org/performance/die-zauberflote',
          copy: "Mozart’s much-loved final opera, The Magic Flute, celebrates the triumph of love and reason over chaos and evil. Prince Tamino and the bird-catcher Papageno set out on a perilous quest to rescue Pamina from the evil Sarastro. But is everything as it seems? As they enter Sarastro's world they must overcome a series of trials to be reunited with their true loves.",
          my_role: 'Chorus',
        },
        {
          name: 'Strauss - Capriccio',
          company: "Garsington Opera",
          url: 'http://garsingtonopera.org/performance/die-zauberflote',
          copy: "A poet, Olivier, and his rival, the composer Flamand, vie for the primacy of their art and for the love of the Countess, whose charm and artistic refinement they find irresistible. A gathering for the Countess's birthday sets the scene for an evening of passionate discussions between the guests. What is more important: words or music?",
          my_role: 'Diener, understudying Count',
        },
        {
          name: 'Haydn - The Creation',
          company: "Maldon Choral Society",
          url: 'http://www.maldonchoralsociety.org.uk/Program.html',
          copy: "Haydn's epic choral masterpiece",
          my_role: 'Bass soloist',
        },
      ]);
    })
    .then(function() {
      return Promise.all([
        knex('productions').where({ name: 'Mozart - Magic Flute'}).select('id'),
        knex('venues').where({ venue_name: "Garsington Opera" }).select('id'),
      ]);
    })
    .then(function(values) {
      const magicFluteId = values[0][0].id; // have to drill down into result array then object
      const garsingtonVenueId = values[1][0].id;
      return knex('shows').insert([
        {
          start: moment().year(2018).month(6).date(17).hour(18).toISOString(),
          end: moment().year(2018).month(6).date(17).hour(22).toISOString(),
          production_id: magicFluteId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(6).date(22).hour(18).toISOString(),
          end: moment().year(2018).month(6).date(22).hour(22).toISOString(),
          production_id: magicFluteId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(6).date(24).hour(18).toISOString(),
          end: moment().year(2018).month(6).date(24).hour(22).toISOString(),
          production_id: magicFluteId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(6).date(30).hour(18).toISOString(),
          end: moment().year(2018).month(6).date(30).hour(22).toISOString(),
          production_id: magicFluteId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(7).date(11).hour(18).toISOString(),
          end: moment().year(2018).month(7).date(11).hour(22).toISOString(),
          production_id: magicFluteId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(7).date(17).hour(18).toISOString(),
          end: moment().year(2018).month(7).date(17).hour(22).toISOString(),
          production_id: magicFluteId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(7).date(19).hour(18).toISOString(),
          end: moment().year(2018).month(7).date(19).hour(22).toISOString(),
          production_id: magicFluteId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(7).date(21).hour(18).toISOString(),
          end: moment().year(2018).month(7).date(21).hour(22).toISOString(),
          production_id: magicFluteId,
          venue_id: garsingtonVenueId,
        },
      ]);
    })
    .then(function() {
      return Promise.all([
        knex('productions').where({ name: 'Strauss - Capriccio'}).select('id'),
        knex('venues').where({ venue_name: "Garsington Opera" }).select('id'),
      ]);
    })
    .then(function(values) {
      const capriccioId = values[0][0].id; // have to drill down into result array then object
      const garsingtonVenueId = values[1][0].id;
      return knex('shows').insert([
        {
          start: moment().year(2018).month(6).date(20).hour(18).minute(15).toISOString(),
          end: moment().year(2018).month(6).date(20).hour(22).minute(5).toISOString(),
          production_id: capriccioId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(6).date(23).hour(18).minute(15).toISOString(),
          end: moment().year(2018).month(6).date(23).hour(22).minute(5).toISOString(),
          production_id: capriccioId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(6).date(28).hour(18).minute(15).toISOString(),
          end: moment().year(2018).month(6).date(28).hour(22).minute(5).toISOString(),
          production_id: capriccioId,
          venue_id: garsingtonVenueId,
        },
      ]);
    })
    .then(function() {
      return Promise.all([
        knex('productions').where({ name: 'Verdi - Falstaff'}).select('id'),
        knex('venues').where({ venue_name: "Garsington Opera" }).select('id'),
      ]);
    })
    .then(function(values) {
      const falstaffId = values[0][0].id; // have to drill down into result array then object
      const garsingtonVenueId = values[1][0].id;
      return knex('shows').insert([
        {
          start: moment().year(2018).month(6).date(16).hour(18).minute(30).toISOString(),
          end: moment().year(2018).month(6).date(16).hour(22).toISOString(),
          production_id: falstaffId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(6).date(18).hour(18).minute(30).toISOString(),
          end: moment().year(2018).month(6).date(18).hour(22).toISOString(),
          production_id: falstaffId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(6).date(21).hour(18).minute(30).toISOString(),
          end: moment().year(2018).month(6).date(21).hour(22).toISOString(),
          production_id: falstaffId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(6).date(29).hour(18).minute(30).toISOString(),
          end: moment().year(2018).month(6).date(29).hour(22).toISOString(),
          production_id: falstaffId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(7).date(4).hour(18).minute(30).toISOString(),
          end: moment().year(2018).month(7).date(4).hour(22).toISOString(),
          production_id: falstaffId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(7).date(7).hour(18).minute(30).toISOString(),
          end: moment().year(2018).month(7).date(7).hour(22).toISOString(),
          production_id: falstaffId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(7).date(13).hour(18).minute(30).toISOString(),
          end: moment().year(2018).month(7).date(13).hour(22).toISOString(),
          production_id: falstaffId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(7).date(15).hour(18).minute(30).toISOString(),
          end: moment().year(2018).month(7).date(15).hour(22).toISOString(),
          production_id: falstaffId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(7).date(20).hour(18).minute(30).toISOString(),
          end: moment().year(2018).month(7).date(20).hour(22).toISOString(),
          production_id: falstaffId,
          venue_id: garsingtonVenueId,
        },
        {
          start: moment().year(2018).month(7).date(22).hour(18).minute(30).toISOString(),
          end: moment().year(2018).month(7).date(22).hour(22).toISOString(),
          production_id: falstaffId,
          venue_id: garsingtonVenueId,
        },
      ]);
    })
    .then(function() {
      return Promise.all([
        knex('productions').where({ name: 'Haydn - The Creation'}).select('id'),
        knex('venues').where({ venue_name: "Maldon Choral Society" }).select('id'),
      ]);
    })
    .then(function(values) {
      const creationId = values[0][0].id; // have to drill down into result array then object
      const maldonChoralVenueId = values[1][0].id;
      return knex('shows').insert([
        {
          start: moment().year(2018).month(7).date(14).hour(19).minute(30).toISOString(),
          end: moment().year(2018).month(7).date(14).hour(22).toISOString(),
          production_id: creationId,
          venue_id: maldonChoralVenueId,
        },
      ]);
    });
};
