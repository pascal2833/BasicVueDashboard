export const setData4OrdersPriceCategoryDistributionAction = ({state, commit}, ordersDataArray) => {
  console.count('setData4OrdersPriceCategoryDistributionAction')
  state.data4OrdersPriceCategoryDistribution.map((data4OrderPriceCategoryDistribution, iterator) => {
    console.log(data4OrderPriceCategoryDistribution.xAxeData)
    console.log(iterator)
    for (let i = 0; i < ordersDataArray.length; i++) {
      if (data4OrderPriceCategoryDistribution.xAxeData === ordersDataArray[i].category) {
        console.log(ordersDataArray[i].category, ordersDataArray[i].amount)
        commit('setData4OrdersPriceCategoryDistributionMutation', {addToYAxe: ordersDataArray[i].amount, index: iterator})
      }
    }
  })
}
