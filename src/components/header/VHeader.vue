<template>
  <header class='header' :style="{
    backgroundImage: `url(${bg})`
  }">
    <div class="placeholder" ref="placeholder"></div>
    <TopBanner :bg="bg" :fixed="bannerFixed" />
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
  // http://seopic.699pic.com/photo/50142/1253.jpg_wh1200.jpg
  // https://i.loli.net/2019/10/30/4ZGiYqvVPgfEa2B.jpg
  private bg: string = ''

  public bannerFixed = false

  private getRanPic() {
    this.axios.get('/api/ranpic')
      .then(res => {
        this.bg = res.data
      })
  }

  private watchScroll(el: HTMLElement): void {
    const boundBottom = el.getBoundingClientRect().bottom
    if(boundBottom < 0) {
      this.bannerFixed = true
    } else {
      this.bannerFixed = false
    }
  }

  private obServerScroll(el: HTMLElement): void {
    new IntersectionObserver(ioes => {
      for(const ioe of ioes) {
        if(ioe.intersectionRatio > 0) {
          this.bannerFixed = false
        } else {
          this.bannerFixed = true
        }
      }
    }).observe(el)

  }

  private mounted() {
    // this.getRanPic()

    // IntersectionObserver兼容性不好(2019.10.30)
    // this.obServerScroll(this.$refs.placeholder as HTMLElement)

    // 兼容写法
    window.onscroll = throttle(
      this.watchScroll, 15,
      this.$refs.placeholder as HTMLElement
    ) as (
      this: GlobalEventHandlers, ev: Event
    ) => any
  }

}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

.header {
  @include flex(flex-start, center, column);
  position: relative;
  width: 100%;
  min-width: 640px;
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

}
</style>
