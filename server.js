/**
 * File: server.js
 * Author: Stef Timmermans
 * Date: 10 November 2023
 * Description:
 *   This is the entry point for the application. It holds
 *   the routes for the users, the boats, and the loads.
 *   It involves making JWTs through Auth0, and using
 *   Google Cloud Datastore to store the data. It is hosted
 *   on Gloogle Cloud App Engine.
 * 
 *   Some of this file's contents are based on existing
 *   code from the Oregon State University's CS 493 ecampus
 *   course.
 */

const express = require('express');                         // Express for web framework
const app = express();                                      // Create an Express app
const { Datastore } = require('@google-cloud/datastore');   // Google Cloud Datastore for noSQL database
const bodyParser = require('body-parser');                  // Body parser for parsing JSON
require('dotenv').config();                                 // Dotenv for environment variables
const jwt = require('express-jwt');                         // JWT for authentication
const jwksRsa = require('jwks-rsa');                        // JWKS for authentication

// Use EJS for templating
app.set('view engine', 'ejs');                              // Set EJS as templating engine
app.set('views', __dirname + '/views');                     // Set views directory

// Use express-openid-connect for authentication
// const { auth, requiresAuth } = require('express-openid-connect');

// Use body parser for parsing JSON
app.use(bodyParser.json());

// Keyile for local development
// const keyfile = './keyfile.json';

// Datastore for local development
// const datastore = new Datastore({ keyFilename: keyfile });

// Datastore for Google Cloud App Engine
//const datastore = new Datastore();

// Constants for the datastore
const USER = "User";
const BOAT = "Boat";
const LOAD = "Load";

// Secrets for JWT using the .env file
// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const DOMAIN = process.env.DOMAIN;

// Configure express-openid-connect
// THIS NEEDS TO BE MODIFIED FOR THIS PROJECT
// https://www.npmjs.com/package/express-openid-connect
/*
app.use(auth({
    issuerBaseURL: `https://${DOMAIN}`,
    baseURL: 'https://hw2-timmerms.uw.r.appspot.com', // This needs to be changed for dev/prod mode
    clientID: CLIENT_ID,
    secret: CLIENT_SECRET,
    idpLogout: true,
    authRequired: false,
    auth0Logout: true,
    afterCallback: (req, res, session, decodedState) => {
        return res.redirect('/user-info');
    }
}));
*/

function fromDatastore(item) {
    item.id = item[Datastore.KEY].id;
    return item;
}

/*
// Enforce JWT authentication
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${DOMAIN}/.well-known/jwks.json`
    }),
  
    // Validate the audience and the issuer.
    issuer: `https://${DOMAIN}/`,
    algorithms: ['RS256']
});

// Check JWT but don't enforce it
const checkJwtOptional = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${DOMAIN}/.well-known/jwks.json`
    }),

    // Validate but bypass throwing error if JWT is invalid
    issuer: `https://${DOMAIN}/`,
    algorithms: ['RS256'],
    credentialsRequired: false
});
*/

/* ---- Begin User Model Functions ---- */

/* ---- End User Model Functions ---- */

/* ---- Begin Boat Model Functions ---- */

/* ---- End Boat Model Functions ---- */

/* ---- Begin Load Model Functions ---- */

/* ---- End Load Model Functions ---- */

/* ---- Begin Boat/Load Model Functions ---- */

/* ---- End Boat/Load Model Functions ---- */

/* ---- Begin User Routes ---- */

/* ---- End User Routes ---- */

/* ---- Begin Boat Routes ---- */

/* ---- End Boat Routes ---- */

/* ---- Begin Load Routes ---- */

/* ---- End Load Routes ---- */

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
