<template>
  <div class='banner banner-bg-style'
  :style="{backgroundImage: `url(${bg})`}">
    <!-- banner的模糊背景 -->
    <div class='banner-blur banner-bg-style' :style="{
      backgroundImage: `url(${bg})`
    }"></div>

    <!-- banner内容 -->
    <div class="banner-content">
      <!-- <div class="banner-left"> -->
      <VNav class="nav" />
      <!-- </div> -->

      <!-- <div class="banner-right"> -->
      <UserInfo class="userinfo" v-if="!!user.id" :user="user" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import UserInfo from './UserInfo.vue'
import VNav from '@/components/nav/VNav.vue'

@Component({
  components: {
    UserInfo,
    VNav
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
@import '~@/scss/mixin.scss';

.banner-bg-style {
  background: {
    // repeat: no-repeat;
    position: center -278px;
    size: cover;
  }
}

.banner {
  // @include flex(center, center);
  position: relative;
  width: 100%;
  min-width: 960px;
  height: 42px;
  box-shadow: 0 0 6px 0 #000;
  z-index: 10;

  .banner-blur {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    filter: blur(3px);
    overflow: hidden;
    z-index: -1;
  }

  .banner-content {
    @include flex(space-between, center);
    position: relative;
    width: 72%;
    margin: {
      left: auto;
      right: auto;
    }

    .nav {
      height: 42px;
      width: 120px;
    }

    .userinfo {
      // width: 400px;
      margin-top: 10px;
      align-self: stretch;
      flex-shrink: 0;
    }
  }
}

</style>
