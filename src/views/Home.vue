<template>
  <div class="home">
    <Split :bg="'http://seopic.699pic.com/photo/50142/1253.jpg_wh1200.jpg'">
      <span>Today Recommend</span>
    </Split>
    <div class="section">Home</div>

    <Split>
      <span>Landscape</span>
    </Split>
    <div class="section"></div>

    <Split>
      <span>Anime</span>
    </Split>
    <div class="section"></div>
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

}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}
.section {
  box-shadow: 0 0 25px 5px #FAA inset;
  height: 200px;
}
</style>
