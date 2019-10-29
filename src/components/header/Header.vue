<template>
  <header class='header'>
    <TopBanner />
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
export default class Header extends Vue {
  private user: any = {}
}
</script>

<style lang="scss" scoped>

</style>
