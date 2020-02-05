
<template>
    <div class="textsize">
    <svg></svg>
    <form>
      <div @click="this.metData(val, metData.lev[key])" class="btn btn-primary">Elevation</div>
      <button class="btn btn-primary">Significant Wave Height</button>
      <button class="btn btn-primary">Spectral estimate of maximum wave</button>
      <button class="btn btn-primary">Peak Period</button>
      <button class="btn btn-primary">Mean Wave period</button>
      <button class="btn btn-primary">Mean Wave period</button>
      <button class="btn btn-primary">Peak wave direction (from)</button>
    </form>
  </div>
</template>

<script>
import * as d3 from 'd3'
import _ from "lodash";

import shared from '../shared'


export default {

  data() {
            return {
                chart: null,
                key: 'dpm',
                metData: [],
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
          metData(val, key) {
          if (this.chart != null) this.chart.remove();

          this.renderChart(val, this.key);
          }
        },

        created(){
            this.fetchMetOceanData = shared.fetchMetOceanData
            this.fetchMetOceanData()
        }, 

 

  methods: {
      renderChart(data, key){
        const margin = 60;
        const svg_width = 1600;
        const svg_height = 800;
        const chart_width = 1600 - 2 * margin;
        const chart_height = 800 - 2 * margin;

        const svg = d3
          .select("svg")
          .attr("width", svg_width)
          .attr("height", svg_height)

  // Setting the Axes

  this.chart = svg
    .append("g")
    .attr("transform", `translate(${margin}, ${margin})`);

  const yScale = d3
    .scaleLinear()
    .range([chart_height, 0])
    .domain([0, _.maxBy(data, key).id]);
  // Above this domain is where it is at!

  this.chart
    .append("g")
    .style("font", "14px sans-serif")
    .call(d3.axisLeft(yScale).ticks(_.maxBy(data, key).key));

  const xScale = d3
    .scaleBand()
    .range([0, chart_width])
    .domain(data.map(s => s.hour))
    .padding(0.2);

  this.chart
    .append("g")
    .style("font", "14px sans-serif")
    .attr("transform", `translate(0, ${chart_height})`)
    .call(d3.axisBottom(xScale));


  // BARS THEMSELVES          
    const barGroups = this.chart
      .selectAll("rect")
      .data(data)
      .enter();

  barGroups
    .append("rect")
    .attr("class", "bar")
    .attr("x", g => xScale(g.hour))
    .attr("y", g => yScale(g.id ))
    .attr("height", g => chart_height - yScale(g.id))
    .attr("width", xScale.bandwidth())
    .attr("width", xScale.bandwidth())
   
    // Add numbers to each Bar on the graph. 
    // .append("text")
    // .attr("class", "value")
    // .attr("x", a => xScale(a.hour) + xScale.bandwidth() / 2)
    // .attr("y", a => yScale(a.hour) - 20)
    // .attr("text-anchor", "middle")
    // .text((a, idx) => {
    //   return idx !== i ? "" : `${a.hour} Facts! `;  
    //     })
    //   .attr("width", xScale.bandwidth())
    // .on("mouseleave", function() {
    //     d3.selectAll(".issues").attr("opacity", 1);

    //     d3.select(this)
    //       .transition()
    //       .duration(300)
    //       .attr("opacity", 1)
    //       .attr("x", a => xScale(a.hour))
    //       .attr("width", xScale.bandwidth());

    //     svg.selectAll(".value").remove();
    //     });


    // Setting up the labels
    
    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(chart_height / 2) - margin)
      .attr('y', margin / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Key')
 
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
      .text('MetData')
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

	.axis path,
	.axis line {
	  fill: none;
	  stroke: #000;
	  shape-rendering: crispEdges;
	}

	</style>