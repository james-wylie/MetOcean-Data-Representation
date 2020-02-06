<template>
        <form>
      <div @click="changeData('id')" class="btn btn-primary">ID</div>
      <div @click="changeData('lev')" class="btn btn-primary">Elevation</div>
      <div @click="changeData('hs')" class="btn btn-primary">Significant Wave Height</div>
      <div @click="changeData('hx')" class="btn btn-primary">Spectral estimate of maximum wave</div>
      <div @click="changeData('tp')" class="btn btn-primary">Peak Period</div>
      <div @click="changeData('tm01')" class="btn btn-primary">Mean Wave period</div>
      <div @click="changeData('tm02')" class="btn btn-primary">Mean Wave period</div>
      <div @click="changeData('dp')" class="btn btn-primary">Peak wave direction (from)</div>
      <div @click="changeData('dpm')" class="btn btn-primary">Peak wave direction (from)</div>
      <div @click="changeData('hs_sw1')" class="btn btn-primary">Peak wave direction (from)</div>
      <div @click="changeData('hs_sw8')" class="btn btn-primary">Peak wave direction (from)</div>
      <div @click="changeData('tp_sw1')" class="btn btn-primary">Peak wave direction (from)</div>
      <div @click="changeData('tp_sw8')" class="btn btn-primary">Peak wave direction (from)</div>
      <div @click="changeData('dpm_sw8')" class="btn btn-primary">Peak wave direction (from)</div>
      <div @click="changeData('dpm_sw8')" class="btn btn-primary">Peak wave direction (from)</div>
      <div @click="changeData('dp')" class="btn btn-primary">Peak wave direction (from)</div>
    </form>


</template>