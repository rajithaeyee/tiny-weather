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
</style>