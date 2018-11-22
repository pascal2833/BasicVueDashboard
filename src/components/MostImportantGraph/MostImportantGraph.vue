<template>
  <div class="mostImportant-graph">
    <h2 class="mostImportant-graph__h2-titles">{{graphTitle}}</h2>
    <section :id="graphTitle" class="mostImportant-graph__comparison-section">
      <div v-for="(dataElement, index) in dataActualized" :key="dataElement.dataName" :id='`circle-num-${index + 1}`' :class='`circle-size-${index + 1} ${classComplement}`' class="mostImportant-graph__comparison-section__circles">
        {{dataElement.dataName}} ({{dataElement.dataQuantity}})
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DistributionGraph',
  data () {
    return {
      dataActualized: []
    }
  },
  props: {
    graphTitle: String,
    data: Array,
    classComplement: String
  },
  computed: {
    ...mapState({
      drawGraphsWithNewData: state => state.drawGraphsWithNewData
    })
  },
  watch: {
    drawGraphsWithNewData: function () {
      this.dataActualized = JSON.parse(JSON.stringify(this.data)) // We want changes only when initiate, refresh or every X times.
    }
  }
}
</script>

<style lang="scss" scoped src="./MostImportantGraph.scss"></style>
