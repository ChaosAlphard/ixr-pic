<template>
  <div class="split-bg" ref="split"
  :style="`background-image: url(${bg})`">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SplitDiv extends Vue {
  @Prop({ default: '' }) private readonly bg?: string
}
</script>

<style lang="scss" scoped>
.split-bg {
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: {
    attachment: fixed;
    size: cover;
    position: center center;
    repeat: no-repeat;
  };
  line-height: 280px;
  font-size: 36px;
  color: #FFF;
  text-shadow: 0 0 10px #000;
}
</style>
