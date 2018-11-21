export const setData4OrdersTimeDistributionAction = ({state, commit}, orderData) => {
  let index
  let orderDeliveryTimeIsThisOne = true
  const hoursOfDelivery = orderData.endTime.getHours()
  switch (orderDeliveryTimeIsThisOne) {
    case (hoursOfDelivery >= 0 && hoursOfDelivery < 6):
      index = 0
      break
    case (hoursOfDelivery >= 6 && hoursOfDelivery < 12):
      index = 1
      break
    case (hoursOfDelivery >= 12 && hoursOfDelivery < 18):
      index = 2
      break
    case (hoursOfDelivery >= 18 && hoursOfDelivery <= 23):
      index = 3
  }
  commit('setData4OrdersTimeDistributionMutation', index)
}
