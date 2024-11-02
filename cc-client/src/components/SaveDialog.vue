<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :disabled="offline"
        v-bind="attrs"
        v-on="on"
        color="primary"
        rounded
      >
        <!-- <v-icon class="mr-2">mdi-content-save </v-icon> -->
        <v-icon class="mr-2"
          >mdi-{{ offline ? 'cancel' : 'content-save' }}
        </v-icon>
        {{ offline ? 'offline save' : 'save' }}
      </v-btn>
    </template>
    <v-card>
      <v-toolbar dark dense>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div>Save {{ isPalette ? 'palette' : 'color' }} to library</div>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            label="Title *"
            required
            :counter="20"
            :rules="titleRules"
            hint="A title for this creation."
            v-model="title"
          ></v-text-field>
          <v-text-field
            label="Creator"
            hint="Name of the creator."
            v-model="creator"
          ></v-text-field>
          <v-textarea
            solo
            label="Comment"
            hint="A small description or comment."
            v-model="comment"
          ></v-textarea>
          <small>* indicates required field</small>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn rounded text @click="dialog = false"> Cancel </v-btn>
        <v-btn rounded color="primary" @click="save" :loading="loading">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    title: '',
    titleRules: [
      (v) => !!v || 'Title is required',
      (v) => (v && v.length <= 20) || 'Title must be less than 20 characters',
    ],
    creator: '',
    comment: '',
    loading: false,
  }),
  props: {
    image: String,
    color: String,
    palette: Array,
    isPalette: Boolean,
    offline: Boolean,
  },
  methods: {
    async save() {
      if (this.$refs.form.validate()) {
        let location = '';
        if ('geolocation' in navigator) {
          const { coords } = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true,
            });
          });
          location = `${coords.latitude},${coords.longitude}`;
        } else console.log('Error, Geolocation');
        let n;
        if (this.isPalette) {
          n = {
            image: this.image,
            title: this.title,
            creator: this.creator,
            comment: this.comment,
            palette: this.palette,
            location,
          };
        } else {
          n = {
            image: this.image,
            title: this.title,
            creator: this.creator,
            comment: this.comment,
            color: this.color,
            location,
          };
        }
        this.$emit('add', n);
      }
    },
  },
  created() {
    // aks for permission...
    navigator.geolocation.getCurrentPosition(function () {});
  },
};
</script>
