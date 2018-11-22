export const setData4MorePaymentStoresMutation = (state, dataToPass) => {
  state.data4MorePaymentStores[dataToPass.index].dataQuantity = state.data4MorePaymentStores[dataToPass.index].dataQuantity + Math.round(dataToPass.amountToAdd)
}
