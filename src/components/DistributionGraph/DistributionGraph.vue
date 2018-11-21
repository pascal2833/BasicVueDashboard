<template>
  <div class="distribution-graph">
    <h2 class="h2-titles">{{graphTitle}}</h2>
    {{data}}
    <svg id="idSvg"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import { mapState } from 'vuex'

export default {
  name: 'DistributionGraph',
  props: {
    graphTitle: String,
    idSvg: String,
    data: Array
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      ordersDataArray: state => state.ordersDataArray,
      drawGraphsWithNewData: state => state.drawGraphsWithNewData
    })
  },
  methods: {
    drawGraph (data, widthSvgContainerAndGraph) {
      const margin = 60
      const width = 1000 - 2 * margin
      const height = 600 - 2 * margin

      const svg = d3.select(`#${this.idSvg}`)

      const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`)

      const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0, 100])


      /* const data4BarChar = this.getData4BarChar(this.getDataGroupByxValue('withRowData'))
      const data4BarCharWithFormatedData = this.getData4BarChar(this.getDataGroupByxValue('withFormatedData')) */
      // ------ Retrieve svg canvas container and set these dimensions: -------- //
      // const vis = d3.select(`#${this.idSvg}`)
      // console.log(data)
      // const heightSvgContainerAndGraph = this.getDimParameters(this.getxValueLengthMax(data), 'height') + (6 * this.getDataGroupByField().length)
      // vis.attr('height', heightSvgContainerAndGraph)
      // vis.attr('width', widthSvgContainerAndGraph)
      /* // ------- Start to define basic that we will be use after / scales and legend: -------- //
      const MARGINS = 60
      const WIDTH = widthSvgContainerAndGraph // Same that svg canvas container
      const HEIGHT = heightSvgContainerAndGraph
      // ----- Define scales: ---------- //
      const maxValue4Y = d3.max(data, d => d.yValue)
      const minValue4Y = d3.min(data, d => d.yValue)
      const domain4XData = this.getDomain4X4BarChar(data4BarChar)
      const domainForxAxis = this.getDomain4X(this.getDataGroupByField())
      const xScaleToBuildxAxis = d3.scaleBand().range([MARGINS.left, WIDTH - MARGINS.right]).domain([...domainForxAxis])
      const xScale = d3.scaleBand().range([MARGINS.left, WIDTH - MARGINS.right]).domain([...domain4XData])
      const yScale = d3.scaleLinear().range([HEIGHT - MARGINS.bottom, MARGINS.top]).domain([minValue4Y, maxValue4Y]).nice() // nice: CF http://d3indepth.com/scales/
      // --------- Create axis: ------------ //
      const xAxis = d3.axisBottom(xScaleToBuildxAxis)
      const yAxis = d3.axisLeft(yScale)
      // -------- Append axis to the svg container, put them where we want and add class to style them: ---------- //
      vis.attr('transform', 'translate(0, 0)')
      vis.append('svg:g')
        .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
        .attr('class', 'xAxis')
        .call(xAxis)
        .selectAll('text') // Put unit/xAxis vertically.
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', d => 'rotate(-50)')
      vis.append('svg:g')
        .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
        .attr('class', 'yAxis')
        .call(yAxis)
      // Add Bar char:
      data4BarChar.forEach((d, i) => {
        vis.append('rect')
          .attr('class', 'bar_' + d.fieldToDraw)
          .attr('id', 'bar_' + i)
          .style('fill', () => this.color(d.fieldToDraw))
          .attr('opacity', '0.7')
          .attr('width', xScale.bandwidth())
          .attr('height', HEIGHT - MARGINS.bottom - yScale(d.yValue))
          .attr('x', xScale(d.xValue))
          .attr('transform', 'translate(0,' + yScale(d.yValue) + ')')
          .on('mouseover', () => {
            d3.selectAll('rect')
              .style('opacity', 0.3)
            d3.select('#bar_' + i)
              .style('opacity', 0.7)
            vis.append('text')
            // .text(this.returnyValueFormated(this.dataFromFormatedRowsToBuildGraph4QueryForm, i))
              .text(this.returnyValueFormated(data4BarCharWithFormatedData, i))
              .attr('x', xScale(d.xValue))
              .attr('y', yScale(d.yValue) - 10)
              .attr('class', 'textvalue')
              .style('fill', this.color(d.fieldToDraw))
          })
          .on('mouseout', () => {
            d3.selectAll('.textvalue')
              .style('opacity', 0)
            d3.selectAll('rect')
              .style('opacity', 0.7)
          })
      }) */
    }
  },
  watch: {
    drawGraphsWithNewData: function () {
      this.drawGraph(this.data)
    }
  }
}
</script>

<style lang="scss" scoped src="./DistributionGraph.scss"></style>
