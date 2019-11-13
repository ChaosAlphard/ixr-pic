<template>
  <div class="err">
    <kbd>404</kbd>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {
}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

</style>
