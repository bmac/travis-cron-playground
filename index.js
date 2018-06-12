var Gists = require('gists');
var gists = new Gists({
    username: 'test262-automation',
    password: process.env.PASSWORD
});

var now = new Date();
gists.create({
    "description": `Gist created from travis-cron-playground at ${now.toString()}`,
    "public": false,
    "files": {
        "enviroment.json": {
            "content": JSON.stringify(process.env, null, 4)
        },
        "TRAVIS_EVENT_TYPE": {
            "content": String(JSON.stringify(process.env.TRAVIS_EVENT_TYPE))
        }
    }
}, (err, response) => console.log(response.message));


