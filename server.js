const jsonServer = require('json-server');
const server = jsonServer.create();
const fs = require("fs");
const tempDir = require("os").tmpdir();
var path = require("path");

const filePath = path.join(tempDir, "db.json");

const data = {
  "feedback": [{
      "text": "Great service, my family love the place!",
      "rating": 10,
      "id": 1
    }
  ]
}

try {

  console.log(`chekcing if ${filePath} exists`);
  if (!fs.existsSync(filePath)) {
    // check if db.json file does not exists and create one\
    
    console.log(`writing to ${filePath}`);
    fs.writeFile(filePath, JSON.stringify(data), function (err) {
      if (err) throw err;
      console.log(`db created at ${filePath}`);
    });
  }
  console.log(`${filePath} already exists!`);

} catch (err) {
  console.log("Following error ocurred! :/");
  console.error(err);
}


// use router to route to db.json
const router = jsonServer.router(filePath);

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);

server.use(router)
server.listen(port, () => {
  console.log("JSON Server is running at: "+port);
});

// Export the Server API
module.exports = server