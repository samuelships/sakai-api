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


## Getting announcement for a site
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

## Getting assignments for a site
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

## API

* `SakaiAPI`
  * [`new SakaiAPI(config)`](#new)
  * [`.login(params)`](#login)
  * [`.getSiteAnnouncement(siteId)`](#getSiteAnnouncement)
  * [`.getUserAnnouncement()`](#getUserAnnouncement)
  * [`.getSiteAssignment(siteId)`](#getSiteAssignment)
  * [`.getItemAssignment(assignmentId)`](#getItemAssignment)
  * [`.getMyAssignment()`](#getMyAssignment)
  * [`.getSiteCalendar(siteId)`](#getSiteCalendar)
  * [`.getMyCalendar()`](#getMyCalendar)
  * [`.getEventCalendar(params)`](#getEventCalendar)
  * [`.getSite()`](#getSite)
  * [`.getSiteContent(siteId)`](#getSiteContent)


<a name="new"></a>
#### `SakaiAPI.new(config)`

Initialize new SakaiAPI.

| Param          | Type     | Description                      |
| -------------- | -------- | -------------------------------- |
| config.baseUrl | `String` | Baseurl - your institution's url |

* * *

<a name="login"></a>
#### `SakaiAPI.login(params)` => `null`

Returns the extracted meaning from a sentence, based on the context. 

| Param           | Type     | Description |
| --------------- | -------- | ----------- |
| params.username | `String` | Username    |
| params.password | `String` | Password    |

* * *

<a name="getSiteAnnouncement"></a>
#### `SakaiAPI.getSiteAnnouncement(siteId)` => `Promise`

Gets announcement for a specific site

| Param  | Type     | Description |
| ------ | -------- | ----------- |
| siteId | `String` | Site ID     |

* * *

<a name="getUserAnnouncement"></a>
#### `SakaiAPI.getUserAnnouncement()` => `Promise`

Gets all announcement for current user

* * *

<a name="getSiteAssignment"></a>
#### `SakaiAPI.getSiteAssignment(siteId)` => `Promise`

Gets assignments for a specific site

| Param  | Type     | Description |
| ------ | -------- | ----------- |
| siteId | `String` | Site ID     |

* * *

<a name="getItemAssignment"></a>
#### `SakaiAPI.getItemAssignment(assignmentId)` => `Promise`

Gets an assignment

| Param        | Type     | Description   |
| ------------ | -------- | ------------- |
| assignmentId | `String` | Assignment ID |

* * *

<a name="getMyAssignment"></a>
#### `SakaiAPI.getMyAssignment()` => `Promise`

Gets all assignments for current user

* * *

<a name="getSiteCalendar"></a>
#### `SakaiAPI.getSiteCalendar(siteId)` => `Promise`

Gets calendar for a specific site

| Param  | Type     | Description |
| ------ | -------- | ----------- |
| siteId | `String` | Site ID     |

* * *

<a name="getMyCalendar"></a>
#### `SakaiAPI.getMyCalendar()` => `Promise`

Gets all calendars for current user

* * *

<a name="getEventCalendar"></a>
#### `SakaiAPI.getEventCalendar(params)` => `Promise`

Gets calendar event for a specific site

| Param          | Type     | Description |
| -------------- | -------- | ----------- |
| params.siteId  | `String` | Site ID     |
| params.eventId | `String` | Event ID    |

* * *

<a name="getSite"></a>
#### `SakaiAPI.getSite()` => `Promise`

Gets sites for current user

* * *

<a name="getSiteContent"></a>
#### `SakaiAPI.getSiteContent(siteId)`

Gets content for a specific site

| Param  | Type     | Description |
| ------ | -------- | ----------- |
| siteId | `String` | Site ID     |

* * *

<a name="getMyContent"></a>
#### `SakaiAPI.getMyContent()`

Gets content for current user

* * *