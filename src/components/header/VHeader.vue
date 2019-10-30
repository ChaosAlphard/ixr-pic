<template>
  <header class='header' :style="{
    backgroundImage: `url(${bg})`
  }">
    <div class="placeholder" ref="placeholder"></div>
    <TopBanner :bg="'https://www.w3school.com.cn/i/eg_tulip.jpg'" class="top-banner" ref="bannComp" />
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TopBanner from './TopBanner.vue'
import { throttle } from '@/plugins/commonFunction.ts'

@Component({
  components: {
    TopBanner
  }
})
export default class VHeader extends Vue {
  // https://www.w3school.com.cn/i/eg_tulip.jpg
  bg = 'https://www.w3school.com.cn/i/eg_tulip.jpg'

  private getRanPic() {
    this.axios.get('/api/ranpic')
      .then(res => {
        this.bg = res.data
      })
  }

  private mounted() {
    // this.getRanPic()
  }

}
</script>

<style lang="scss" scoped>
@import '~@/scss/themes.scss';

.header {
  @include flex(flex-start, center, column);
  position: relative;
  width: 100%;
  height: 320px;
  background: {
    repeat: no-repeat;
    position: center top;
    size: cover;
  }

  .placeholder {
    width: 100%;
    height: 278px
  }

  .top-banner {
    z-index: 10;
  }

}
</style>
