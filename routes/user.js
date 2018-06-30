// from https://gist.github.com/laurenfazah/f9343ae8577999d301334fc68179b485
const database = require('../db/knex.js');
const bcrypt = require('bcrypt'); // bcrypt will encrypt passwords to be saved in db
const crypto = require('crypto'); // built-in encryption node module

const signup = (request, response) => {
  const user = request.body;
  hashPassword(user.password)
    .then(hashedPassword => {
      delete user.password;
      user.password_digest = hashedPassword;
    })
    .then(() => createToken())
    .then(token => (user.token = token))
    .then(() => createUser(user))
    .then(user => {
      delete user.password_digest;
      console.log(`New account created. username: '${user.username}'`);
      response.status(201).json({ user });
    })
    .catch(err => console.error(err));
};

const hashPassword = password => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash);
    }),
  );
};

const createUser = user => {
  // save user to db
  return database('users')
    .returning(['id', 'username', 'created_at', 'token'])
    .insert([
      {
        username: user.username,
        password_digest: user.password_digest,
        token: user.token,
        created_at: new Date(),
      },
    ])
    .then(dataArray => dataArray[0]);
};

// crypto ships with node - we're leveraging it to create a random, secure token
const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString('base64'));
    });
  });
};

const signin = (request, response) => {
  const userReq = request.body;
  let user;

  findUser(userReq)
    .then(foundUser => {
      user = foundUser;
      return checkPassword(userReq.password, foundUser);
    })
    .then(res => createToken())
    .then(token => updateUserToken(token, user))
    .then(newUserDetails => {
      // newUserDetails includes id, username and token
      console.log(`User '${newUserDetails.username}' just logged in.`);
      response.status(200).json(newUserDetails);
    })
    .catch(err => console.error(err));
};

const findUser = userReq => {
  return database('users')
    .select()
    .where({
      username: userReq.username,
    })
    .then(dataArray => dataArray[0]);
};

const checkPassword = (reqPassword, foundUser) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(reqPassword, foundUser.password_digest, (err, response) => {
      if (err) {
        reject(err);
      } else if (response) {
        resolve(response);
      } else {
        reject(new Error('Passwords do not match.'));
      }
    }),
  );
};

const updateUserToken = (token, user) => {
  return database('users')
    .where('id', user.id)
    .returning(['id', 'username', 'token'])
    .update({
      token: token,
    })
    .then(dataArray => dataArray[0]);
};

function isAuthenticated(req, res, next) {
  const userReq = req.body;
  if (userReq.token) {
    // token must exist and match the correct user
    findByToken(userReq.token).then(userFromDB => {
      if (userFromDB) {
        // user with matching token found
        console.log(
          `Valid token - user '${userFromDB.username}' is authenticated`,
        );
        delete req.body.token;
        return next(); // hand off to next function in middleware chain (probably the endpoint)
      } else {
        // no matching token found
        console.log('[401] No matching token found.');
        res.status(401).end();
      }
    });
  } else {
    // token not  supplied in the request body
    console.log("[401] Token wasn't present in the request body.");
    res.status(401).end();
  }
}

const findByToken = token => {
  return database('users')
    .select()
    .where({
      token: token,
    })
    .then(dataArray => dataArray[0]);
};

module.exports = {
  signup,
  signin,
  isAuthenticated,
};
