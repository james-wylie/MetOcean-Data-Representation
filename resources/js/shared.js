export default {
  fetchMetOceanData: function () {
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
}
}
