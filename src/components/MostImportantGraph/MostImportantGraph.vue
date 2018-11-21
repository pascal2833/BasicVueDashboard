<template>
  <div class="mostImportant-graph">
    <h2 class="mostImportant-graph__h2-titles">{{graphTitle}}</h2>
    <section class="mostImportant-graph__comparison-section">
      <div></div>
    </section>
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

<style lang="scss" scoped src="./MostImportantGraph.scss"></style>
