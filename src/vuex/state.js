import data from '../services/data'

const getData4OrdersPriceCategoryDistribution = () => {
  const categoriesArray = []
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      categoriesArray.push(key)
    }
  }
  return categoriesArray.map(category => {
    const object = {xAxeData: category, yAxeData: 0} // xAxeData = categories, yAxeData = Price.
    return object
  })
}

const getStoresArray = () => {
  const storesArray = []
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      for (let i = 0; i < data[key].length; i++) {
        storesArray.push(data[key][i].store)
      }
    }
  }
  return storesArray
}
const getData4MostPopularStores = () => {
  return getStoresArray().map(store => {
    const object = {dataName: store, dataQuantity: 0}
    return object
  })
}

const getData4MostPopularTags = () => {
  const tagsArray = []
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      for (let i = 0; i < data[key].length; i++) {
        for (let ii = 0; ii < data[key][i].tags.length; ii++) {
          if (tagsArray.indexOf(data[key][i].tags[ii]) < 0) { // To avoid repetitions.
            tagsArray.push(data[key][i].tags[ii])
          }
        }
      }
    }
  }
  return tagsArray.map(tag => {
    const object = {dataName: tag, dataQuantity: 0}
    return object
  })
}

export const state = {
  drawGraphsWithNewData: 0,
  ordersDataArray: [],
  data4OrdersTimeDistribution: [{xAxeData: '0-6h', yAxeData: 0}, {xAxeData: '6-12h', yAxeData: 0}, {xAxeData: '12-18h', yAxeData: 0}, {xAxeData: '18-24h', yAxeData: 0}], // xAxeData = timeZone, yAxeData = numOrders.
  data4OrdersPriceCategoryDistribution: getData4OrdersPriceCategoryDistribution(), // [{}, {}, ...]
  data4PopularStores: getData4MostPopularStores(),
  data4MorePaymentStores: getData4MostPopularStores(),
  data4PopularTags: getData4MostPopularTags()
}
