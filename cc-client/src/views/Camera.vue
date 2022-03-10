<template>
  <div>
    <!-- Camera -->
    <div class="camera">
      <video class="video" playsinline autoplay>
        Video stream not available.
      </video>
      <!-- Camera controls -->
      <div class="controls">
        <!-- Select photo from files -->
        <!-- <v-btn :disabled="!videoReady" class="mx-2" fab dark small> -->
        <v-btn class="mx-2" fab dark small>
          <v-icon dark> mdi-image-multiple </v-icon>
          <input
            class="v-btn--fab v-btn--round v-size--small"
            style="opacity: 0; position: absolute"
            type="file"
            accept="image/*"
            ref="photoInp"
            @change="selectimage"
          />
        </v-btn>
        <!-- Take Picture -->
        <v-btn
          :disabled="!videoReady"
          @click.stop="takepicture"
          class="mx-2"
          fab
          dark
        >
          <v-icon dark> mdi-radiobox-marked </v-icon>
        </v-btn>
        <!-- Turn camera -->
        <v-btn
          :disabled="!videoReady || isTurning"
          class="mx-2"
          fab
          dark
          small
          @click="turnCam"
        >
          <v-icon dark> mdi-camera-switch </v-icon>
        </v-btn>
      </div>
    </div>
    <!-- Popup for color picking -->
    <v-dialog
      v-model="dialog"
      eager
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar class="edit-header">
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <!-- Canvas: Image -->
        <div class="wrapper">
          <canvas class="canvas" @mousedown="pickcolor"></canvas>
        </div>
        <!-- Main: Color -->
        <v-card-text
          v-if="!showPalette"
          class="edit-main edit-color text--primary rounded-t-xl"
        >
          <div class="mb-1 mt-3 font-weight-bold text-center">
            Click on the image to <span class="primary--text">pick</span> a
            color.
            <br />
            Click on the color to copy it.
          </div>
          <!-- Color Edit -->
          <div class="color-edit my-2">
            <v-menu top :offset-y="true" :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon fab small v-bind="attrs" v-on="on">
                  <v-icon dark>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <v-color-picker v-model="color"></v-color-picker>
            </v-menu>
            <ColorPill :color="color" />
          </div>
        </v-card-text>
        <!-- Main: Palette -->
        <v-card-text
          v-else
          class="edit-main edit-palette text--primary rounded-t-xl"
        >
          <div class="mb-1 mt-3 font-weight-bold text-center">
            Generated <span class="primary--text">color scheme </span> to image.
            <br />
            Select individual colors to
            <span class="primary--text">change</span> them.
          </div>
          <!-- Palette -->
          <v-item-group mandatory v-model="pix">
            <v-row no-gutters class="elevation-3 rounded-pill pa-3 my-2">
              <v-col v-for="(col, i) in palette" :key="i">
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    class="color-field inset-shadow mx-2"
                    @click="toggle"
                    :class="{ active: active }"
                    :color="col"
                  >
                  </v-chip>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
          <!-- Color Edit -->
          <div class="color-edit my-2">
            <v-menu top :offset-y="true" :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon fab small v-bind="attrs" v-on="on">
                  <v-icon dark>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <v-color-picker v-model="palette[pix]"></v-color-picker>
            </v-menu>
            <ColorPill :color="palette[pix]" />
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <!-- Actions: toggle palette and save -->
        <v-card-actions class="ps-2 edit-footer">
          <v-btn color="secondary" rounded @click="showPalette = !showPalette">
            <v-icon class="mr-2"
              >mdi-{{ showPalette ? 'arrow-left' : 'palette' }}</v-icon
            >
            {{ showPalette ? 'Back' : 'Palette' }}
          </v-btn>
          <SaveDialog
            :isPalette="showPalette"
            :palette="palette"
            :image="image"
            :color="color"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ColorThief from 'colorthief';
const colorthief = new ColorThief();

import SaveDialog from '../components/SaveDialog.vue';
import ColorPill from '../components/ColorPill.vue';

let video;

