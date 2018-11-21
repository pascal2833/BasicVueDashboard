export const setData4PopularStoresAction = ({state, commit}, orderData) => {
  for (let i = 0; i < state.data4PopularStores.length; i++) {
    if (state.data4PopularStores[i].dataName === orderData.store) {
      commit('setData4PopularStoresMutation', i)
    }
  }
}
