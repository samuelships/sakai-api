# Sakai API
Unofficial wrapper for the `Sakai` API


## Installation
```js
$ npm install sakai-api
```


## Authenticate
Before you can take any actions you need to be `authenticated`.
```js

const SakaiAPI = require("sakai-api").default;

(async () => {
    const API = new SakaiAPI();
    await API.login({ username: "xxx", password: "xxx" });
})();

```


## Gettings announcement for a site
```js
const SakaiAPI = require("sakai-api").default;

(async () => {
    const API = new SakaiAPI();
    await API.login({ username: "xxx", password: "xxx" });

    const siteId = "xxx"; // <---- site id
    let announcement = await API.getSiteAnnouncement(siteId);
    console.log(announcement.data);
})();
```

## Gettings assignments for a site
```js
const SakaiAPI = require("sakai-api").default;

(async () => {
    const API = new SakaiAPI();
    await API.login({ username: "xxx", password: "xxx" });

    const siteId = "xxx"; // <---- site id
    let assignment = await API.getSiteAssignment(siteId);
    console.log(assignment.data);
})();
```


## Error handling
Any unsuccessful action will throw an error. If you want to mitigate that you need to catch it.

```js
const SakaiAPI = require("sakai-api").default;

(async () => {
    const API = new SakaiAPI();
    try {
        await API.login({ username: "xxx", password: "xxx" });

        const siteId = "xxx"; // <---- site id
        let assignment = await API.getSiteAssignment(siteId);
        console.log(assignment.data);
    } catch (e) {
        console.log(e)
    }
})();
```