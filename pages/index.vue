<template>
  <div>
    <Header :searchForLocation="searchForLocation" :searchKey="searchKey" />
    <WeatherDisplay v-if="shouldDisplay" :currently="currently" :dailyPrediction="dailyPrediction" />
    <!-- <skycon condition="clear-day" />
    <skycon condition="clear-night" />-->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator";
import Header from "@/components/UI/Header.vue";
import WeatherDisplay from "@/components/UI/WeatherDisplay.vue";
import ForecastItem from "@/utils/models/ForecastItems";
import moment from 'moment';

@Component({
  components: {
    Header,
    WeatherDisplay
  }
})
export default class Index extends Vue {
  currently!: ForecastItem; //= new ForecastItem(false, "04 April", "Snow", "30", "Cloudy", "Anamaduwa");;
  dailyPrediction!: ForecastItem[];
  shouldDisplay: boolean = false;
  searchKey!: string;

  mounted() {
    this.searchKey = "";
  }
  asyncData(context: any) {
    console.log(`${process.env.darkUrl}`);
    return context.$axios
      .get(`${process.env.darkUrl}/37.8267,-122.4233?units=si&lang=en`)
      .then((res: any) => {
        return {
          currently: res.data.currently,
          dailyPrediction: res.data.daily,
          shouldDisplay: true
        };
      });
  }
  locationDetails: any = {
    longtude: 0,
    latitude: 0
  };
  async searchForLocation(searchText: string) {
    (this as any).$axios
      .get(
        `${process.env.mapUrl}${encodeURIComponent(
          searchText
        )}.json?access_token=${process.env.mapKey}&limit=1`
      )
      .then((res: any) => {
        debugger;
        this.locationDetails = {
          longtude: res.data.features[0].center[0],
          latitude: res.data.features[0].center[1]
        };
      });
  }

  @Watch("locationDetails")
  async locationsChanged() {
    if (this.locationDetails.longtude !== 0 && this.locationDetails.latitude) {
      console.log(this.locationDetails);
      (this as any).$axios
        .get(
          `/api/${this.locationDetails.latitude},${this.locationDetails.longtude}?units=si&lang=en`
        )
        .then((res: any) => {
          //const today=moment(time);
          if (res.data.currently) {
            const currentDataItem = res.data.currently;
            this.currently = new ForecastItem(
              false,
              moment(res.data.currently.time *1000).format('YYYY-MM-DD'),
              currentDataItem.icon,
              currentDataItem.temperature,
              currentDataItem.summary,
              "AAAAAAA"
            );
          }
          this.currently = res.data.currently;
          this.dailyPrediction = [];
          res.data.daily.data.forEach((element: any, index: number) => {
            if (index !== 0) {
              let item = new ForecastItem(
                index === 1 ? true : false,
                moment(res.data.daily.data[index].time*1000).format('YYYY-MM-DD'),
                element.icon,
                element.temperature,
                element.summary,
                this.searchKey
              );
              this.dailyPrediction.push(item);
            }
          });

          console.log(this.currently);
          console.log(this.dailyPrediction);
          //}
        });
    }
  }
}
</script>

<style>
</style>
