<template>
  <header class="dashboard-header">
    <h1 class="dashboard-header__h1-titles">{{mainTitle}}</h1>
    <button class="dashboard-header__classic-button">Refresh dashboard</button>
  </header>
</template>

<script>
export default {
  name: 'DashboardHeader',
  props: {
    mainTitle: String
  }
}
</script>

<style lang="scss" scoped src="./DashboardHeader.scss"></style>
