# CRUD Admin Portal

# Requirements
1. Node, NPM
2. Docker
3. Git
# Steps to set up
1. Clone the repo using `Git clone <repo link>`

2. Set up the Mongo DB container locally [link](https://www.code4it.dev/blog/run-mongodb-on-docker)
    
    a. Install Docker

    b. Type in `Docker pull mongo` within Powershell,Terminal etc.

    c. Activate the container using the image with the following line
    `docker run -d  --name mongo-on-docker  -p 27888:27017 mongo`

2. Run `npm i` within `api_admin` & `api` folders

3. Initiate the web app
    
    a. Run `npm run start` in the api_admin folder
    b. Run `npm run start` in the app folder