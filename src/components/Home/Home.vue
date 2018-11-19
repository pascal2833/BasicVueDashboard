<template>
    <div class="home">
      <h1 class="h1-titles">Orders information dashboard</h1>
      <div class="graphsInSameRowContainer">
        <distribution-graph
          graphTitle="Orders time distribution"
        >
        </distribution-graph>
        <div class="horizontal-graphs-margin"></div>
        <distribution-graph
          graphTitle="Price distribution per category"
        >
        </distribution-graph>
      </div>

      <div class="graphsInSameRowContainer">
        <mostImportant-graph
        >
          jijiji
        </mostImportant-graph>
        <div class="horizontal-graphs-margin"></div>
        <mostImportant-graph
        >
          kjokoko
        </mostImportant-graph>
        <div class="horizontal-graphs-margin"></div>
        <mostImportant-graph
        >
          kpokfcwoperkfop
        </mostImportant-graph>
      </div>
    </div>
</template>

<script>

import DistributionGraph from '../DistributionGraph/DistributionGraph'
import MostImportantGraph from '../MostImportantGraph/MostImportantGraph'
import { mapMutations, mapState } from 'vuex'
import { generateOrder } from '../../services/getOrdersData'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    DistributionGraph,
    MostImportantGraph
  },
  computed: {
    ...mapState({
      ordersDataArray: state => state.ordersDataArray
    })
  },
  methods: {
    ...mapMutations([
      'setOrdersDataArrayMutation'
    ])
  },
  created () {
    const millisecondsToCreateInitialOrders = 200 // Time to repeat
    const millisecondsToAddOrders = 1000 * 20 // We assume that each 20' an order is created.
    const numRepititionsInOneS = 1000 / millisecondsToCreateInitialOrders // If we want 1s to create initial orders.
    let iterator = 0
    const repeatGetInitialOrdersData = setInterval(() => {
      const orderData = generateOrder(new Date())
      this.setOrdersDataArrayMutation(orderData)
      iterator++
      if (iterator >= numRepititionsInOneS) {
        clearInterval(repeatGetInitialOrdersData)
      }
    }, millisecondsToCreateInitialOrders)
    setInterval(() => { // Add one order each ...seconds.
      const orderData = generateOrder(new Date())
      this.setOrdersDataArrayMutation(orderData)
    }, millisecondsToAddOrders)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./Home.scss"></style>
