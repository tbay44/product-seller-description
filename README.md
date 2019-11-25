# tBay

> Product and seller description, microservice that mimics that of an eBay product page. This component was built with React and display product information that is retrieved from a MongoDB database as well product ratings based on data given from the reviews microservice.

## Related Projects

  - https://github.com/tbay44/reviews
  - https://github.com/tbay44/image-gallery
  - https://github.com/tbay44/carousel
  - https://github.com/tbay44/personal-carousel
  - https://github.com/tbay44/search-bar
  - https://github.com/tbay44/proxy
  
## Table of Contents

1. [Getting Started](#Usage)
1. [Requirements](#requirements)
1. [Technologies](#technologies)

## Getting Started
1. Install npm packages:
```
npm install
```
2. Start the server (default port is 3007)
```
npm run server
```
3. Bundle code with Webpack
```
npm run build
```
4. Setup MongoDB locally or on MongoDB Atlas
5. Change `DB_CONNECTION` in `db/db.js` to connect to your local or hosted database
6. Uncomment lines 4 and 44 in `db/db.js` and save 1 time to seed database with data `from db/data.js`
7. Navigate to localhost:3007

## Requirements
1. MongoDB / MongoDB Atlas

## Technologies 
* MongoDB
* React
* Node
* Express
* Docker

