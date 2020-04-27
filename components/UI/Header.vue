<template>
<section class="hero is-warning">
  <div class="hero-body">
    <div class="container header-content">
      <div class="field has-addons has-addons-centered">
  <p class="control">
    <input class="input" v-model="searchKey" type="text" placeholder="Enter Your City/Country">
  </p>
  <p class="control">
    <a class="button is-primary" @click="search">
      Search
    </a>
  </p>
</div>
    </div>
  </div>
</section>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator';

@Component({})
export default class Header extends Vue{
  searchKey:string = "";
  @Prop({})
  searchForLocation!:Function;

  async search(){
    await this.searchForLocation(this.searchKey);
  }
}
</script>

<style lang="scss" scoped>
.header-content{
  justify-content: center;
  text-align: center;
  display: flex;
}
</style>