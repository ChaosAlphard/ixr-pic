<template>
  <div class="about">
    About
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class About extends Vue {

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

.about {
  width: 100%;
  height: 100vh;
}
</style>
