<template>
  <header class='header' :style="{
    backgroundImage: `url(${bg})`
  }">
    <TopBanner :bg="bg" />
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TopBanner from './TopBanner.vue'

@Component({
  components: {
    TopBanner
  }
})
export default class VHeader extends Vue {
  bg = 'https://i.loli.net/2019/10/29/lxMC7V3OkUFY8WN.jpg'
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 300px;
  background: {
    repeat: no-repeat;
    position: top center;
    size: cover;
  }

}
</style>
