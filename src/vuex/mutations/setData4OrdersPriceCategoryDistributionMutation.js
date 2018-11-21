export const setData4OrdersPriceCategoryDistributionMutation = (state, dataToPass) => {
  state.data4OrdersPriceCategoryDistribution[dataToPass.index].yAxeData = state.data4OrdersPriceCategoryDistribution[dataToPass.index].yAxeData + dataToPass.priceToAdd
}
