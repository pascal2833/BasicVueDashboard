<template>
  <header class="dashboard-header">
    <h1 class="dashboard-header__h1-titles">{{mainTitle}}</h1>
    <div>
      <v2-datepicker-range class="dashboard-header__datepicker" v-model="datesChoosed" lang="en" format="yyyy-MM-DD" :picker-options="pickerOptions"></v2-datepicker-range>
      <button class="dashboard-header__classic-button" @click="refreshDashboardWithButton">Actualize dashboard</button>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

import Vue from 'vue'
import 'v2-datepicker/lib/index.css'
import V2Datepicker from 'v2-datepicker'

Vue.use(V2Datepicker)

export default {
  name: 'DashboardHeader',
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: 'Latest Week',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Latest Month',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Latest Three Month',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      datesChoosed: ''
    }
  },
  props: {
    mainTitle: String
  },
  methods: {
    ...mapMutations([
      'setDrawGraphsWithNewDataMutation'
    ]),
    refreshDashboardWithButton () {
      this.setDrawGraphsWithNewDataMutation()
    }
  }
}
</script>

<style lang="scss" scoped src="./DashboardHeader.scss"></style>
