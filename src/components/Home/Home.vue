<template>
    <div class="home">
      <dashboard-header
        class="dashboard-header"
        mainTitle="Orders information dashboard"
      >
      </dashboard-header>
      <div class="graphsInSameRowContainer">
        <distribution-graph
          graphTitle="Orders time distribution"
          idSvg="svgElement1"
          :data="data4OrdersTimeDistribution"
        >
        </distribution-graph>
        <div class="horizontal-graphs-margin"></div>
        <distribution-graph
          graphTitle="Price distribution per category"
          idSvg="svgElement2"
          :data="data4OrdersPriceCategoryDistribution"
        >
        </distribution-graph>
      </div>

      <div class="graphsInSameRowContainer">
        <mostImportant-graph
          graphTitle="Most popular stores:"
        >
        </mostImportant-graph>
        <div class="horizontal-graphs-margin"></div>
        <mostImportant-graph
          graphTitle="Most popular gross payment stores"
        >
        </mostImportant-graph>
        <div class="horizontal-graphs-margin"></div>
        <mostImportant-graph
          graphTitle="Most popular tags:"
        >
        </mostImportant-graph>
        {{ordersDataArray}}
      </div>
    </div>
</template>

<script>

import DistributionGraph from '../DistributionGraph/DistributionGraph'
import MostImportantGraph from '../MostImportantGraph/MostImportantGraph'
import DashboardHeader from '../DashboardHeader/DashboardHeader'

import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
import { generateOrder } from '../../services/getOrdersData'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    DistributionGraph,
    MostImportantGraph,
    DashboardHeader
  },
  computed: {
    ...mapState({
      ordersDataArray: state => state.ordersDataArray,
      data4OrdersTimeDistribution: state => state.data4OrdersTimeDistribution,
      data4OrdersPriceCategoryDistribution: state => state.data4OrdersPriceCategoryDistribution
    }),
    ...mapGetters([
    ])
  },
  methods: {
    ...mapMutations([
      'setOrdersDataArrayMutation',
      'setDrawGraphsWithNewDataMutation'
    ]),
    ...mapActions([
      'setData4OrdersTimeDistributionAction',
      'setData4OrdersPriceCategoryDistributionAction'
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
      this.setData4OrdersTimeDistributionAction(this.ordersDataArray)
      iterator++
      if (iterator >= numRepititionsInOneS) {
        clearInterval(repeatGetInitialOrdersData)
        this.setDrawGraphsWithNewDataMutation(true)
        this.setData4OrdersPriceCategoryDistributionAction(this.ordersDataArray)
      }
    }, millisecondsToCreateInitialOrders)
    setInterval(() => { // Add one order each X seconds.
      const orderData = generateOrder(new Date())
      this.setOrdersDataArrayMutation(orderData)
      this.setData4OrdersTimeDistributionAction(this.ordersDataArray)
      this.setData4OrdersPriceCategoryDistributionAction(this.ordersDataArray)
    }, millisecondsToAddOrders)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./Home.scss"></style>
