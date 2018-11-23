<template>
  <header class="dashboard-header">
    <h1 class="dashboard-header__h1-titles">{{mainTitle}}</h1>
    <div class="dashboard-header__button-container">
      <button class="dashboard-header__button-container__button" @click="refreshDashboardWithButton">Actualize dashboard</button>
    </div>
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
