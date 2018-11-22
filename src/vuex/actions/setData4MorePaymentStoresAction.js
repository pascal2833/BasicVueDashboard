export const setData4MorePaymentStoresAction = ({state, commit}, orderData) => {
  for (let i = 0; i < state.data4MorePaymentStores.length; i++) {
    if (state.data4MorePaymentStores[i].dataName === orderData.store) {
      commit('setData4MorePaymentStoresMutation', {index: i, amountToAdd: orderData.amount})
    }
  }
}
