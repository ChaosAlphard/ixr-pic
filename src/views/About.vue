<template>
  <div class="about">
    About
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class About extends Vue {

  private id = this.$route.path
  private para = this.$route.params

  mounted() {
    setTimeout(() => {
      console.log(this.$route.path)
      console.log(this.$route.params)
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

</style>
