<template>
<div class="weather-widget">
  <div class="weather-icon row">
      <skycon :condition="forecastItem.icon" color="white" width="250" height="250"/>
  </div>
  <h1 class="temp-c row">{{forecastItem.temperature}}C</h1>
  <h5 class="condition row">{{forecastItem.summary}}</h5>
  <h3 class="location-name row">{{forecastItem.location}}</h3>
  <h5 class="location-country row">{{forecastItem.date}}</h5>
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