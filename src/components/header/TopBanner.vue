<template>
  <div class='banner banner-bg-style' ref="banner" :style="{
    backgroundImage: `url(${bg})`
  }">
    <div class='banner-blur banner-bg-style' ref='bannerBlur' :style="{
      backgroundImage: `url(${bg})`
    }"></div>

    <!-- <div class="banner-content"> -->
      <div class="banner-left">
        LOGO HERE
      </div>

      <div class="banner-right">
        <UserInfo v-if="!!user.id" :user="user" class="usr-info" />
      </div>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import UserInfo from './UserInfo.vue'

@Component({
  components: {
    UserInfo
  }
})
export default class TopBanner extends Vue {
  @Prop({ default: '' })
  private readonly bg!: string

  user: any = {}

  private getUserInfo() {
    this.axios.get('http://jsonplaceholder.typicode.com/users/1')
      .then(res => {
        this.user = res.data
      })
  }

  private mounted() {
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/themes.scss';

.banner-bg-style {
  background: {
    repeat: no-repeat;
    position: 50% 278px;
    size: cover;
  }
}

.banner {
  @include flex(space-between, center);
  position: relative;
  width: 100%;
  height: 42px;
  box-shadow: 0 0 6px 0 #000;

  .banner-blur {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    filter: blur(1px);
    overflow: hidden;
    z-index: -1;
  }

  .banner-content {

  }

  .banner-right {
    width: 400px;
    padding-top: 10px;
    align-self: stretch;
    flex-shrink: 0;
    /* flex */
    @include flex(center, unset);
  }
}

</style>
