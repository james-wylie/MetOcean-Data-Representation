<template>
    <div class="container">
        <div class="row justify-content-center">
           
           <div v-for="(metDataEntry, index) in metData" :key="metDataEntry.id">
           <p> {{metData.lev}}
            {{metData.hs}}
            {{metData.hx}}
            {{metData.tp}}
            {{metData.tm01}} </p>
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
                        console.log(res.data.data)
                        this.metData = res.data.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>
