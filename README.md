## Intro:
- A dashboard using Vue.js and d3, among others.
- Responsive.
- No back end part, to generate data, I used a js file to create random data to simulate true ones when aplication starts.
- Then, to add data and similate a real application with request to a database, i created every 10'' a new order that I add in the application state.
- So, when we click on refresh, we have a set of initial orders and then, graphs changed because every 10'', new orders arrived.

## Screenshots:


## What I didn't do but that I would like to  do:
- Put data in localstorage to avoid lost of data when referesh.
- Increase circles graphics proportionaly to the values.
- Filter orders by date (in this case, orders are all set for the same day so it doesn't make sense but it something important).


## To start the application:

npm install
npm run dev -> open localhost:8080, 8081

