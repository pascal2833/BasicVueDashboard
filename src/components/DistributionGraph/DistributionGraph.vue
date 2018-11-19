<template>
  <div class="distribution-graph">
    <h2 class="h2-titles">{{graphTitle}}</h2>
  </div>
</template>

<script>
export default {
  name: 'DistributionGraph',
  props: {
    graphTitle: String
  }
}
</script>

<style lang="scss" scoped src="./DistributionGraph.scss"></style>
