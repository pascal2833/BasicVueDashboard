<template>
  <div class="distribution-graph">
    <h2 class="distribution-graph__h2-titles">{{graphTitle}}</h2>
    <div :id="idSvgContainer" class="distribution-graph__svgContainer">
      <svg :id="idSvg" class="distribution-graph__svgContainer__svgElement"></svg>
    </div>
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
    idSvgContainer: String,
    yAxeLegend: String,
    xAxeLegend: String,
    data: Array,
    graphColor: String
  },
  data () {
    return {
      color4GraphAxesAndLabels: 'rgb(130,130,135)',
      size4GraphAxesAndLabels: '1em',
      color4TitlesAxes: 'rgb(110,110,115)',
      size4TitlesAxes: '1.1em'
    }
  },
  computed: {
    ...mapState({
      ordersDataArray: state => state.ordersDataArray,
      drawGraphsWithNewData: state => state.drawGraphsWithNewData
    })
  },
  methods: {
    drawGraph (data) {
      const widthSvg = window.document.getElementById(this.idSvgContainer).offsetWidth
      const heightSvg = window.document.getElementById(this.idSvgContainer).offsetHeight
      const margin = ({top: 6, right: 0, bottom: 48, left: 65})
      const dataMin = Math.floor(d3.min(data.map(d => d.yAxeData)))
      const dataMax = Math.ceil(d3.max(data.map(d => d.yAxeData)))
      const svg = d3.select(`#${this.idSvg}`)

      // Scales definition:
      const xScale = d3.scaleBand()
        .domain(data.map(d => d.xAxeData))
        .range([margin.left, widthSvg - margin.right])
        .padding(0.7)
      const yScale = d3.scaleLinear()
        .domain([dataMin, dataMax])
        .range([heightSvg - margin.bottom, margin.top])

      // Add graph and axes:
      svg.append('g')
        .selectAll('rect').data(data).enter().append('rect')
        .attr('fill', this.graphColor)
        .attr('x', d => xScale(d.xAxeData))
        .attr('y', d => yScale(d.yAxeData))
        .attr('height', d => yScale(dataMin) - yScale(d.yAxeData))
        .attr('width', xScale.bandwidth())
        .attr('opacity', d => d.yAxeData / dataMax + 0.1)

      const xAxis = g => g
        .attr('transform', `translate(0,${heightSvg - margin.bottom})`)
        .call(d3.axisBottom(xScale)
          .tickSizeOuter(0))
      const yAxis = g => g
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale)
          .tickSizeOuter(0))

      svg.append('g')
        .call(xAxis)
        .attr('font-size', this.size4GraphAxesAndLabels)
      svg.append('g')
        .call(yAxis)
        .attr('font-size', this.size4GraphAxesAndLabels)

      // Add Axes titles:
      svg.append('text')
        .attr('x', -(heightSvg / 2) - margin.bottom - margin.top)
        .attr('y', margin.left / 4)
        .attr('transform', 'rotate(-90)')
        .attr('font-size', this.size4TitlesAxes)
        .attr('fill', this.color4TitlesAxes)
        .text(this.yAxeLegend)
      svg.append('text')
        .attr('x', (widthSvg - margin.left - margin.right) / 2)
        .attr('y', heightSvg - 3)
        .attr('font-size', this.size4TitlesAxes)
        .attr('fill', this.color4TitlesAxes)
        .text(this.xAxeLegend)
    }
  },
  watch: {
    drawGraphsWithNewData: function () {
      const svg = d3.select(`#${this.idSvg}`)
      svg.selectAll('*').remove()
      this.drawGraph(this.data)
    }
  }
}
</script>

<style lang="scss" scoped src="./DistributionGraph.scss"></style>
