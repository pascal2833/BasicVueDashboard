/* const Koa = require('koa')
const KoaRouter = require('koa-router')
const cors = require('@koa/cors')
const data = require('./data')

const app = new Koa()
const router = new KoaRouter()

router.get('/', (ctx, next) => {
  ctx.body = 'Hello there!'
})

router.get('/orders', (ctx, next) => {
  let orders = []
  let now = new Date().getTime()
  for (let i = 0; i < 100; i++) {
    let order = generateOrder(now)
    orders.push(order)
  }
  ctx.body = orders
}) */

let data = require('./data')

const generateOrder = (now) => {
  // Start time between now and 10 minutes ago
  let startTime = new Date(getRandomStartTime(now))
  let endTime = new Date(getRandomEndTime(startTime))
  let category = getRandomCategory()
  let store = getRandomStore(category)
  let amount = getRandomAmount()
  let status = getRandomStatus()
  return {
    startTime,
    endTime,
    category,
    ...store,
    amount,
    status
  }
}

function getRandomCategory () {
  return Object.keys(data)[getRandomInt(0, 3)]
}

function getRandomStore (category) {
  let stores = data[category]
  return stores[getRandomInt(0, stores.length)]
}

function getRandomStartTime (now) {
  return now - getRandomInt(0, 500) * 60 * 1000 * 24
}

function getRandomEndTime (startTime) {
  return startTime + getRandomInt(12, 48) * 60 * 1000
}

function getRandomAmount () {
  let amount = Math.random() * (27 - 6) + 6
  return Math.round(amount * 100) / 100
}

function getRandomStatus () {
  return Math.random() > 0.05 ? 'Delivered' : 'Cancelled'
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
}

/* app
  .use(router.routes())
  .use(cors())
  .use(async ctx => {
    ctx.body = 'Hello World'
  })

app.listen(3000, (err) => {
  console.log(`listening to port 3000`)
  console.log(err)
}) */

export { generateOrder }
