import data from '../services/data'

const getCategoriesArray = () => {
  const categoriesArray = []
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      categoriesArray.push(key)
    }
  }
  return categoriesArray
}

const getData4OrdersPriceCategoryDistribution = () => {
  return getCategoriesArray().map(category => {
    const object = {xAxeData: category, yAxeData: 0} // xAxeData = categories, yAxeData = Price.
    return object
  })
}

export const state = {
  drawGraphsWithNewData: false,
  ordersDataArray: [],
  data4OrdersTimeDistribution: [{xAxeData: '0-6h', yAxeData: 0}, {xAxeData: '6-12h', yAxeData: 0}, {xAxeData: '12-18h', yAxeData: 0}, {xAxeData: '18-24h', yAxeData: 0}], // xAxeData = timeZone, yAxeData = numOrders.
  data4OrdersPriceCategoryDistribution: getData4OrdersPriceCategoryDistribution() // [{}, {}, ...]
}
