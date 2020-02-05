<template>
    <div class="container">
        <div class="row justify-content-center">
           
           <div v-for="(metDataEntry, index) in metData" :key="metDataEntry.id">

           <table>
                <tr>
                    <th>Date</th>    
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
                    <th>Peak period of wind sea</th>    
                    <th>Mean period of wind sea</th>    
                    <th>Mean direction at sea peak freqeuncy (from)</th>    
                    <th>Mean direction at wind sea peak frequency (from)</th>
                    <th>Infragravity significant wave height</th>    
                    <th>Far infragravity wave height</th>    
                    <th></th>    
                    <th></th>    
                    <th></th>    
                    <th></th>    
                </tr>   
            </table>    
           <p> {{metDataEntry.lev}}
            {{metDataEntry.hs}}
            {{metDataEntry.hx}}
            {{metDataEntry.tp}}
            {{metDataEntry.tm01}} Help</p>
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
                        this.metData = res.data.data
                        console.log(this.metData)
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
