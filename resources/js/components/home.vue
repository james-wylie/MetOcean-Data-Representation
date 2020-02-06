<template>
  <div>
    <div>
  <h1>MetData</h1>
    <h3 class="textsize">Please select from the dates below. </h3>
  </div>
<graphVisualisation></graphVisualisation>
  </div>
</template>

<script>
export default {
   mounted() {
            console.log('Component mounted.')
        }
  
}
</script>

<style>
    h1, h3, h4{
    position: fixed;
    color: darkblue;
    }
  h3{
    top: 10%;
    left: 3%;
  }
  h1{
    top: 3%;
    left: 3%;
  }

  .textsize{
    font: 20px sans-serif;
  }
</style>