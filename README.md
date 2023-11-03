# Voting polls and trend

## Installation Steps:

1. Install nodejs and npm on your device.
2. Clone the repository to your local system.
3. In the root folder, create a '.env' file
4. `cd client` and run `npm install`
5.  `cd server` and run `npm install`
6. Create a MongoDB Atlas server and get the MongoDB uri
7. Add env variables as "MONGO_URI" to the .env file
8. Add a PORT variable and JWT_SECRET variable too.
9. Set PORT = 5000
10. Set JWT_SECRET as a string of your choice.


## Steps to run the project

1. Open up the command terminal from the root directory and `cd server` and  `yarn dev` to start the backend server.

2. Open another command prompt and type the following to start the frontend.  
`cd client`  
`npm run dev/ yarn run dev`

3. The application would be run on localhost:5173


## List of implemented features


*  Fully responsive and stylised Header and Hero Section
* Voter can be registered giving the following inputs, `name`, `email`, `voting choice`, `date`
* Voter page is implemented which has the list of already registered voters, the buttons to register voters and buttons to dlete the voters
* The same voter page has the integrated line charts and the bar charts
* Both the charts has number of `false`/`true` votes in the X-axis and the `date` in the Y-axis



## References
* Stack Overflow
* Mongodb documentation
* Nodejs documentation
* W3School
* Youtube
* Mongoose JS docs
* Javascript docs

#The supported pictures are uploaded in the screenshot directory


















