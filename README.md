## Intro:
- I've done this project entirely with a front-end part, with vue.
- I quit the part of the code related with teh node server because I don't have accees to any any data base to keep the orders generated so it doesn't really make sense. 
- To create "fake" orders, I used the script and whan the page open, I created X initial orders in one second that I put in the application state (I used Vue.js).
- Then, to add data and similate a real application with request to a database, i created every 10'' a new order that I add in the application state.
- So, when we click on refresh, we have a set of initial orders and then, graphs changed because every 10'', new orders arrived.

## What I didn't do but that I would like to  do:
- Put data in localstorage to avoid lost of data when referesh.
- Increase circles graphics proportionaly to the values.
- Filter orders by date (in this case, orders are all set for the same day so it doesn't make sense but it something important).


## To start the application:

npm install
npm run dev -> open localhost:8080, 8081

