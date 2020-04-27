<template>
<div class="weather-widget" style="padding-top:2%;">
  <h2 class="country-name">{{forecastItem.location.toUpperCase()}}</h2>
  <span class="date">{{forecastItem.date}}</span>
   <div class="weather-icon row">
      <skycon :condition="forecastItem.icon" :width="250" :height="250"/>
  </div>
  <h2>Temperature Now : {{forecastItem.temperature}}&#8451;</h2>
  <span>{{forecastItem.date}}</span>
</div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator';
import ForeCastItems from '@/utils/models/ForecastItems';
@Component({})
export default class Today extends Vue{
@Prop({})
forecastItem!:ForeCastItems;

}
</script>

<style lang="scss" scoped>
.weather-widget{
  color:white;
  // display: flex;
  justify-content: center;
  text-align: center;
  padding-top:2%;
}

.country-name{
  font-size:38px;
  display: block;
}

.date{
  color:white;
  font-size:18px;
}
</style>