# Nakanim API
![npm version](https://img.shields.io/npm/v/@ablanc/nakanim-api)
![build status](https://travis-ci.com/adblanc/Nakanim-api.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/adblanc/Nakanim-api/badge.svg?branch=master)](https://coveralls.io/github/adblanc/Nakanim-api?branch=master)
<br/>

## Description

This is a Node.js module written in Typescript that wraps http://www.nakanim.com API.

## Installation

`npm install @ablanc/nakanim-api`
<br/>
#### or
`yarn add @ablanc/nakanim-api`

## Examples
On the top, you must include the package
##### Using Typescript
```typescript
//index.ts
import { getAllAnimes, getAnime, getRandomAnime, getCalendar } from "@ablanc/nakanim-api";
```
##### Using Javascript
```javascript
//index.js
const { getAllAnimes, getAnime, getRandomAnime, getCalendar } = require("@ablanc/nakanim-api");
```
Then, you can use the different functions to access the API :

```typescript
async function example() {
  const animes = await getAllAnimes();
  const animeSpecific = await getAnime("6532362183218") // id of the anime (this one is incorrect)
  
  const randomAnime = await getRandomAnime(); // returns the random anime of the day
  const randomAnimeSpecific = await getRandomAnime("25/12/2019"); // returns the random anime for a specific date
  
  const calendar = await getCalendar(); // returns the calendar for the current week
  const calendarSpecific = await getCalendar("2019-12-23"); // returns the calendar for the given week (you must pass monday's date)
}
```
## Tests

Tests are run using Jest framework. <br/>
`$ npm test`
