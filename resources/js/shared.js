export default {
  fetchMetOceanData: function () {
    axios.get('get-metocean-data')
      .then(res => {
        let newMap = res.data.map(el => {
          let dayHour = el.Time.split(' ')
          el.day = dayHour[0]
          let hourHour = dayHour[1].split(':')
          el.hour = hourHour[0]
          return el
        })
        this.metData = res.data
      })
      .catch(err => {
        console.log(err)
      })
  },

  fullTitles: {
    Time: 'Date',
    id: 'ID',
    lev: 'Elevation [m]',
    hs: 'Significant Wave Height [m]',
    hx: 'Spectral estimate of maximum wave [m]',
    tp: 'Peak Period [s]',
    tm01: 'Mean Wave period [s]',
    tm02: 'Mean wave period (s]',
    dp: 'Peak wave direction (from) [deg]',
    dpm: 'Mean direction at peak frequency (from) [deg]',
    hs_sw1: 'Significant wave height of primary swell [m]',
    hs_sw8: 'Significant wave height of swell (> 8s) [m]',
    tp_sw1: 'Peak period of Primary Swell [s]',
    tp_sw8: 'Peak period of swell (>8s) [s]',
    dpm_sw8: 'Mean direction at swell peak frequency (from) [deg]',
    dpm_sw1: 'Mean direction of primary swell peak frequency [deg]',
    hs_sea8: 'Significant wave height of sea [m]',
    hs_sea: 'Significant wave height of wind sea [m]',
    tp_sea8: 'Peak period of sea [s]',
    tp_sea: 'Peak period of wind sea [s]',
    tm_sea: 'Mean period of wind sea [s]',
    dpm_sea8: 'Mean direction at sea peak freqeuncy (from) [deg]',
    dpm_sea: 'Mean direction at wind sea peak frequency (from) [deg]',
    hs_ig: 'Infragravity significant wave height [m]',
    hs_fig: 'Far infragravity wave height [m]',
    wsp: 'Mean wind speed at 10m [kts]',
    gst: 'Typical Gust speed [kts]',
    wd: 'Wind direction (from) [deg]',
    wsp100: 'Mean wind speed at 100m [kts]',
    wsp50: 'Mean wind speed at 50m [kts]',
    wsp80: 'Mean wind speed at 80m [kts]',
    precip: 'Precipitation [mm/hr]',
    tmp: 'Air temperature [C]',
    rh: 'Relative Humidity [%]',
    vis: 'Visibility [km]',
    cld: 'Cloud Cover [%]',
    cb: 'Cloud Base [m]',
    csp0: 'Surface Current Speed [kts]',
    cd0: 'Surface Current Direction [deg]',
    ss: 'Storm Surge elevation [m]',
    sst: 'Sea Surface Temperature [C]'
  }
}
