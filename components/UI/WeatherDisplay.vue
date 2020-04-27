<template>
<div class="display-container" v-if="currently">
  <div class="columns">
      <div class="column is-two-fifths today" style="background-color:#3a3a3c; z-index:-1; min-height:113vh;">
        <Today :forecastItem="currently"/>
      </div>
      <div class="column is-three-quarters" style="z-index:-1; min-height:118vh;">
       <ForeCastItem :key="key" :forecastItem="item" v-for="(item, key) in dailyPrediction"/> 
      </div>
    </div>  
<!-- <Today :forecastItem="currently"/>
<div class="weather-forecast">
<ForeCastItem :key="key" :forecastItem="item" v-for="(item, key) in dailyPrediction"/>
</div> -->
</div>

</template>


<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator';
import Today from '@/components/UI/Today.vue';
import ForeCastItem from '@/components/UI/ForecastItem.vue';
import ForeCastItems from '@/utils/models/ForecastItems';
@Component({
    components: {
        Today,
        ForeCastItem
    }
})
export default class WeatherDisplay extends Vue{
@Prop({})
currently!: ForeCastItems;
@Prop({})
dailyPrediction!: ForeCastItems[];
}
</script>

<style lang="scss">
.today{
  display: flex;
  justify-content: center;
  height:100vh;
}
// .row {
//   text-align: center;
//   margin-bottom: 5px;
// }
// .weather-widget {
//   padding: 20px 0;
//   box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);
//   display: flex;
//   flex-flow: column wrap;
//   justify-content: center;
//   justify-items: center;
//   background-color: #3a3a3c;
//   color: white;
//   width: 25%;
// }

// .weather-icon {
//   font-size: 5rem;
//  // animation: rotation 5s infinite linear;
// }

// .temp-c {
//   margin-bottom: 20px;
// }

// .location-country {
//   color: #c2c2c2;
//   font-weight: 300;
// }
// .weather-forecast {
//   width: 75%;
// }
// .forecast-item {
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid #e1e1e1;
//   padding: 20px;
//   transition: all 0.2s;
// }

// .forecast-item:hover {
//   background-color: #fff;
//   cursor: pointer;
// }
// .forecast-item h6 {
//   color: #888;
//   margin-top: 5px;
// }
// .forecast {
//   text-align: right;
// }

// @media only screen and (max-width: 600px) {
//   body {
//     flex-flow: column;
//   }
//   .weather-widget {
//     width: 100%;
//   }
//   .weather-forecast {
//     width: 100%;
//   }
//   .temp-c {
//     margin-bottom: 7px;
//   }
// }

// @keyframes rotation {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(359deg);
//   }
// }
// .today-forecast{
//     background-color: red;
//     height:50em;
// }
// .custom-col{
//     justify-content: space-between;
//   border-bottom: 1px solid #e1e1e1;
//   background-color: #efefef;
//   height:50em;
// }
// .custom-col:hover{
//   background-color: #fff;
//   cursor: pointer;
// }
</style>