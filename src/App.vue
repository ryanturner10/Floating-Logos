<template>
  <div id="app">
    <div class="IconsContainer"></div>

  </div>
</template>

<script>
import LogoBubbles from './floating-logos.js';

export default {
  name: 'app',
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      window.logoBubbles = new LogoBubbles({
        // bubbles: bubbles,
        // logos: logos,
        classPrefix: "Icon Icon-img",
        containerSelector: ".IconsContainer",
        containerWidth: 3e3,
        containerHeight: 460,
        maxShrink: .2,
        noiseSpeed: 55e-6,
        noiseScale: 80,
        scrollSpeed: .0175,
        introDelay: 1500,
        introDuration: 1500
      });
    })

  }
}
</script>

<style lang="scss">
html,
body {
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 0px;
  overflow: hidden;
  min-height:100vh;
  display:flex;
  align-items: center;
}

.IconsContainer {
  width: 3000px;
  height: 460px;
  position: relative;
}


.Icon {
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0,0,0,.1),0 3px 10px rgba(0,0,0,.07);

  background-size: 1076px 922px;
  background-image: url(/header-logos.png);

  &:hover {
    z-index: 9999;
    span {
      opacity: .9;
      transform: translate(-50%,0)
    }
  }

}

.Icon,
.Icon span {
  position: absolute;
  will-change: transform,opacity
}

.Icon span {
  left: 50%;
  bottom: -40px;
  padding: 5px 12px;
  background: #fff;
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
  border-radius: 50px;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 500;
  color: #566b78;
  pointer-events: none;
  user-select: none;
  transform: translate(-50%,-10px);
  opacity: 0;
  transition-property: opacity,transform;
  transition-duration: .25s;
  transition-timing-function: ease-out
}

// @media (-webkit-min-device-pixel-ratio: 1.3),(-webkit-min-device-pixel-ratio:1.25),(min-resolution:120dpi) {
//     .Icon {
//         background-image:url(/header-logos@2x.png?52)
//     }
// }

.Icon-imgAffirm {
    background-position: -154px 0;
    width: 152px;
    height: 152px
}

.Icon-imgAllianz {
    background-position: -154px -616px;
    width: 152px;
    height: 152px
}

.Icon-imgAmazon {
    background-position: 0 -154px;
    width: 152px;
    height: 152px
}

.Icon-imgBlueApron {
    background-position: -154px -154px;
    width: 152px;
    height: 152px
}

.Icon-imgCatawiki {
    background-position: -308px 0;
    width: 152px;
    height: 152px
}

.Icon-imgCityofBoston {
    background-position: -308px -154px;
    width: 152px;
    height: 152px
}

.Icon-imgDeliveroo {
    background-position: 0 -308px;
    width: 152px;
    height: 152px
}

.Icon-imgDiDi {
    background-position: -154px -308px;
    width: 152px;
    height: 152px
}

.Icon-imgDoordash {
    background-position: -308px -308px;
    width: 152px;
    height: 152px
}

.Icon-imgExpedia {
    background-position: -462px 0;
    width: 152px;
    height: 152px
}

.Icon-imgFender {
    background-position: -462px -154px;
    width: 152px;
    height: 152px
}

.Icon-imgFitbit {
    background-position: -462px -308px;
    width: 152px;
    height: 152px
}

.Icon-imgGoogle {
    background-position: 0 -462px;
    width: 152px;
    height: 152px
}

.Icon-imgIndiegogo {
    background-position: -154px -462px;
    width: 152px;
    height: 152px
}

.Icon-imgInstacart {
    background-position: -308px -462px;
    width: 152px;
    height: 152px
}

.Icon-imgKickstarter {
    background-position: -462px -462px;
    width: 152px;
    height: 152px
}

.Icon-imgLyft {
    background-position: -616px 0;
    width: 152px;
    height: 152px
}

.Icon-imgNasdaq {
    background-position: -616px -154px;
    width: 152px;
    height: 152px
}

.Icon-imgNat-Geo {
    background-position: -616px -308px;
    width: 152px;
    height: 152px
}

.Icon-imgOpenTable {
    background-position: -616px -462px;
    width: 152px;
    height: 152px
}

.Icon-imgPanic {
    background-position: 0 -616px;
    width: 152px;
    height: 152px
}

.Icon-imgPinterest {
    background-position: 0 0;
    width: 152px;
    height: 152px
}

.Icon-imgPostmates {
    background-position: -308px -616px;
    width: 152px;
    height: 152px
}

.Icon-imgRackspace {
    background-position: -462px -616px;
    width: 152px;
    height: 152px
}

.Icon-imgReddit {
    background-position: -616px -616px;
    width: 152px;
    height: 152px
}

.Icon-imgSalesforce {
    background-position: -770px 0;
    width: 152px;
    height: 152px
}

.Icon-imgShopify {
    background-position: -770px -154px;
    width: 152px;
    height: 152px
}

.Icon-imgSlack {
    background-position: -770px -308px;
    width: 152px;
    height: 152px
}

.Icon-imgSpotify {
    background-position: -770px -462px;
    width: 152px;
    height: 152px
}

.Icon-imgSquarespace {
    background-position: -770px -616px;
    width: 152px;
    height: 152px
}

.Icon-imgTarget {
    background-position: 0 -770px;
    width: 152px;
    height: 152px
}

.Icon-imgTaskRabbit {
    background-position: -154px -770px;
    width: 152px;
    height: 152px
}

.Icon-imgTed {
    background-position: -308px -770px;
    width: 152px;
    height: 152px
}

.Icon-imgTheGuardian {
    background-position: -462px -770px;
    width: 152px;
    height: 152px
}

.Icon-imgTicketSwap {
    background-position: -616px -770px;
    width: 152px;
    height: 152px
}

.Icon-imgTwitch {
    background-position: -770px -770px;
    width: 152px;
    height: 152px
}

.Icon-imgUber {
    background-position: -924px 0;
    width: 152px;
    height: 152px
}

.Icon-imgWeTransfer {
    background-position: -924px -154px;
    width: 152px;
    height: 152px
}

.Icon-imgWish {
    background-position: -924px -308px;
    width: 152px;
    height: 152px
}

.Icon-imgXero {
    background-position: -924px -462px;
    width: 152px;
    height: 152px
}

.Icon-imgYelp {
    background-position: -924px -616px;
    width: 152px;
    height: 152px
}

.Icon-imgZillow {
    background-position: -924px -770px;
    width: 152px;
    height: 152px
}
</style>
