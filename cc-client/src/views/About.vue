<template>
  <v-container>
    <blockquote class="mb-4">{{ text }}</blockquote>
    <v-btn class="mt-4 mb-8" @click="text2speech" rounded color="primary">
      <v-icon class="me-3"> mdi-bullhorn</v-icon>
      Read out loud
    </v-btn>
    <v-divider></v-divider>
    <blockquote class="mt-8 mb-4">
      Do you want to know, if new works are created? Turn on the notifications!
    </blockquote>
    <v-btn class="my-4" @click="subscribe" rounded color="primary">
      <v-icon class="me-3"> mdi-bell-ring</v-icon>
      Turn on notifications
    </v-btn>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      synth: window.speechSynthesis,
      text: `Welcome to Color Capture. This app is for designers or anyone, who works a lot with different colors.
      You can take a picture or upload one, and then pick any color out of it. Furthermore, you can generate a
      color scheme. This is a school project 2021/22 by Si Yu Sun.`,
      publicVapidKey:
        'BL8bcoq_VpBjLdB-1o8Ywk03V9jGdxeiB_liGa8DURz9CNU14jkxb7HI2Fre5n0RqyyLhMExAec5Fe92AtD4JIs',
    };
  },
  methods: {
    text2speech() {
      this.synth.cancel();
      navigator.vibrate(200);
      const msg = new SpeechSynthesisUtterance(this.text);
      this.synth.speak(msg);
    },
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
    async subscribe() {
      navigator.vibrate(200);
      if (!('serviceWorker' in navigator)) {
        console.log('no service worker!');
        return;
      }
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(this.publicVapidKey),
      });
      await axios.post('/subscribe', subscription);
      this.$emit(
        'snackbar',
        'Congratulation! You will now get very useful notification'
      );
    },
  },
  created() {
    console.log('Si Yu Sun');
  },
};
</script>
