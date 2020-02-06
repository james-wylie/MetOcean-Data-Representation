<template>
    <div class="bg-light textsize">
      <h1>MetData</h1>
    <div style="font-size: 14px;" class="row">
    <div class="col-7">
    <svg class="svg"></svg>
    </div>
    
    <div class="col-2 mt-5 pt-5">
       <h3 class="pl-4"> Please select below: </h3>
    <ul class="pt-2">
      <a><li @click="changeData('id')" class=" -primary m-3">ID</li></a>
      <a><li @click="changeData('lev')" class=" -primary m-3">Elevation</li></a>
      <a><li @click="changeData('hs')" class=" -primary m-3">Significant Wave Height</li></a>
      <a><li @click="changeData('hx')" class=" -primary m-3">Spectral estimate of maximum wave</li></a>
      <a><li @click="changeData('tp')" class=" -primary m-3">Peak Period</li></a>
      
    
      <a><li @click="changeData('tm01')" class=" -primary  m-3">Mean Wave period</li></a>
      <a><li @click="changeData('tm02')" class=" -primary  m-3">Mean Wave period</li></a>
      <a><li @click="changeData('dp')" class=" -primary m-3">Peak wave direction (from)</li></a>
      <a><li @click="changeData('dpm')" class=" -primary m-3">Mean Direction at Peak Frequency</li></a>
      <a><li @click="changeData('hs_sw1')" class=" -primary m-3">Significant wave height of primary swell</li></a>
      
    
      <a><li @click="changeData('hs_sw8')" class=" -primary m-3">Significant wave height of swell (> 8s)</li></a>
      <a><li @click="changeData('tp_sw1')" class=" -primary m-3">Peak period of Primary Swell</li></a>
      <a><li @click="changeData('tp_sw8')" class=" -primary m-3">Peak period of swell (>8s)</li></a>
      <a><li @click="changeData('dpm_sw8')" class=" -primary m-3">Mean direction at swell peak frequency (from)</li></a>
      <a><li @click="changeData('dpm_sw1')" class=" -primary m-3">Mean direction of primary swell peak frequency</li></a>
      
    
      <a><li @click="changeData('hs_sea8')" class=" -primary m-3">Significant wave height of sea</li></a>
      <a><li @click="changeData('hs_sea')" class=" -primary m-3">Significant wave height of wind sea</li></a>
      <a><li @click="changeData('tp_sea8')" class=" -primary m-3">Peak period of sea</li></a>
      <a><li @click="changeData('tp_sea')" class=" -primary m-3">Peak period of wind sea</li></a>
      <a><li @click="changeData('tm_sea')" class=" -primary m-3">Peak period of wind sea</li></a>
    </ul>
    </div>
    <div class="col-2 pt-5 mt-5">
      <ul class="pt-5">    
      <a><li @click="changeData('dpm_sea8')" class=" -primary m-3">Mean direction at sea peak freqeuncy (from)</li></a>
      <a><li @click="changeData('dpm_sea')" class=" -primary m-3">Mean direction at wind sea peak frequency (from)</li></a>
      <a><li @click="changeData('hs_ig')" class=" -primary m-3">Infragravity significant wave height</li></a>
      <a><li @click="changeData('hs_fig')" class=" -primary m-3">Far infragravity wave height</li></a>
      <a><li @click="changeData('wsp')" class=" -primary m-3">Mean wind speed at 10m</li></a>
      
    
      <a><li @click="changeData('gst')" class=" -primary m-3">Typical Gust speed</li></a>
      <a><li @click="changeData('wd')" class=" -primary m-3">Wind direction (from)</li></a>
      <a><li @click="changeData('wsp100')" class=" -primary m-3">Mean wind speed at 100m</li></a>
      <a><li @click="changeData('wsp50')" class=" -primary m-3">Mean wind speed at 50m</li></a>
      <a><li @click="changeData('wsp80')" class=" -primary m-3">Mean wind speed at 80m</li></a>
      
    
      <a><li @click="changeData('precip')" class=" -primary m-3">Precipitation</li></a>
      <a><li @click="changeData('tmp')" class=" -primary m-3">Air temperature</li></a>
      <a><li @click="changeData('rh')" class=" -primary m-3">Relative Humidity</li></a>
      <a><li @click="changeData('vis')" class=" -primary m-3">Visibility</li></a>
      <a><li @click="changeData('cld')" class=" -primary m-3">Cloud Cover</li></a>
      
    
      <a><li @click="changeData('cb')" class=" -primary m-3">Cloud Base</li></a>
      <a><li @click="changeData('csp0')" class=" -primary m-3">Surface Current Speed</li></a>
      <a><li @click="changeData('cd0')" class=" -primary m-3">Surface Current Speed</li></a>
      <a><li @click="changeData('ss')" class=" -primary m-3">Storm Surge elevation</li></a>
      <a><li @click="changeData('sst')" class=" -primary m-3">Sea Surface Temperature</li></a>
      
    </ul>
    </div>
  </div>
  <div class="row"></div>
  </div>

