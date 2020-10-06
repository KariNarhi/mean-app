# MEAN stack tutorial

MongoDB, Express, Angular, Node.js

The API uses JWT (JSON Web Token) for registering users into MongoDB and authenticating the users. App uses Passport + Passport-JWT and JWT Strategy.

<br>

# Usage (so far):

> npm install to install dependencies.

> npm start for starting the backend Node.js/Express server.

# Endpoints

> POST /users/register

> POST /users/authenticate &nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; //Gives back an authentication token

> GET /users/profile &nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; // Needs JSON Web Token for authorizing
