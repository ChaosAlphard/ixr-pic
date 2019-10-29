<template>
  <div class='banner'>
    <div class="banner-left">
      LOGO HERE
    </div>

    <div class="banner-right">
      <UserInfo v-if="!!user.id" :user="user" class="usr-info" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserInfo from './UserInfo.vue'

@Component({
  components: {
    UserInfo
  }
})
export default class TopBanner extends Vue {
  private user: any = {}

  private getUserInfo() {
    fetch('http://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => {
        this.user = data
      })
  }

  private mounted() {
    this.getUserInfo()
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
  background: {
    image: url("https://www.w3school.com.cn/i/eg_tulip.jpg");
    repeat: no-repeat;
    attachment: fixed;
    size: cover;
    position: top center;
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
