<template>
  <header class="dashboard-header">
    <h1 class="dashboard-header__h1-titles">{{mainTitle}}</h1>
    <button class="dashboard-header__classic-button" @click="refreshDashboardWithButton">Actualize dashboard</button>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'DashboardHeader',
  props: {
    mainTitle: String
  },
  methods: {
    ...mapMutations([
      'setDrawGraphsWithNewDataMutation'
    ]),
    refreshDashboardWithButton () {
      this.setDrawGraphsWithNewDataMutation()
    }
  }
}
</script>

<style lang="scss" scoped src="./DashboardHeader.scss"></style>
