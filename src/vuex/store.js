import * as actions from './actions/'
import * as mutations from './mutations/'
import { state } from './state'

import { compareBasedOnNumber } from '../services/compareMethods4MostImportantGraph'

export default {
  state,
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  getters: { // TODO: Used param/getters to no repeat?
    getData4PopularStoresFiltered: state => {
      const arrayOrdered = state.data4PopularStores.slice().sort(compareBasedOnNumber)
      const arrayFiltered = arrayOrdered.slice(0, 3)
      return arrayFiltered
    },
    getData4MorePaymentStoresFiltered: state => {
      const arrayOrdered = state.data4MorePaymentStores.slice().sort(compareBasedOnNumber)
      const arrayFiltered = arrayOrdered.slice(0, 3)
      return arrayFiltered
    },
    getData4PopularTagsFiltered: state => {
      const arrayOrdered = state.data4PopularTags.slice().sort(compareBasedOnNumber)
      const arrayFiltered = arrayOrdered.slice(0, 3)
      return arrayFiltered
    }
  }
}
