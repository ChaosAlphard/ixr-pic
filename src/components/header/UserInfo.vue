<template>
  <div class='user-content'>
    <img class='avatar-img' :src="user.avatar" />

    <div class='user-detail'>
      Content Here
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UserInfo extends Vue {
  @Prop({ default: () => {} })
  private readonly user!: any
}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixin.scss';

.user-content {
  @include flex(flex-start, center, column);
  width: 360px;
  height: 64px;
  position: relative;

  .avatar-img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 6px 0 #000;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    transition: transform .1s;
    /* default avatar image */
    background: {
      image: url('https://www.w3school.com.cn/i/eg_cute.gif');
      size: cover;
      position: center center;
      repeat: no-repeat;
    }
    &:hover {
      transform: scale(1.2);
    }
  }

  .user-detail {
    position: absolute;
    top: 32px;
    left: 0;
    width: 360px;
    height: 240px;
    padding-top: 40px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #FFF;
    opacity: 0;
    transform: scale(0);
    transform-origin: top center;
    transition: transform .5s, opacity .5s cubic-bezier(0, 1, 0.8, 1);
    overflow: hidden;
    /* for innser content */
    @include flex(flex-start, center, column);
  }

  .avatar-img:hover + .user-detail, .user-detail:hover  {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 2px 2px 0px #0008;
    transition: transform .5s, opacity .5s ease-in;
  }

}

</style>
