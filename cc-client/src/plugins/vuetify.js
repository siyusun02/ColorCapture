import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FD836E',
        secondary: '#4C3F44',
        accent: '#F4A698',
        success: '#4BA961',
        info: '#3EACDC',
        warning: '#FDE74C',
      },
    },
  },
});
