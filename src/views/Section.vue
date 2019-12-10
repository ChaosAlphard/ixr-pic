<template>
  <div class="section">
    <kbd>{{partition}}</kbd>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

@Component
export default class Section extends Vue {
  private partition: string|null = null

  private mounted() {
    console.log(this.$route.params)
  }

  private beforeRouteEnter(to:any, from:any, next: (vm:any) => void) {
    next((vm:any) => {
      vm.partition = vm.$route.params.section
      console.log("enter: "+vm.$route.params.section)
    })
  }

  private beforeRouteUpdate(to:any, from:any, next: () => void) {
    this.partition = this.$route.params.section
    console.log("update: "+this.$route.params.section)
    next()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

</style>
