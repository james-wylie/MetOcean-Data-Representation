<template>
    <div class="container">
        <div class="row justify-content-center">
           
           <div>

           <table>
                <tr>
                    <th>Date</th>    
                    <th>ID</th>    
                    <th>Day</th>    
                    <th>Hour</th>    
                     
                </tr> 

                <tr  v-for="(metDataEntry, index) in metData" :key="metDataEntry.id">
                    <!-- <router-link :to="{ name: 'showHour', params: {id: metDataEntry.id }}" > -->
                    <td>{{metDataEntry.Time}}</td>    
                    <td>{{metDataEntry.id}}</td>    
                    <td>{{metDataEntry.day}}</td>    
                    <td>{{metDataEntry.hour}}</td>    
                    <!-- </router-link> -->
                </tr>  
            </table>    

        </div>
    </div>
    </div>
</template>

<script>
    import shared from '../shared'

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
            this.fetchMetOceanData = shared.fetchMetOceanData
            this.fetchMetOceanData()
        }, 
        methods: {
            
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