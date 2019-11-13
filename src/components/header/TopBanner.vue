<template>
  <div class='banner banner-bg-style'
  :style="{backgroundImage: `url(${bg})`}">
    <!-- banner的模糊背景 -->
    <div class='banner-blur banner-bg-style' :style="{
      backgroundImage: `url(${bg})`
    }"></div>

    <!-- banner内容 -->
    <div class="banner-content">
      <!-- 导航 -->
      <VNav class="nav" />

      <!-- 用户信息 -->
      <UserInfo class="userinfo" v-if="!!user.id" :user="user" />
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
  position: relative;
  width: 100%;
  // min-width: 720px;
  height: 42px;
  box-shadow: 0 0 6px 0 #000;
  z-index: 10;

  .banner-blur {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    filter: blur(3px);
    z-index: -1;
  }

  .banner-content {
    @include flex(space-between, center);
    position: relative;
    width: 72%;
    // min-width: 600px;
    height: 42px;
    margin: {
      left: auto;
      right: auto;
    }

    .userinfo {
      align-self: flex-start;
      margin-top: 10px;
      flex-shrink: 0;
    }
  }

}
</style>
