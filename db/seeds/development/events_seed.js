const moment = require('moment');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () { // Inserts seed entries one by one in series
      return knex('events').insert([
        {
          name: 'Falstaff',
          start: moment().year(2018).month(6).date(20).hour(18).minute(15).toISOString(),
          end: moment().year(2018).month(6).date(20).hour(22).toISOString(),
          venue_name: "Garsington Opera",
          venue_address: "Wormsley Estate, High Wycombe, HP14, England",
          venue_website: "http://garsingtonopera.org",
          copy: "The lecherous Falstaff, with his infamous roving eye, has finally met his match.",
        },
        {
          name: 'Magic Flute',
          start: moment().year(2018).month(6).date(21).hour(18).minute(15).toISOString(),
          end: moment().year(2018).month(6).date(21).hour(22).toISOString(),
          venue_name: "Garsington Opera",
          venue_address: "Wormsley Estate, High Wycombe, HP14, England",
          venue_website: "http://garsingtonopera.org",
          copy: "",
        },
        {
          name: 'Falstaff',
          start: moment().year(2018).month(6).date(22).hour(18).minute(15).toISOString(),
          end: moment().year(2018).month(6).date(22).hour(22).toISOString(),
          venue_name: "Garsington Opera",
          venue_address: "Wormsley Estate, High Wycombe, HP14, England",
          venue_website: "http://garsingtonopera.org",
          copy: "",
        },
      ]);
    });
};
