<template>
  <button class="mt-btn">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class MTBtn extends Vue {
  @Prop({default: false}) readonly border!: boolean
  @Prop({default: false}) readonly block!: boolean 
}
</script>

<style lang="scss" scoped>

</style>
