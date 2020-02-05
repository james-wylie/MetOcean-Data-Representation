<template>
  <div>

    <router-link to="calendar">Calendar</router-link>
    <router-link to="metdatalist"><p>metdatalist</p></router-link>
    <router-link to="d3"><p>d3</p></router-link>
  </div>
</template>

<script>
export default {
   mounted() {
            console.log('Component mounted.')
        }
  
}
</script>