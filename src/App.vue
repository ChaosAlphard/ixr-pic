<template>
  <div id="app">
    <VHeader />
    <router-view/>
    <VFooter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VHeader from '@/components/header/VHeader.vue'
import VFooter from '@/components/footer/VFooter.vue'

@Component({
  components: {
    VHeader,
    VFooter
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
html {
  min-width: 720px;
}

</style>

<style>
/**
 * http://meyerweb.com/eric/tools/css/reset/
 * v2.0 | 20110126
 * License: none (public domain)
 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp, ruby,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,dl, dt, dd, ol, ul, li, video,
fieldset, form, label, legend, table, caption,
tbody, tfoot, thead, tr, th, td, article,
aside, canvas, details, embed, figure, audio,
figcaption, footer, header, hgroup, menu, nav,
output, section, summary, time, mark {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
li {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote::before, blockquote::after,
q::before, q::after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
