<template>
  <div class='banner' ref="banner">
    <div class="banner-left">
      LOGO HERE
    </div>

    <div class="banner-right">
      <UserInfo v-if="!!user.id" :user="user" class="usr-info" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import UserInfo from './UserInfo.vue'

@Component({
  components: {
    UserInfo
  }
})
export default class TopBanner extends Vue {
  @Prop({ default: '' })
  private readonly bg!: string

  private user: any = {}

  private getUserInfo() {
    this.axios.get('http://jsonplaceholder.typicode.com/users/1')
      .then(res => {
        this.user = res.data
      })
  }

  private getPseudoElement(el: HTMLElement, type: string): CSSStyleDeclaration {
    return window.getComputedStyle(el, type)
  }

  private setPseudoElementBackground(pe: CSSStyleDeclaration, bg: string): void {
    pe.backgroundImage = bg
  }

  private mounted() {
    this.getUserInfo()
    this.setPseudoElementBackground(
      this.getPseudoElement(this.$refs.banner as HTMLElement, '::before'),
      this.bg
    )
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/themes.scss';

.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 42px;
  box-shadow: 0 0 6px 0 #000;
  // background: {
  //   image: url("https://i.loli.net/2019/10/29/UFci9ls4ehPtgXn.jpg");
  //   repeat: no-repeat;
  //   attachment: fixed;
  //   size: cover;
  //   position: top center;
  // }
  &::before {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background: {
      repeat: no-repeat;
      attachment: fixed;
      size: cover;
      position: top center;
    }
    filter: blur(3px);
    z-index: -1;
  }

  .banner-right {
    width: 400px;
    padding-top: 10px;
    align-self: stretch;
    flex-shrink: 0;
    /* flex */
    @include flex(center, unset);
  }
}

</style>
