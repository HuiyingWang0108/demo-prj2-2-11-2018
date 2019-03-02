# About this Project
## Scope:
### User Management:
+ Users can login by third party, wechat
+ Users can signup/login by email
+ Users can edit personal info, like contact info, address, etc

### Product Management:
+ Product can be edited info, like price, photo, usage status, original price, purchased year, etc
+ Product can be deleted
+ Product can be added/created
+ Product can be edited status, like pending/hold, wanted, etc

### Post Management:
+ Post can be deleted
+ Post can be added/created
+ Post can be edited status, like pending/hold, wanted etc
+ Post can be edited info, like add more products, remove some products, etc

### Search Management:
+ Product can be searched by one zipcode or multiple zipcode
+ Product can be searched by category
+ Product can be searched by product keywords, like part of product name

### Amazon Price Compare Management:
+ Product's price can be compared with amazon's item
+ Product's price can show discount info

### Notification Management:
+ When a user publishes a post(for sale/wanted), his/her nearby friends(in the same wechat group) can get a notification.
+ When a user publishes a post(for sale), somebody(who wanted some of the products in this post) can get a notification.

## Technology:
### 1 Develop Environment: VSCode
### 2 Develop technology: Express, NodeJS, Handlebars, Sequelize, Mysql, AWS S3
### 3 passport and multer
## deployed in heroku link:
### https://vast-dusk-42594.herokuapp.com/index
## How to use:
### pull this from github:git clone https://github.com/HuiyingWang0108/demo-prj2-2-11-2018
### change config/config.json file using your database
### change index.handlebars and directionMap.handlebars and use your own google map api
### According to https://medium.com/@imranhsayed/file-or-image-uploads-on-amazon-web-services-aws-using-react-node-and-express-js-aws-sdk-252742286162 and add your own aws key and secret in imageRoutes.js
### in the project folder run: node server.js
## Website Map:

![alt text](https://github.com/HuiyingWang0108/prj2Demo/blob/master/siteFlowMap/siteMap.png)

## DB UML Diagram:
### Aggregation implies a relationship where the child(posts table) can exist independently of the parent(users). Bellow is the UML diagram.

![alt text](https://github.com/HuiyingWang0108/prj2Demo/blob/master/siteFlowMap/db.png)

## Data Flow:

![alt text](https://github.com/HuiyingWang0108/prj2Demo/blob/master/siteFlowMap/dataFlow.png)
