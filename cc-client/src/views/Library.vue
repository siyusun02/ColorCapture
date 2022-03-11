<template>
  <div class="pb-16">
    <v-tabs style="position: fixed; z-index: 5" v-model="tab">
      <v-tab>Colors</v-tab>
      <v-tab>Palettes</v-tab>
    </v-tabs>
    <v-tabs-items class="py-12" v-model="tab">
      <!-- Colors -->
      <v-tab-item>
        <v-data-iterator
          disable-pagination
          hide-default-footer
          :items="savColors"
          :search="search"
          :sort-by="sortBy.toLowerCase()"
          :sort-desc="sortDesc"
        >
          <!-- Header -->
          <template v-slot:header>
            <v-toolbar dark class="my-3">
              <v-text-field
                dense
                v-model="search"
                clearable
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
                class="rounded-pill me-1"
              >
                <v-btn small slot="append" icon>
                  <v-icon> mdi-microphone </v-icon>
                </v-btn>
              </v-text-field>
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                solo
                dense
                hide-details
                :items="keys"
                prepend-inner-icon="mdi-sort"
                label="Sort by"
                class="me-1"
              >
              </v-select>
              <v-btn small fab text @click="sortDesc = !sortDesc">
                <v-icon>mdi-sort-alphabetical-variant</v-icon>
              </v-btn>
              <!-- <v-btn-toggle v-model="sortDesc" mandatory>
                  <v-btn large depressed :value="false">
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                  <v-btn large depressed :value="true">
                    <v-icon>mdi-arrow-down</v-icon>
                  </v-btn>
                </v-btn-toggle> -->
            </v-toolbar>
          </template>
          <!-- Body -->
          <template v-slot:default="props">
            <v-container>
              <v-row>
                <v-col
                  v-for="sc in props.items"
                  :key="sc.id"
                  cols="12"
                  md="6"
                  lg="4"
                >
                  <v-card class="mx-auto sc-card" max-width="344">
                    <v-img
                      :src="`${serverAddress}/images/${sc.imgname}`"
                      height="200px"
                    />
                    <!-- Title -->
                    <v-card-title>
                      {{ sc.title || 'Untitled Work' }}
                    </v-card-title>
                    <!-- Creator -->
                    <v-card-subtitle>
                      by {{ sc.creator || 'Unknown Creator' }}
                    </v-card-subtitle>
                    <!-- Color -->
                    <v-card-text>
                      <ColorPill :color="sc.color" />
                    </v-card-text>
                    <v-card-actions icon @click="sc.show = !sc.show">
                      <v-btn rounded color="primary" text>Details</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>
                          {{ sc.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                    <!-- Details -->
                    <v-expand-transition>
                      <div v-show="sc.show">
                        <v-divider></v-divider>
                        <v-card-text>
                          <!-- Comment -->
                          <blockquote class="font-italic">
                            {{ sc.comment }}
                          </blockquote>
                          <!-- Date -->
                          <v-chip class="my-5 me-2">
                            <v-icon left> mdi-calendar </v-icon>
                            {{ new Date(sc.createdate).toDateString() }}
                          </v-chip>
                          <!-- Location -->
                          <v-chip @click="openMap(sc.location)">
                            <v-icon left> mdi-map-marker </v-icon>
                            {{ sc.location || '--,--' }}
                          </v-chip>
                        </v-card-text>
                        <v-divider></v-divider>
                        <!-- Actions -->
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <!-- Delete -->
                          <v-btn
                            icon
                            @click="
                              delDialog = true;
                              currObj = { ...sc };
                            "
                          >
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                          <!-- Edit -->
                          <v-btn
                            icon
                            @click="
                              editDialog = true;
                              currObj = { ...sc };
                            "
                          >
                            <!-- <v-icon>mdi-book-edit</v-icon> -->
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </v-data-iterator>
      </v-tab-item>
      <!-- Palette -->
      <v-tab-item>
        <v-data-iterator
          disable-pagination
          hide-default-footer
          :items="savPalettes"
          :search="search"
          :sort-by="sortBy.toLowerCase()"
          :sort-desc="sortDesc"
        >
          <!-- Header -->
          <template v-slot:header>
            <v-toolbar dark class="my-3">
              <v-text-field
                dense
                v-model="search"
                clearable
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
                class="rounded-pill me-1"
              >
                <v-btn small slot="append" icon>
                  <v-icon> mdi-microphone </v-icon>
                </v-btn>
              </v-text-field>
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                solo
                dense
                hide-details
                :items="keys"
                prepend-inner-icon="mdi-sort"
                label="Sort by"
                class="me-1"
              >
              </v-select>
              <v-btn small fab text @click="sortDesc = !sortDesc">
                <v-icon>mdi-sort-alphabetical-variant</v-icon>
              </v-btn>
              <!-- <v-btn-toggle v-model="sortDesc" mandatory>
                  <v-btn large depressed :value="false">
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                  <v-btn large depressed :value="true">
                    <v-icon>mdi-arrow-down</v-icon>
                  </v-btn>
                </v-btn-toggle> -->
            </v-toolbar>
          </template>
          <!-- Body -->
          <template v-slot:default="props">
            <v-container>
              <v-row>
                <v-col
                  v-for="sp in props.items"
                  :key="sp.id"
                  cols="12"
                  md="6"
                  lg="4"
                >
                  <v-card class="mx-auto sc-card" max-width="344">
                    <v-img
                      :src="`${serverAddress}/images/${sp.imgname}`"
                      height="200px"
                    />
                    <v-card-title>
                      {{ sp.title || 'Untitled Work' }}
                    </v-card-title>
                    <v-card-subtitle>
                      by {{ sp.creator || 'Unknown Creator' }}
                    </v-card-subtitle>
                    <v-card-text>
                      <v-row
                        no-gutters
                        class="elevation-3 rounded-pill pa-3 my-2"
                      >
                        <v-col
                          v-for="(col, i) in sp.palette"
                          :key="i"
                          align="center"
                        >
                          <v-chip
                            class="color-field inset-shadow mx-2"
                            :color="col"
                          >
                          </v-chip>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions icon @click="sp.show = !sp.show">
                      <v-btn rounded color="primary" text>Details</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>
                          {{ sp.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                    <!-- Details -->
                    <v-expand-transition>
                      <div v-show="sp.show">
                        <v-divider></v-divider>
                        <v-card-text>
                          <v-list>
                            <v-list-item v-for="col in sp.palette" :key="col">
                              <v-icon class="me-2"
                                >mdi-clipboard-arrow-down</v-icon
                              >
                              <ColorPill :color="col" />
                            </v-list-item>
                          </v-list>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                          <blockquote class="font-italic">
                            {{ sp.comment }}
                          </blockquote>
                          <v-chip class="my-5">
                            <v-icon left> mdi-calendar </v-icon>
                            {{ new Date(sp.createdate).toDateString() }}
                          </v-chip>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <!-- Delete -->
                          <v-btn
                            icon
                            @click="
                              delDialog = true;
                              currObj = { ...sp };
                            "
                          >
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                          <!-- Edit -->
                          <v-btn
                            icon
                            @click="
                              editDialog = true;
                              currObj = { ...sp };
                            "
                          >
                            <!-- <v-icon>mdi-book-edit</v-icon> -->
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </v-data-iterator>
      </v-tab-item>
    </v-tabs-items>
    <!-- Delete Dialog -->
    <v-dialog v-model="delDialog" max-width="290" class="mx-auto">
      <v-card>
        <v-card-title class="text-h5"> Delete Work </v-card-title>
        <v-card-text> Are you sure you want to delete this? </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text rounded @click="delDialog = false"> cancel </v-btn>
          <v-btn color="primary" rounded @click="delSaved(currObj)">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Edit Dialog -->
    <v-dialog v-model="editDialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Work</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-text-field
              label="Title *"
              required
              :counter="20"
              :rules="titleRules"
              hint="A title for this creation."
              v-model="currObj.title"
            ></v-text-field>
            <v-text-field
              label="Creator"
              hint="Name of the creator."
              v-model="currObj.creator"
            ></v-text-field>
            <v-textarea
              solo
              label="Comment"
              hint="A small description or comment."
              v-model="currObj.comment"
            ></v-textarea>
            <small>* indicates required field</small>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="editDialog = false" rounded> Cancel </v-btn>
          <v-btn color="primary" @click="editSaved(currObj)" rounded>
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import ColorPill from '../components/ColorPill.vue';

export default {
  name: 'Home',
  components: {
    ColorPill,
  },
  data() {
    return {
      serverAddress: process.env.VUE_APP_SERVER,
      tab: null,
      search: '',
      filter: {},
      sortDesc: false,
      sortBy: 'title',
      keys: ['title', 'createdate', 'creator'],
      savColors: [],
      savPalettes: [],
      delDialog: false,
      editDialog: false,
      currObj: {},
      titleRules: [
        (v) => !!v || 'Title is required',
        (v) => (v && v.length <= 20) || 'Title must be less than 20 characters',
      ],
    };
  },
  methods: {
    // Get
    async getSavColors() {
      const { data } = await axios.get(`${this.serverAddress}/colors`);
      this.savColors = data.map((e) => ({ ...e, show: false }));
    },
    async getSavPalettes() {
      const { data } = await axios.get(`${this.serverAddress}/palettes`);
      this.savPalettes = data.map((e) => ({ ...e, show: false }));
    },
    // Delete
    async delSaved(sc) {
      if (sc.color) {
        await axios.delete(`${this.serverAddress}/colors/${sc.id}`);
        this.getSavColors();
        this.delDialog = false;
      } else {
        await axios.delete(`${this.serverAddress}/palettes/${sc.id}`);
        this.getSavPalettes();
        this.delDialog = false;
      }
    },
    // Patch
    async editSaved(sc) {
      if (this.$refs.form.validate()) {
        if (sc.color) {
          await axios.patch(`${this.serverAddress}/colors/${sc.id}`, sc);
          this.getSavColors();
          this.editDialog = false;
        } else {
          await axios.patch(`${this.serverAddress}/palettes/${sc.id}`, sc);
          this.getSavPalettes();
          this.editDialog = false;
        }
      }
    },
    // Map
    openMap(location) {
      if (!location) return;
      const coords = location.split(',');
      let platform =
        navigator?.userAgentData?.platform || navigator?.platform || 'unknown';
      if (
        /* if we're on iOS, open in Apple Maps */
        platform == 'iPhone' ||
        platform == 'iPad' ||
        platform == 'iPod'
      )
        window.open(`maps://maps.google.com/maps/?q=${coords[0]},${coords[1]}`);
      /* else use Google */ else
        window.open(
          `https://maps.google.com/maps/?q=${coords[0]},${coords[1]}`
        );
    },
  },
  created() {
    this.getSavColors();
    this.getSavPalettes();
    this.$watch(
      () => this.$route.params,
      () => {
        console.log('asdf');
        this.getSavColors();
        this.getSavPalettes();
      }
    );
  },
};
</script>

<style>
.sc-card .color-pill {
  display: inline-flex;
  width: 100%;
  height: 40px !important;
  align-items: center;
  justify-content: center;
  /* font-weight: bold;
  font-size: 1.25em; */
}
blockquote {
  border-left: 8px solid #eee;
  padding-left: 8px;
}
</style>
