<template>
  <v-app>
    <v-app-bar
      height="90"
      flat
      app
      color="white"
      v-if="$route.name !== 'Camera'"
    >
      <div class="text-h4 font-weight-bold mt-5 ps-2">{{ $route.name }}</div>
      <v-spacer></v-spacer>
      <div class="logo mt-5 rounded-circle">
        <img src="./assets/logo.svg" alt="Logo" />
      </div>
    </v-app-bar>

    <v-main>
      <v-alert
        v-if="offline"
        type="error"
        dense
        border="right"
        colored-border
        class="offline elevation-4"
        >No network connection...</v-alert
      >
      <router-view
        :savColors="savColors"
        :savPalettes="savPalettes"
        @getsc="getSavColors"
        @getsp="getSavPalettes"
        @delsav="delSaved"
        @editsav="editSaved"
        @addc="addColor"
        @addp="addPalette"
      />
    </v-main>

    <div class="nav-wrapper">
      <v-sheet class="nav ma-3 rounded-pill" elevation="4">
        <v-btn x-large plain fab active-class="nav-active" to="/about" exact>
          <v-icon>mdi-information</v-icon>
        </v-btn>
        <v-btn
          to="/"
          x-large
          color="primary"
          dark
          fab
          exact
          class="main-btn my-3 mx-5"
        >
          <v-icon>mdi-camera</v-icon>
        </v-btn>
        <v-btn x-large plain fab active-class="nav-active" exact to="/library">
          <v-icon>mdi-palette</v-icon>
        </v-btn>
      </v-sheet>
    </div>

    <v-snackbar v-model="swupdate">
      New content is available!. Click OK to refresh...
      <template v-slot:action="{ attrs }">
        <v-btn color="primary" text v-bind="attrs" @click="update"> OK </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data: () => ({
    serverAddress: process.env.VUE_APP_SERVER,
    value: 'recent',
    swupdate: false,
    offline: !navigator.onLine,
    savColors: [],
    savPalettes: [],
  }),
  methods: {
    update() {
      this.swupdate = false;
      window.location.reload();
    },
    // CRUD
    // Create
    async addColor(nc) {
      await axios.post(`${this.serverAddress}/colors`, nc);
      this.$router.push({ path: `/library` });
    },
    async addPalette(np) {
      await axios.post(`${this.serverAddress}/palettes`, np);
      this.$router.push({ path: `/library` });
    },
    // Read
    async getSavColors() {
      const { data } = await axios.get(`${this.serverAddress}/colors`);
      this.savColors = data.map((e) => ({ ...e, show: false }));
    },
    async getSavPalettes() {
      const { data } = await axios.get(`${this.serverAddress}/palettes`);
      this.savPalettes = data.map((e) => ({ ...e, show: false }));
    },
    // Update
    async editSaved(s) {
      if (this.$refs.form.validate()) {
        if (s.color) {
          await axios.patch(`${this.serverAddress}/colors/${s.id}`, s);
          this.getSavColors();
          this.editDialog = false;
        } else {
          await axios.patch(`${this.serverAddress}/palettes/${s.id}`, s);
          this.getSavPalettes();
          this.editDialog = false;
        }
      }
    },
    // Delete
    async delSaved(s) {
      if (s.color) {
        await axios.delete(`${this.serverAddress}/colors/${s.id}`);
        this.getSavColors();
        this.delDialog = false;
      } else {
        await axios.delete(`${this.serverAddress}/palettes/${s.id}`);
        this.getSavPalettes();
        this.delDialog = false;
      }
    },
  },
  created() {
    document.addEventListener('swUpdated', () => (this.swupdate = true), {
      once: true,
    });
    window.addEventListener('online', () => (this.offline = false));
    window.addEventListener('offline', () => (this.offline = true));
  },
};
</script>

<style>
/* Logo */
.logo {
  /* height: 80%; */
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  height: 45%;
}
/* Offline alert */
.offline {
  position: fixed !important;
  top: 2vh;
  right: 1vh;
  z-index: 10;
}
/* Scrollbar */
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
/* Navigationbar */
.nav-wrapper {
  width: 100vw;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
}
.nav {
  min-height: 8vh;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav a {
  background-color: transparent !important;
  box-shadow: none !important;
}
.nav-active {
  color: #333 !important;
}
.nav-active::after {
  background-color: #333 !important;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  bottom: 9px;
  content: '';
}
.nav .main-btn {
  height: 56px !important;
  width: 56px !important;
}
/* Global */
.inset-shadow {
  -webkit-box-shadow: inset 0px 3px 10px 0px rgba(0, 0, 0, 0.16);
  box-shadow: inset 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
}
.color-field {
  height: 40px !important;
  width: 40px !important;
  border-radius: 50% !important;
}
</style>
