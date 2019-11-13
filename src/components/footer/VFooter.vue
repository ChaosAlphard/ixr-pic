<template>
  <footer class="footer">
    <kbd>404</kbd>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class VFooter extends Vue {
}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

.footer {
  position: relative;
  width: 100%;
  height: 120px;
  background: {
    image: url('http://seopic.699pic.com/photo/50142/1253.jpg_wh1200.jpg');
    repeat: no-repeat;
    size: cover;
    position: center bottom;
  }
}
</style>
