<template>
    <div class="container">
        <div class="row justify-content-center">
           
           <div>

           <table>
                <tr>
                    <th>Date</th>    
                    <th>ID</th>    
                    <th>Elevation</th>    
                    <th>Significant Wave Height</th>    
                    <th>Spectral estimate of maximum wave</th>    
                    <th>Peak Period</th>    
                    <th>Mean Wave period</th>    
                    <th>Mean wave period</th>    
                    <th>Peak wave direction (from)</th>    
                    <th>Mean direction at peak frequency (from)</th>    
                    <th>Significant wave height of primary swell</th>    
                    <th>Significant wave height of swell (> 8s)</th>    
                    <th>Peak period of Primary Swell</th>    
                    <th>Peak period of swell (>8s)</th>    
                    <th>Mean direction at swell peak frequency (from)</th>    
                    <th>Mean direction of primary swell peak frequency</th>    
                    <th>Significant wave height of sea</th>    
                    <th>Significant wave height of wind sea</th>    
                    <th>Peak period of sea</th>    
                    <th>Peak period of wind sea</th>    
                    <th>Mean period of wind sea</th>    
                    <th>Mean direction at sea peak freqeuncy (from)</th>    
                    <th>Mean direction at wind sea peak frequency (from)</th>
                    <th>Infragravity significant wave height</th>    
                    <th>Far infragravity wave height</th>    
                   
                    <!-- Component Below -->
                    <th>Mean wind speed at 10m</th>    
                    <th>Typical Gust speed</th>    
                    <th>Wind direction (from)</th>    
                    <th>Mean wind speed at 100m</th>    
                    <th>Mean wind speed at 50m</th>    
                    <th>Mean wind speed at 80m</th>    
                    <th>Precipitation</th>    
                    <th>Air temperature</th>    
                    <th>Relative Humidity</th>    
                    <th>Visibility</th>    
                    <th>Cloud Cover</th>    
                    <th>Cloud Base</th>    
                    <th>Surface Current Speed</th>    
                    <th>Storm Surge elevation</th>    
                    <th>Sea Surface Temperature</th>    
                </tr> 

                <tr  v-for="(metDataEntry, index) in metData" :key="metDataEntry.id">
                    <td>{{metDataEntry.Time}}</td>    
                    <td>{{metDataEntry.id}}</td>    
                    <td>{{metDataEntry.lev}}</td>    
                    <td>{{metDataEntry.hs}}</td>    
                    <td>{{metDataEntry.hx}}</td>    
                    <td>{{metDataEntry.tp}}</td>    
                    <td>{{metDataEntry.tm01}}</td>    
                    <td>{{metDataEntry.tm02}}</td>    
                    <td>{{metDataEntry.dp}}</td>    
                    <td>{{metDataEntry.dpm}}</td>    
                    <td>{{metDataEntry.hs_sw1}}</td>    
                    <td>{{metDataEntry.hs_sw8}}</td>    
                    <td>{{metDataEntry.tp_sw1}}</td>    
                    <td>{{metDataEntry.tp_sw8}}</td>    
                    <td>{{metDataEntry.dpm_sw8}}</td>    
                    <td>{{metDataEntry.dpm_sw1}}</td>    
                    <td>{{metDataEntry.hs_sea8}}</td>    
                    <td>{{metDataEntry.hs_sea}}</td>    
                    <td>{{metDataEntry.tp_sea8}}</td>    
                    <td>{{metDataEntry.tp_sea}}</td>    
                    <td>{{metDataEntry.dpm_sea8}}</td>    
                    <td>{{metDataEntry.dpm_sea}}</td>    
                    <td>{{metDataEntry.hs_ig}}</td>    
                    <td>{{metDataEntry.hs_fig}}</td>    
                    <td>{{metDataEntry.wsp}}</td>    
                    <td>{{metDataEntry.gst}}</td>    
                    <td>{{metDataEntry.wd}}</td>    
                    <td>{{metDataEntry.wsp}}</td>    
                    <td>{{metDataEntry.wsp50}}</td>    
                    <td>{{metDataEntry.wsp80}}</td>    
                    <td>{{metDataEntry.precip}}</td>    
                    <td>{{metDataEntry.tmp}}</td>    
                    <td>{{metDataEntry.rh}}</td>    
                    <td>{{metDataEntry.vis}}</td>    
                    <td>{{metDataEntry.cld}}</td>    
                    <td>{{metDataEntry.cb}}</td>    
                    <td>{{metDataEntry.csp0}}</td>    
                    <td>{{metDataEntry.cd0}}</td>    
                    <td>{{metDataEntry.ss}}</td>    
                    <td>{{metDataEntry.sst}}</td>                    
                </tr>  
            </table>    

        </div>
    </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
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
        created(){
            this.fetchMetOceanData()
        }, 
        methods: {
            fetchMetOceanData() {
                axios.get('get-metocean-data')
                    .then(res => {
                        let newMap = res.data.map(el => {
                            let day_hour = el.Time.split(" ")
                            el.day = day_hour[0]
                            el.hour = day_hour[1]
                            return el
                        })
                        this.metData = res.data
                    })                    
                    .catch(err => {
                        console.log(err)
                    })
            },
            sendOutMetData(){
                console.log(metData)
            }
        }
    }
</script>

<style>
    table{
        table-layout: auto;
        width: 100%;
    }

    table, td{
        padding: 10px;
        border: 1px solid #616060;
        border-collapse: collapse;
    }

</style>