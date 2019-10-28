<template>
  <div>
    <Btn :bg="'https://s1.ax1x.com/2018/12/05/Flc7UH.jpg'">00</Btn>
    <Btn :bg="'https://s1.ax1x.com/2018/12/05/Flc7UH.jpg'">01</Btn>
    <Btn :bg="'https://s1.ax1x.com/2018/12/05/Flc7UH.jpg'">02</Btn>
    <Btn :bg="'https://s1.ax1x.com/2018/12/05/Flc7UH.jpg'">03</Btn>
    <Btn :bg="'https://s1.ax1x.com/2018/12/05/Flc7UH.jpg'">04</Btn>
    <Btn :bg="'https://s1.ax1x.com/2018/12/05/Flc7UH.jpg'">05</Btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Btn from '@/components/SplitDiv.vue'

@Component({
  components: {
    Btn
  }
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
