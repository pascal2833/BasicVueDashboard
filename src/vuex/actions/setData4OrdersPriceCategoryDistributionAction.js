export const setData4OrdersPriceCategoryDistributionAction = ({state, commit}, orderData) => {
  state.data4OrdersPriceCategoryDistribution.map((data4OrderPriceCategoryDistribution, iterator) => {
    if (data4OrderPriceCategoryDistribution.xAxeData === orderData.category) {
      commit('setData4OrdersPriceCategoryDistributionMutation', {index: iterator, priceToAdd: orderData.amount})
    }
  })
}
