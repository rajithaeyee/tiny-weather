<template>

  <div class="columns forecast-item" style="padding-top:2%;">
    <div class="column is-one-quarter">
      {{forecastItem.date}}
    </div>

 <div class="column is-two-thirds" style="text-align:center">
  <skycon :condition="forecastItem.icon" :width="20" :height="20" />
  <br/>
  {{forecastItem.temperature}}&#8451;
  <br/>
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
<style lang="scss" scoped>
.forecast-item{
  background-color:#efefef;
  transition-delay: 4ms;
}

.forecast-item:hover{
  background-color:white;
}
</style>