</template>

<script>
import * as d3 from 'd3'
import _ from "lodash";

import shared from '../shared'


export default {
  // mounted(){
  //   this.changeData(option)      
  // },

  data() {
            return {
                chart: null,
                fullTitles: {},
                keys: [],
                metData: [],
                selectedOption: 'dpm',
                metDataEntry: {
                    Time: '',
                    id: '',
                    lev: '',
                    hs: '',
                    hx: '',
                    tp: '',
                    tm01: '',
                    tm02: '',
                    dp: '',
                    dpm: '',
                    hs_sw1: '',
                    hs_sw8: '',
                    tp_sw1: '',
                    tp_sw8: '',
                    dpm_sw8: '',
                    dpm_sw1: '',
                    hs_sea8: '',
                    hs_sea: '',
                    tp_sea8: '',
                    tp_sea: '',
                    tm_sea: '',
                    dpm_sea8: '',
                    dpm_sea: '',
                    hs_ig: '',
                    hs_fig: '',
                    wsp: '',
                    gst: '',
                    wd: '',
                    wsp: '',
                    wsp50: '',
                    wsp80: '',
                    precip: '',
                    tmp: '',
                    rh: '',
                    vis: '',
                    cld: '',
                    cb: '',
                    csp0: '',
                    cd0: '',
                    ss: '',
                    sst: '',
                }
            }
            },

        watch: {
          metData(val) {
            if (this.chart != null) this.chart.remove();
            this.renderChart(val, this.keys.id);
          },
        },
        created(){
            this.fetchMetOceanData = shared.fetchMetOceanData
            this.fetchMetOceanData()
            this.fullTitles = shared.fullTitles
            this.getKeys()         
        }, 
        
 

  methods: {
    changeData(option) {
    this.selectedOption = option
    d3.selectAll(".label").text('')
    if (this.chart != null) this.chart.remove();
    this.renderChart(this.metData, option);
    },

  getKeys() {
      this.keys = Object.keys(this.metDataEntry)
    },

  renderChart(data){
    const option = this.selectedOption

    const margin = 100;
    const svg_width = 1200;
    const svg_height = 800;
    const chart_width = 1200 - 2 * margin;
    const chart_height = 800 - 2 * margin;

    const svg = d3
      .select("svg")
      .attr("width", svg_width)
      .attr("height", svg_height)

  // Setting up Axes

    this.chart = svg
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    const yScale = d3
      .scaleLinear()
      .range([chart_height, 0])
      .domain([0, _.maxBy(data, `${[option]}`)[option]]);
  // Above this domain is where it is at!
    
    this.chart
      .append("g")
      .style("font", "14px sans-serif")
      .call(d3.axisLeft(yScale).ticks(5));

    const xScale = d3
      .scaleBand()
      .range([0, chart_width])
      .domain(data.map(s => s.hour))
      .padding(0.5);

    this.chart
      .append("g")
      .style("font", "14px sans-serif")
      .attr("transform", `translate(0, ${chart_height})`)
      .call(d3.axisBottom(xScale).ticks(12));

  // BARS THEMSELVES          
    const barGroups = this.chart
      .selectAll("rect")
      .data(data)
      .enter()
      .append('g');

    barGroups
      .append("rect")
      .attr("class", "bar")
      .attr("x", g => xScale(g.hour))
      .attr("y", g => yScale(g[option]))
      .attr("height", g => chart_height - yScale(g[option]))
      .attr("width", xScale.bandwidth())
      .attr("width", xScale.bandwidth())
      .on("mouseover", function(d) {
          console.log(d[option])
          d3.select('.title').text(`Value: ${d[option]}`)})
      .on("mouseout", function(d) {
          d3.select('.title').text('Hover to see the corresponding value.');    
      });


    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(chart_height / 2) - margin)
      .attr('y', margin / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text(this.fullTitles[option])
 
    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', chart_width / 2 + margin)
      .attr('y', chart_height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Time of Day')

    svg
      .append('text')
      .attr('class', 'title')
      .attr('x', chart_width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      // .text('Hover to see the corresponding value.')    
    }}}
      
</script>

<style>

  .textsize{
    font: 20px sans-serif;
  }

	.axis {
	  font: 20px sans-serif;
	}

  .label, .bar {
	  font: 20px sans-serif;

  }

  h1{
    position: fixed;
    top: 3%;
    left: 3%;
    color: darkblue;
  }

  .title {
    font-size: 20px;
  }

  svg{
    position: fixed;
    top: 3%;
    left: 1%;
  }

ul, li {
    list-style: none;
  }

	.axis path,
	.axis line {
	  fill: none;
	  stroke: #000;
	  shape-rendering: crispEdges;
	}

</style>