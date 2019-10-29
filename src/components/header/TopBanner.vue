<template>
<div class='banner'>
  <li>li1</li>
  <li>li2</li>
  <Button block>123123</Button>
  <Button block sm>123123</Button>
  <Button block md>123123</Button>
  <Button lg ribbin>123123</Button>

  <div class='avatar-content'>
    <div class='avatar-content-title'>
      <img class='avatar' alt="avatar"
      :src="user.avatar" />
    </div>

    <div class='avatar-content-detail'>
      <UserInfo v-if="user.id != null" :usr="user" />
    </div>
  </div>

</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Button from '../MTBtn.vue'

@Component({
  components: {
    Button
  }
})
export default class Home extends Vue {
  private user: any = {}
}
</script>

<style lang="scss" scoped>
.banner {
  position: fixed;
  width: 100%;
  height: 42px;
  box-shadow: 0 0 6px 0 #000;
  background: url("https://www.w3school.com.cn/i/eg_tulip.jpg") no-repeat top center fixed / cover;

  .avatar-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 360px;
    position: absolute;
    top: 10px;
    right:40px;

    .avatar-content-title {
      /* 2px skew */
      display: flex;
      z-index: 10;

      .avatar {
        width: 64px;
        height: 64px;
        border-radius: 32px;
        object-fit: cover;
        overflow: hidden;
        box-shadow: 0 0 6px 0 #000;
        transition: transform .1s;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
      }
    }

    .avatar-content-detail {
      width: 100%;
      height: 240px;
      background-color: #FFF;
      padding-top: 40px;
      box-sizing: border-box;
      opacity: 0;
      transform: translateY(-400px);
      transition: all .5s, opacity .5s cubic-bezier(0, 1, 0.8, 1);
      border-radius: 8px;
      overflow: hidden;
      /* for innser content */
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }
  }
}

.avatar-content-title:hover + .avatar-content-detail, .avatar-content-detail:hover  {
  transform: translateY(-32px);
  opacity: 1;
  box-shadow: 0 2px 2px 0px #0008;
  transition: all .5s, opacity .5s ease-in;
}
</style>
