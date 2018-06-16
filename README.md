# website
Singing website

## todo
1. add date/time display logic to events (base it off your python code)
  - install moment on frontend for easy date comparison
  - if same day, display: startTime - endTime, Date
  - if show run, display them individually with details repeated
1. contact form works on heroku
1. check all working on heroku
1. link to .com domain


then basic website is up :)

## next
1. remove github static site build thing
1. make soundcloud for recordings, upload >= 1
1. make instagram for images and short videos
1. make media page and embed soundcloud and instagram
1. improve style: get ideas, colour schemes from templates and sites and play for half an hour
1. install wordpress on blog subdomain
1. write blog post
1. diary app
   - make create, edit, delete endpoints
   - then can generate admin interface to easily add events, using https://marmelab.com/react-admin, if necessary

## done
- make pgdb data model
- make endpoint to getAll events
- display events on diary page
- fix heroku installation: the postinstall script loops forever
  - this was because it had `npm install` in it, which then triggered another postinstall
  - only needed the postinstall because of the project directory structure: the server dir was inside a top level dir: I flattened the structure so the server is top level - easier when working with heroku
- get database working on heroku https://devcenter.heroku.com/articles/heroku-postgresql
   - check that the heroku config is being correctly loaded - yes
   - simplify knex config - worked :)
1. run knex seed on heroku
1. contact form working locally https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app
1. image on each page
1. make tables
   - a production (name, copy, my_role)
   - has multiple shows (start, finish, FK to venue, FK to production)
   - venues have website, address
1. add all current events to knex seed file
1. All events endpoint generates list of all events
