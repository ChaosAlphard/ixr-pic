<template>
  <div class="section">
    <kbd>{{partition}}</kbd>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Section extends Vue {
  private partition: string|null = this.$route.params.section

  private mounted() {
    console.log(this.$route.params)
    this.partition = this.$route.params.section
  }

  private updated() {
    this.partition = this.$route.params.section
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

</style>
