export default {
  fetchMetOceanData: function () {
    axios.get('get-metocean-data')
      .then(res => {
        let newMap = res.data.map(el => {
          let day_hour = el.Time.split(" ")
          el.day = day_hour[0]
          let hour_hour = day_hour[1].split(":")
          el.hour = hour_hour[0]
          return el
        })
        this.metData = res.data
        console.log(res.data)
      })                    
      .catch(err => {
        console.log(err)
      })
},

  fullTitles: {
    Time : 'Date',    
    id : 'ID',    
    lev : 'Elevation',    
    hs : 'Significant Wave Height',    
    hx : 'Spectral estimate of maximum wave',    
    tp : 'Peak Period',    
    tm01 : 'Mean Wave period',    
    tm02 : 'Mean wave period',    
    dp : 'Peak wave direction (from)',    
    dpm : 'Mean direction at peak frequency (from)',    
    hs_sw1 : 'Significant wave height of primary swell',    
    hs_sw8 : 'Significant wave height of swell (> 8s)',    
    tp_sw1 : 'Peak period of Primary Swell',    
    tp_sw8 : 'Peak period of swell (>8s)',    
    dpm_sw8 : 'Mean direction at swell peak frequency (from)',    
    dpm_sw1 : 'Mean direction of primary swell peak frequency',    
    hs_sea8 : 'Significant wave height of sea',    
    hs_sea : 'Significant wave height of wind sea',    
    tp_sea8 : 'Peak period of sea',    
    tp_sea : 'Peak period of wind sea',    
    tm_sea : 'Mean period of wind sea',    
    dpm_sea8 : 'Mean direction at sea peak freqeuncy (from)',    
    dpm_sea : 'Mean direction at wind sea peak frequency (from)',
    hs_ig : 'Infragravity significant wave height',    
    hs_fig : 'Far infragravity wave height',    
   
    
    wsp : 'Mean wind speed at 10m',    
    gst : 'Typical Gust speed',    
    wd : 'Wind direction (from)',    
    wsp100 : 'Mean wind speed at 100m',    
    wsp50 : 'Mean wind speed at 50m',    
    wsp80 : 'Mean wind speed at 80m',    
    precip : 'Precipitation',    
    tmp : 'Air temperature',    
    rh : 'Relative Humidity',    
    vis : 'Visibility',    
    cld : 'Cloud Cover',    
    cb : 'Cloud Base', 
    csp0: 'Surface Current Speed',   
    cd0 : 'Surface Current Direction',    
    ss : 'Storm Surge elevation',    
    sst : 'Sea Surface Temperature'    
  }
}


