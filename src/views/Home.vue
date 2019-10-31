<template>
  <div class="home">
    <Split :bg="'http://seopic.699pic.com/photo/50142/1253.jpg_wh1200.jpg'">
      <span>Today Recommend</span>
    </Split>
    <div class="section">
      <div class="section-content">
        <div>10</div>
        <div>10</div>
        <div>10</div>
        <div>10</div>
        <div>10</div>
        <div>10</div>
        <div>10</div>
        <div>10</div>
        <div>10</div>
        <div>10</div>
      </div>
    </div>

    <Split>
      <span>Landscape</span>
    </Split>
    <div class="section">
      <div class="section-content"></div>
    </div>

    <Split>
      <span>Anime</span>
    </Split>
    <div class="section">
      <div class="section-content"></div>
    </div>
  </div>
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
  position: relative;
}
.section {
  @include flex(center);
  position: relative;
  height: 200px;
}
.section-content {
  width: 72%;
  max-width: 1600px;
  min-width: 600px;
  box-shadow: 0 0 25px 5px #FAA inset;
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 20% 20% 20% 20% 20%;
}
</style>
