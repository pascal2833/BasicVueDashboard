## Intro:
- A dashboard using Vue.js (2) and d3.js, among others.
- I used 2 components, one for distribution graphics and other one for most populars data.
- Responsive.
- No back end part, to generate data, I used a js file to create random data to simulate true ones when aplication starts.
- Then, to add data and simulate a real application with request to a database, i created every 10'' a new order that I add in the application state.
- So, when we click on refresh, we have a set of initial orders and then, graphs changed because every 10'', new orders arrived.

## Screenshots:
#### Desktop:
![Desktop version](/home/pascal/workSpace/www-dev/public/glovo/src/assets/dasboard_desktop.png  "Desktop version")

#### Tablet:
![Tablet version](/home/pascal/workSpace/www-dev/public/glovo/src/assets/dasboard_tablet.png  "Desktop version")

#### Mobile:
![Mobile version:](/home/pascal/workSpace/www-dev/public/glovo/src/assets/dasboard_mobile.png  "Mobile version")


## What I didn't do but that I would like to  do:
- Put data in localstorage to avoid lost of data when referesh.
- Increase circles graphics proportionaly to the values.
- Filter orders by date (in this case, orders are all set for the same day so it doesn't make sense but it something important).


## To start the application:

npm install
npm run dev -> open localhost:8080, 8081

