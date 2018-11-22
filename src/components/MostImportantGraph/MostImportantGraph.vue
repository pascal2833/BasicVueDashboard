<template>
  <div class="mostImportant-graph">
    <h2 class="mostImportant-graph__h2-titles">{{graphTitle}}</h2>
    <section class="mostImportant-graph__comparison-section">
      <div v-for="(dataElement, index) in data" :key="dataElement.dataName" :id='`circle-num-${index + 1}`' :class='`circle-size-${index + 1}`' class="mostImportant-graph__comparison-section__circles">
        {{dataElement.dataName}}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DistributionGraph',
  props: {
    graphTitle: String,
    data: Array
  }
}
</script>

<style lang="scss" scoped src="./MostImportantGraph.scss"></style>
