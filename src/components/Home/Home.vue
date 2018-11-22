<template>
    <div class="home">
      <dashboard-header
        mainTitle="Orders information dashboard"
      >
      </dashboard-header>
      <div class="home__graphsInSameRowContainer">
        <distribution-graph
          graphTitle="Orders time distribution"
          idSvg="svgElement1"
          idSvgContainer="svgContainer1"
          yAxeLegend="Num of orders"
          xAxeLegend="Time period"
          :data="data4OrdersTimeDistribution"
          :colorArray4Graphs="colorArray4Graphs"
        >
        </distribution-graph>
        <div class="home__horizontal-graphs-margin"></div>
        <distribution-graph
          graphTitle="Price distribution per category"
          idSvg="svgElement2"
          idSvgContainer="svgContainer2"
          yAxeLegend="Total prices"
          xAxeLegend="Categories"
          :data="data4OrdersPriceCategoryDistribution"
          :colorArray4Graphs="colorArray4Graphs"
        >
        </distribution-graph>
      </div>

      <div class="home__graphsInSameRowContainer">
        <mostImportant-graph
          graphTitle="Most popular stores"
          :data="getData4PopularStoresFiltered"
        >
        </mostImportant-graph>
        <div class="home__horizontal-graphs-margin"></div>
        <mostImportant-graph
          graphTitle="Most popular gross payment stores"
          :data="getData4MorePaymentStoresFiltered"
        >
        </mostImportant-graph>
        <div class="home__horizontal-graphs-margin"></div>
        <mostImportant-graph
          graphTitle="Most popular tags"
          :data="getData4PopularTagsFiltered"
        >
        </mostImportant-graph>
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
      colorArray4Graphs: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e', '#316395', '#994499', '#22aa99', '#aaaa11', '#6633cc', '#e67300', '#8b0707', '#651067', '#329262', '#5574a6', '#3b3eac'] // http://bl.ocks.org/aaizemberg/78bd3dade9593896a59d
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
      data4OrdersPriceCategoryDistribution: state => state.data4OrdersPriceCategoryDistribution,
      data4PopularStores: state => state.data4PopularStores,
      data4MorePaymentStores: state => state.data4MorePaymentStores,
      data4PopularTags: state => state.data4PopularTags
    }),
    ...mapGetters([
      'getData4PopularStoresFiltered',
      'getData4MorePaymentStoresFiltered',
      'getData4PopularTagsFiltered'
    ])
  },
  methods: {
    ...mapMutations([
      'setOrdersDataArrayMutation',
      'setDrawGraphsWithNewDataMutation'
    ]),
    ...mapActions([
      'setData4OrdersTimeDistributionAction',
      'setData4OrdersPriceCategoryDistributionAction',
      'setData4PopularStoresAction',
      'setData4MorePaymentStoresAction',
      'setData4PopularTagsAction'
    ]),
    setData4AllGraphs (orderData) {
      this.setOrdersDataArrayMutation(orderData)
      this.setData4OrdersTimeDistributionAction(orderData)
      this.setData4OrdersPriceCategoryDistributionAction(orderData)
      this.setData4PopularStoresAction(orderData)
      this.setData4MorePaymentStoresAction(orderData)
      this.setData4PopularTagsAction(orderData)
    }
  },
  created () {
    const millisecondsToCreateInitialOrders = 200 // Time to repeat
    const millisecondsToAddOrders = 1000 * 20 // We assume that each 20' an order is created.
    const numRepititionsInOneS = 1000 / millisecondsToCreateInitialOrders // If we want 1s to create initial orders.
    let iterator = 0
    const repeatGetInitialOrdersData = setInterval(() => {
      const orderData = generateOrder(new Date())
      this.setData4AllGraphs(orderData)
      iterator++
      if (iterator >= numRepititionsInOneS) {
        clearInterval(repeatGetInitialOrdersData)
        this.setDrawGraphsWithNewDataMutation(true)
      }
    }, millisecondsToCreateInitialOrders)
    setInterval(() => { // Add one order each X seconds.
      const orderData = generateOrder(new Date())
      this.setData4AllGraphs(orderData)
    }, millisecondsToAddOrders)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./Home.scss"></style>
