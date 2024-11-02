<template>
  <div class="color-pill">
    <v-tooltip
      :open-on-click="true"
      :open-on-hover="false"
      top
      v-model="tooltip"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-chip
          v-bind="attrs"
          v-on="on"
          class="inset-shadow rounded-pill mx-1"
          :class="fontColor"
          :color="color"
          @click="copy"
        >
          {{ colormode }}
        </v-chip>
      </template>
      <span>Copied {{ colormode }} to clipboard.</span>
    </v-tooltip>
    <v-btn icon fab small @click="swapMode">
      <v-icon>mdi-unfold-more-horizontal</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    modes: ['hex', 'rgb', 'hsl'],
    mode: 0,
    tooltip: false,
  }),
  props: {
    color: String,
  },
  computed: {
    colormode() {
      switch (this.modes[this.mode]) {
        case 'hex':
          return this.color;
        case 'rgb':
          return this.hexToRgb(this.color);
        case 'hsl':
          return this.hexToHsl(this.color);
        default:
          return 'error';
      }
    },
    fontColor() {
      let r = '0x' + this.color[1] + this.color[2];
      let g = '0x' + this.color[3] + this.color[4];
      let b = '0x' + this.color[5] + this.color[6];
      const intensity = +r * 0.299 + +g * 0.587 + +b * 0.114;
      if (intensity > 120) return 'black--text';
      else return 'white--text';
    },
  },
  methods: {
    swapMode() {
      this.mode++;
      if (this.mode >= this.modes.length) this.mode = 0;
    },
    async copy() {
      await navigator.clipboard.writeText(this.colormode);
      this.tooltip = true;
      setTimeout(() => (this.tooltip = false), 1500);
    },
    hexToRgb(hex) {
      let r = '0x' + hex[1] + hex[2];
      let g = '0x' + hex[3] + hex[4];
      let b = '0x' + hex[5] + hex[6];
      return `rgb(${+r}, ${+g}, ${+b})`;
    },
    hexToHsl(hex) {
      // Convert hex to RGB first
      let r = '0x' + hex[1] + hex[2];
      let g = '0x' + hex[3] + hex[4];
      let b = '0x' + hex[5] + hex[6];
      // Then to HSL
      r /= 255;
      g /= 255;
      b /= 255;
      let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
      if (delta == 0) h = 0;
      else if (cmax == r) h = ((g - b) / delta) % 6;
      else if (cmax == g) h = (b - r) / delta + 2;
      else h = (r - g) / delta + 4;
      h = Math.round(h * 60);
      if (h < 0) h += 360;
      l = (cmax + cmin) / 2;
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      return `hsl(${h}, ${s.toFixed(2)}, ${l.toFixed(2)})`;
    },
  },
};
</script>
<style>
.color-pill {
  width: 300px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.color-pill .v-chip {
  display: inline-flex;
  width: 90%;
  height: 40px !important;
  align-items: center;
  justify-content: center;
}
</style>
