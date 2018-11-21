import * as actions from './actions/'
import * as mutations from './mutations/'
import { state } from './state'

export default {
  state,
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  getters: {
    getData4PopularStoresOrdered: state => {
      const compareBaseOnNumber = (a, b) => {
        const elementA = a['dataQuantity']
        const elementB = b['dataQuantity']
        let comparison = 0
        if (elementA > elementB) {
          comparison = -1
        } else if (elementA < elementB) {
          comparison = 1
        }
        return comparison
      }
      return state.data4PopularStores.sort(compareBaseOnNumber)
    }
    /* getData4PopularTagsOrdered: state => {
      const getTagsArray = () => {
        const tagsArray = []
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            for (let i = 0; i < data[key].length; i++) {
              tagsArray.push(data[key][i].store)
            }
          }
        }
        return getTagsArray
      }
      return getTagsArray().map(tag => {
        const object = {dataName: tag, dataQuantity: 0}
        return object
      })
    } */
  }
}
