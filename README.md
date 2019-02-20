# About this Project
## Function:
### 1 Users can create an account or not.
### 2 Users can create a posting to sell one’s baby used item or to get one.
### 3 Users can see the list of posting they had if they had the account.
### 4 Users can search for baby used item  (compare with it to Amazon’s same item by baby used item).
### 5 Users can search for baby used item near them by zip code.
## Technology:
### 1 Develop Environment: VSCode
### 2 Develop technology: Express, NodeJS, Handlebars, Sequelize, Mysql, AWS S3
### 3 passport and multer
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

