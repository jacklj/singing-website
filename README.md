# website
Singing website

## todo
1. get database working on heroku https://devcenter.heroku.com/articles/heroku-postgresql
   - cant run knex commands. this may be because knex not installed in top level dir. So i installed it in top level dir, modified postinstall script to do npm install in bot dop level dir and /server, but then this seems to have caused an infinite loop in heroku deployment. Ive removed the github watch pipe thing as i read somewhere that could be it. Want to try and deploy again, but i cant stop the current looping deployment - need to wait for it to timeout.
1. run knex seed on heroku
1. contact form https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app
1. image on each page
1. add date/time display logic to events (base it off your python code)
1. add all current events to knex seed file
1. check all working on heroku
1. link to .com domain

then basic website is up :)

## next
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
