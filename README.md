#Review

We've seen some more robust use of server-side page generation in this workshop using Express (running on Node.js). Concepts and techs covered include:

npm init to generate a package.json for a new Node project
installing Express and Morgan with npm install and the --save flag
using require to import modules
instantiating a new Express app with express()
Express middleware like Morgan intercepts all requests
registering middleware using app.use
passing control to following middleware using next
starting a server with app.listen
using nodemon and a start script to standardize & streamline dev work
basic GitHub collaboration using remotes, pushing & pulling
installing, requiring, and configuring Nunjucks in an Express app
combining a template with data and sending the result, all via res.render
Nunjucks markup tags for interpolation & logic
utlity functions via the Lodash library
modular program design: storing our data in a module with getters & setters
the basics of HTTP requests: URI (path) and VERB (method)
Express routing definitions like app.get and app.post
Modular routing using express.Router()
static routing from a file folder using express.static
dynamic routing using route parameters (req.params)
HTML form requests (POST) that are url-encoded
parsing HTTP request bodies with body-parsing middleware (req.body)
Reading query strings (req.query)
Bonus: incorporating socket.io into an Express app with modular routing

#Epilogue

This is a long, substantial workshop — a server-based web app with interactive functionality. We covered a LOT of material and it may seem overwhelming right now. However, realize that we are going to hit on Express concepts time and time again throughout the curriculum; this was an introduction, which you will reinforce in workshops to come.

##Express Material (high priority)

The following should be your main focus in studying / review:

HTTP communication
Common methods & their standard meanings
The req-res cycle
Components of a request or response
Installing Express
Instantiating an express app
Registering and using middleware
how app.use differs from app.get/app.post/app.put etc.
what req, res, and next are / do
normal vs. error-handling middleware
Commonly-used middleware (what each is & when you need it — setup is copy-paste)
Logging
Body parsing
Static routing
Routing requests (major topic, study carefully!)
methods vs. URIs
routing to sub-resources (e.g. kittens, kittens/123, kittens/123/friends)
URI parameters (e.g. kittens/:id) and how to access them
Query strings (e.g. kittens?color=calico) and how to access them
Request bodies (in JSON or URL-encoded) and how to access them
using modular sub-routers created with express.Router()
Back-end (server) vs. front-end (client)
Related topics

###In addition, the following topics are going to play a substantial part in upcoming workshops, though we will eventually move on to slightly different solutions:

Server-side templating with Nunjucks
res.render
what the locals object is/does
HTML forms
How to set a form method & uri
What kind of encoding forms use for request bodies
How a web browser reacts to the response for a form request
Ongoing practice

###The following topics are ongoing practice with Node and will continue to be important:

Writing Node modules
The require statement
module.exports
How a Node process differs from front-end code
Conclusion

Again, it is understandable that this may seem like a lot — it is! But we will keep practicing and getting used to these tools as they begin to layer up.