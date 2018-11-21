export const setData4PopularTagsAction = ({state, commit}, orderData) => {
  for (let i = 0; i < state.data4PopularTags.length; i++) {
    for (let ii = 0; ii < orderData.tags.length; ii++) {
      if (state.data4PopularTags[i].dataName === orderData.tags[ii]) {
        commit('setData4PopularTagsMutation', i)
      }
    }
  }
}
