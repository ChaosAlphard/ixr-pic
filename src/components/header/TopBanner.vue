<template>
  <div class='banner banner-bg-style' :class="{'fixed-to-top': fixed}"
  :style="{backgroundImage: `url(${bg})`}">
    <div class='banner-blur banner-bg-style' :style="{
      backgroundImage: `url(${bg})`
    }"></div>

    <div class="banner-content">
      <div class="banner-left">
        <VNav class="banner-left" />
      </div>

      <div class="banner-right">
        <UserInfo v-if="!!user.id" :user="user" class="usr-info" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import UserInfo from './UserInfo.vue'
import VNav from '@/components/nav/VNav.vue'

@Component({
  components: {
    UserInfo
  }
})
export default class TopBanner extends Vue {
  @Prop({ default: '' })
  private readonly bg!: string

  @Prop({ default: false })
  private readonly fixed!: boolean

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
  // position: relative;
  width: 100%;
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

    .banner-right {
      width: 400px;
      padding-top: 10px;
      align-self: stretch;
      flex-shrink: 0;
      /* flex */
      @include flex(center, unset);
    }
  }
}

</style>

<style>
.fixed-to-top {
  position: fixed !important;
  top: 0;
}
</style>
