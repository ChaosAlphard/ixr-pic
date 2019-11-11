<template>
  <ul class="nav">
    <router-link tag="li" class="nav-item"
    :to="{name: 'home'}">
      <span>主页</span>
    </router-link>

    <router-link tag="li" class="nav-item"
    :to="{name: 'home'}">
      <span>插画</span>
    </router-link>

    <router-link tag="li" class="nav-item"
    :to="{name: 'home'}">
      <span>游戏</span>
    </router-link>

    <router-link tag="li" class="nav-item"
    :to="{name: 'home'}">
      <span>景物</span>
    </router-link>

    <router-link tag="li" class="nav-item"
    :to="{name: 'about', params: {id:'1'}}">
      <span>图集</span>
    </router-link>

    <router-link tag="li" class="nav-item"
    :to="{name: 'about'}">
      <span>关于</span>
    </router-link>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class VNav extends Vue {
}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

.nav {
  @include flex(flex-start, stretch);
  position: relative;
  height: 100%;
  color: #FFF;
  text-shadow: 0 0 2px #FFF;

  .nav-item {
    @include flex(center, center);
    position: relative;
    font-size: 18px;
    padding: {
      left: 8px;
      right: 8px;
    }
    &:hover::before {
      content: '';
      position: absolute;
      top: 0; bottom: 0;
      left: 0; right: 0;
      border-bottom: 1px solid #FFF;
    }
    cursor: pointer;
  }
}
</style>

<style>
.nav-tab-active::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  border-bottom: 2px solid #FFF;
}
</style>
