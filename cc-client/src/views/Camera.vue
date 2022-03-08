<template>
  <div>
    <!-- Camera -->
    <div class="camera">
      <video class="video">Video stream not available.</video>
      <div class="controls">
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
        <v-btn @click.stop="takepicture" class="mx-2" fab dark>
          <v-icon dark> mdi-radiobox-marked </v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small>
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
          class="edit-main edit-color text--primary rounded-t-xl text-h6"
        >
          <div>Click to copy</div>
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
          class="edit-main edit-palette text--primary rounded-t-xl text-h6"
        >
          <!-- Palette -->
          <v-item-group mandatory>
            <v-row no-gutters class="elevation-3 rounded-pill pa-3">
              <v-col v-for="(col, i) in palette" :key="i">
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    class="color-field inset-shadow mx-1"
                    @click="
                      toggle();
                      pix = i;
                    "
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
        <!-- Actions -->
        <v-card-actions class="ps-2 edit-footer">
          <v-btn
            color="secondary"
            rounded
            @click="
              getPalette();
              showPalette = !showPalette;
            "
          >
            <v-icon class="mr-2"
              >mdi-{{ showPalette ? 'arrow-left' : 'palette' }}</v-icon
            >
            {{ showPalette ? 'Back' : 'Palette' }}
          </v-btn>
          <SaveDialog :image="image" :color="color" />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import axios from 'axios';
import ColorThief from 'colorthief';
const colorthief = new ColorThief();

import SaveDialog from '../components/SaveDialog.vue';
import ColorPill from '../components/ColorPill.vue';

let video;
export default {
  name: 'Home',
  data() {
    return {
      serverAdress: 'http://localhost:3000',
      canvas: undefined,
      dialog: false,
      image: '',
      width: 320,
      height: 0,
      color: '#ffffff',
      pix: 0,
      palette: [],
      showPalette: false,
    };
  },
  components: {
    SaveDialog,
    ColorPill,
  },
  methods: {
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
        // x.onload = () => {
        //   this.color = this.rgbToHex(...colorthief.getColor(x));
        //   const p = colorthief.getPalette(x);
        //   this.palette = p.map((el) => this.rgbToHex(...el));
        //   console.log(this.palette);
        // };
      }
    },
    pickcolor(ev) {
      const x = (ev.offsetX * this.canvas.width) / this.canvas.clientWidth;
      const y = (ev.offsetY * this.canvas.height) / this.canvas.clientHeight;
      console.log(x, y);
      const ctx = this.canvas.getContext('2d');
      // ctx.fillStyle = 'red';
      // ctx.fillRect(x, y, 10, 10);
      const imgd = ctx.getImageData(x, y, 1, 1);
      const data = imgd.data;
      console.log(data);
      this.color = this.rgbToHex(...data);
      console.log(this.color);
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

    getPalette() {
      // console.log(colorthief.getColor);
      const img = new Image();
      img.src = this.image;
      img.onload = () => {
        colorthief.getColor(img);
      };
      // colorthief.getPalette(this.img, 5).then((p) => console.log(p));
    },
    avgcolor() {},
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
  },
  mounted() {
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

    this.getUserMedia({ video: true })
      .then((stream) => {
        video = document.querySelector('.video');

        if ('srcObject' in video) {
          video.srcObject = stream;
        } else if (navigator.mozGetUserMedia) {
          video.mozSrcObject = stream;
        } else {
          video.src = (window.URL || window.webkitURL).createObjectURL(stream);
        }

        video.play();
      })
      .catch(function (err) {
        alert('Error: ' + err);
      });
  },
};
</script>

<style>
.camera {
  background-color: black;
  height: 90vh;
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
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 120px;
}
.video {
  height: 90%;
  width: 100%;
}
.photo {
  width: 100%;
}
/* Palette */
.color-field {
  height: 40px !important;
  width: 40px !important;
  border-radius: 50% !important;
}
.color-field.active {
  border: 3px solid #000 !important;
}
</style>
