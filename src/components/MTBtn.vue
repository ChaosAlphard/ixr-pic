<template>
  <button ref="btn" class="mt-btn" :class="{
    block: block !== false,
    border: border !== false,
    sm: sm !== false,
    md: md !== false,
    lg: lg !== false
  }">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class MTBtn extends Vue {
  @Prop({ default: false }) private readonly border!: boolean
  @Prop({ default: false }) private readonly block!: boolean
  @Prop({ default: false }) private readonly sm!: boolean
  @Prop({ default: false }) private readonly md!: boolean
  @Prop({ default: false }) private readonly lg!: boolean

  private clickWave(btn: HTMLButtonElement) {
    btn.onclick = (ev) => {
      const e: MouseEvent = ev || window.event

      const x = e.clientX - btn.getBoundingClientRect().left
      const y = e.clientY - btn.getBoundingClientRect().top

      const w = btn.offsetWidth

      const el = document.createElement('div')
      el.classList.add('custom-mtbtn-style-wave')
      if(this.border !== false) {
        el.classList.add('custom-mtbtn-style-wave-border')
      }

      el.style.left = x+'px'
      el.style.top = y+'px'
      el.style.width = `${w*2}px`
      el.style.height = `${w*2}px`
      el.style.marginTop = `-${w}px`
      el.style.marginLeft = `-${w}px`

      btn.appendChild(el)

      setTimeout(() => {
        btn.removeChild(el)
      }, 800)
    }
  }

  private unlistenClick(btn: HTMLButtonElement) {
    btn.onclick = null
  }

  private mounted() {
    this.clickWave(this.$refs.btn as HTMLButtonElement)
  }

  private beforeDestroy() {
    this.unlistenClick(this.$refs.btn as HTMLButtonElement)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/themes.scss';

.mt-btn {
  position: relative;
  margin: 0;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 6px;
  color: $textColor;
  background-color: $primaryColor;
  cursor: pointer;
  overflow: hidden;
}
.mt-btn[disabled] {
  background-color: #AAAAAA;
  color: #FFFFFF;
}
.block {
  display: block;
  width: 100%;
}
.border {
  box-sizing: border-box;
  border: 1px solid $primaryColor;
  color: $primaryColor;
  background-color: #FFFFFF;
}
.sm {
  font-size: 10px;
}
.md {
  font-size: 18px;
}
.lg {
  font-size: 20px;
}
</style>

<style lang="scss">
@import '~@/scss/themes.scss';

.custom-mtbtn-style-wave {
  position: absolute;
  border-radius: 50%;
  background-color: #FFFFFF;
  opacity: 1;
  transform: scale(0);
  animation: custom-mtbtn-animation-wave .5s ease-out;
}
.custom-mtbtn-style-wave-border {
  background-color: $primaryColor;
}

@keyframes custom-mtbtn-animation-wave {
  100%{
    opacity: 0;
    transform: scale(1);
  }
}
</style>
