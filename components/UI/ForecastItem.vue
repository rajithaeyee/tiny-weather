<template>
   <div class="forecast-item">
    <div class="day">
      <h4>{{forecastItem.dayName}}</h4>
      <h6>{{forecastItem.date}}</h6>
    </div>
    <div class="forecast">
       <skycon :condition="forecastItem.icon" width="20" height="20"/> {{forecastItem.temprature}}
      <h6>{{forecastItem.summary}}</h6>
    </div>
  </div>   
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator';
import ForeCastItems from '@/utils/models/ForecastItems';
@Component({})
export default class ForecastItem extends Vue{
@Prop({})
forecastItem!:ForeCastItems;

}
</script>