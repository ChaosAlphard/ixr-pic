<template>
  <button class="mt-btn" ref="btn">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class MTBtn extends Vue {
  @Prop({default: false}) private readonly border!: boolean
  @Prop({default: false}) private readonly block!: boolean

  private clickWave(btn: HTMLButtonElement) {
    btn.onclick = (ev) => {
      const e:any = window.event || ev

      const x = e.clientX - btn.getBoundingClientRect().left
      const y = e.clientY - btn.getBoundingClientRect().top

      const w = btn.offsetWidth

      const el = document.createElement('div')
      el.classList.add('wave')
      el.style.left = x+'px'
      el.style.top = y+'px'
      el.style.width = `${w*2}px`
      el.style.height = `${w*2}px`
      el.style.marginTop = `-${w}px`
      el.style.marginLeft = `-${w}px`
      el.style.boxShadow = `0 0 ${w/2}px ${w/2}px #FFF inset`
      btn.appendChild(el)

      setTimeout(() => {
        btn.removeChild(el)
      }, 800)
    }
  }

  private mounted() {
    this.clickWave(this.$refs.btn as HTMLButtonElement)
  }
}
</script>

<style lang="scss" scoped>
.mt-btn {
  width: 180px;
  height: 40px;
  margin: 0;
  padding: 10px;
  border: 0;
  background: #FAA;
  position: relative;
  overflow: hidden;
}
</style>

<style>
.wave{
  position: absolute;
  border-radius: 50%;
  background-color: #FFFFFFAA;
  opacity: 1;
  transform: scale(0);
  animation: wave .5s linear;
}

@keyframes wave {
  100%{
    opacity: 0;
    transform: scale(1);
  }
}
</style>