export default {
  name: 'Home',
  data() {
    return {
      canvas: undefined,
      dialog: false,
      image: '',
      width: 320,
      height: 0,
      color: '#ffffff',
      pix: 0,
      palette: [],
      showPalette: false,
      videoReady: false,
      facingmode: 'user',
      stream: undefined,
      isTurning: false,
    };
  },
  components: {
    SaveDialog,
    ColorPill,
  },
  methods: {
    getUserMedia(constraints) {
      // if Promise-based API is available, use it
      if (navigator.mediaDevices) {
        return navigator.mediaDevices.getUserMedia(constraints);
      }
      // otherwise try falling back to old, possibly prefixed API...
      var legacyApi =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      if (legacyApi) {
        // ...and promisify it
        return new Promise((resolve, reject) => {
          legacyApi.bind(navigator)(constraints, resolve, reject);
        });
      }
    },
    selectimage() {
      const file = this.$refs.photoInp.files[0];
      this.$refs.photoInp.value = '';
      if (!file) return;
      const img = new Image();
      console.log(img);
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        this.drawImage(img);
      };
    },
    takepicture() {
      this.drawImage(video);
    },
    drawImage(img) {
      if (!this.canvas) {
        this.canvas = document.querySelector('.canvas');
      }
      let isimg = false;
      if (img.width && img.height) {
        this.canvas.width = img.width;
        this.canvas.height = img.height;
        isimg = true;
      } else if (img.videoWidth && img.videoHeight) {
        this.canvas.width = video.videoWidth;
        this.canvas.height = video.videoHeight;
      } else console.log('Error.');
      this.dialog = true;
      const ctx = this.canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.image = this.canvas.toDataURL('image/png');
      // Palette and color
      if (isimg) this.setColorScheme(img);
      else {
        const x = new Image();
        x.src = this.image;
        x.onload = () => this.setColorScheme(x);
      }
    },
    pickcolor(ev) {
      const x = (ev.offsetX * this.canvas.width) / this.canvas.clientWidth;
      const y = (ev.offsetY * this.canvas.height) / this.canvas.clientHeight;
      const ctx = this.canvas.getContext('2d');
      const imgd = ctx.getImageData(x, y, 1, 1);
      const color = this.rgbToHex(...imgd.data);
      // if (this.showPalette) this.palette[this.pix] = color;
      if (this.showPalette) this.$set(this.palette, this.pix, color);
      else this.color = color;
      console.log(this.palette);
    },
    setColorScheme(img) {
      this.color = this.rgbToHex(...colorthief.getColor(img));
      const p = colorthief.getPalette(img, 5);
      this.palette = p.map((el) => this.rgbToHex(...el));
      this.pix = 0;
      console.log(this.palette);
    },
    rgbToHex(r, g, b) {
      return (
        '#' +
        [r, g, b]
          .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
          })
          .join('')
      );
    },
    turnCam() {
      this.isTurning = true;
      this.facingmode = this.facingmode == 'user' ? 'environment' : 'user';
      const tracks = this.stream.getTracks();
      tracks.forEach((track) => track.stop());
      this.setStream(this.facingmode);
    },
    setStream(facingmode) {
      this.getUserMedia({ video: { facingMode: facingmode } })
        .then((stream) => {
          this.stream = stream;
          this.videoReady = true;
          video = document.querySelector('.video');
          if ('srcObject' in video) {
            video.srcObject = stream;
          } else if (navigator.mozGetUserMedia) {
            video.mozSrcObject = stream;
          } else {
            video.src = (window.URL || window.webkitURL).createObjectURL(
              stream
            );
          }
          video.play();
          this.isTurning = false;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  async mounted() {
    if (
      !navigator.mediaDevices &&
      !navigator.getUserMedia &&
      !navigator.webkitGetUserMedia &&
      !navigator.mozGetUserMedia &&
      !navigator.msGetUserMedia
    ) {
      alert('User Media API not supported.');
      return;
    }
    this.setStream(this.facingmode);
  },
};
</script>

<style>
.camera {
  background-color: black;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.canvas {
  max-width: 100%;
  max-height: 100%;
}
.wrapper {
  background-color: black;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit-header {
  height: 5vh !important;
  display: flex;
  align-items: center;
}
.edit-main {
  /* margin-top: -3vh;
  height: 17vh; */
  z-index: 5;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.edit-color {
  margin-top: -3vh;
  height: 17vh;
}
.edit-palette {
  margin-top: -10vh;
  height: 24vh;
}

.edit-main .color-edit {
  width: 100%;
  display: flex;
  justify-content: center;
}

.edit-footer {
  height: 6vh;
  display: flex;
  justify-content: center;
}
.edit-footer button {
  width: 50%;
}

.camera .controls {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 120px;
}
.video {
  height: 100%;
  width: 100%;
}
.photo {
  width: 100%;
}
/* Palette */
.color-field.active {
  border: 3px solid #000 !important;
}
</style>
