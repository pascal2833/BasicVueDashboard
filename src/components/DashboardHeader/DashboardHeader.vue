<template>
  <header>
    <h1 class="h1-titles">{{mainTitle}}</h1>
    <button class="classic-button">Refresh dashboard</button>
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
