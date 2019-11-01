<template>
  <ul class="nav">
    <li class="mav-item">主页</li>
    <router-link tag="li" :to="{name: 'home'}">
      <a>主页</a>
    </router-link>
    <li class="mav-item">插画</li>
    <li class="mav-item">游戏</li>
    <li class="mav-item">景物</li>
    <li class="mav-item">图集</li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class VNav extends Vue {
  @Prop({ default: '' }) private readonly bg?: string
}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

</style>
