<template>
  <header class='header' ref="header"
  :style="{backgroundImage: `url(${bg})`}">
    <!-- header底部的banner条 -->
    <TopBanner :bg="bg" :class="{'fixed-to-top': bannerFixed}" />
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
  private bg: string = 'https://i.loli.net/2019/10/29/UFci9ls4ehPtgXn.jpg'

  public bannerFixed = false

  private getRanPic(): void {
    this.axios.get('/api/ranpic')
      .then(res => {
        this.bg = res.data
      })
  }

  private watchScroll(el: HTMLElement): void {
    const boundBottom = el.getBoundingClientRect().bottom
    this.bannerFixed = (boundBottom < 42)
  }

  private mounted() {
    // this.getRanPic()

    // 监听滚动, 设置banner定位
    window.onscroll = throttle(
      this.watchScroll, 15,
      this.$refs.header as HTMLElement
    ) as (
      this: GlobalEventHandlers, ev: Event
    ) => any
  }

}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  min-width: 720px;
  height: 320px;
  padding-top: 278px;
  box-sizing: border-box;
  background: {
    repeat: no-repeat;
    position: center top;
    size: cover;
  }
}

</style>

<style>
.fixed-to-top {
  position: fixed !important;
  top: 0;
}
</style>
