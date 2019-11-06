<template>
  <ul class="home">
    <!-- 推荐 -->
    <li class="section-wrapper">
      <Split :bg="'http://seopic.699pic.com/photo/50142/1253.jpg_wh1200.jpg'">
        <span>Today Recommend</span>
      </Split>
      <div class="section">
        <div class="section-content">
          <div>10</div><div>10</div><div>10</div>
          <div>10</div> <div>10</div><div>10</div>
          <div>10</div><div>10</div><div>10</div>
          <div>10</div>
        </div>
      </div>
    </li>

    <!-- 景物 -->
    <li class="section-wrapper">
      <Split>
        <span>Landscape</span>
      </Split>
      <div class="section">
        <div class="section-content"></div>
      </div>
    </li>

    <!-- 插画 -->
    <li class="section-wrapper">
      <Split>
        <span>Anime</span>
      </Split>
      <div class="section">
        <div class="section-content"></div>
      </div>
    </li>

    <!-- 最近上传 -->
    <li class="section-wrapper">
      <Split>
        <span>NearBy Upload</span>
      </Split>
      <div class="section">
        <div class="section-content"></div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MTBtn from '@/components/MTBtn.vue'
import Split from '@/components/SplitDiv.vue'

@Component({
  components: {
    MTBtn,
    Split
  }
})
export default class Home extends Vue {
  private headPics = {}

  private setPictureUrl(data: object) {
    // ...
  }

}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

.home {
  @include flex(flex-start, stretch, column);
  position: relative;
}
.section {
  @include flex(center);
  height: 200px;
}
.section-content {
  width: 72%;
  max-width: 1600px;
  min-width: 600px;
  height: 100%;
  box-shadow: 0 0 25px 5px #FAA inset;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(5, 1fr);
}
</style>
