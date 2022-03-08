<template>
  <div class="pb-16">
    <v-tabs v-model="tab">
      <v-tab>Colors</v-tab>
      <v-tab>Palettes</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-data-iterator
          :items="savColors"
          :page.sync="page"
          :search="search"
          :sort-by="sortBy.toLowerCase()"
          :sort-desc="sortDesc"
        >
          <template v-slot:header>
            <v-toolbar dark color="" class="my-3">
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
              ></v-text-field>
              <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-spacer></v-spacer>
                <v-select
                  v-model="sortBy"
                  flat
                  solo-inverted
                  hide-details
                  :items="keys"
                  prepend-inner-icon="mdi-magnify"
                  label="Sort by"
                ></v-select>
                <v-spacer></v-spacer>
                <v-btn-toggle v-model="sortDesc" mandatory>
                  <v-btn large depressed :value="false">
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                  <v-btn large depressed :value="true">
                    <v-icon>mdi-arrow-down</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </template>
            </v-toolbar>
          </template>

          <template v-slot:default="props">
            <v-container>
              <v-row>
                <v-col
                  v-for="sc in props.items"
                  :key="sc.id"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card class="mx-auto sc-card" max-width="344">
                    <v-img
                      :src="`${serverAddress}/images/${sc.imgname}`"
                      height="200px"
                    />
                    <v-card-title>
                      {{ sc.title || 'Untitled Work' }}
                    </v-card-title>
                    <v-card-subtitle
                      >by {{ sc.creator || 'Unknown Creator' }}</v-card-subtitle
                    >
                    <v-card-text>
                      <v-chip
                        class="color-pill me-3 inset-shadow"
                        :color="sc.color"
                      >
                        {{ sc.color }}
                      </v-chip>
                    </v-card-text>
                    <v-card-actions icon @click="sc.show = !sc.show">
                      <v-btn rounded color="primary" text>Details</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>{{
                          sc.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                        }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                      <div v-show="sc.show">
                        <v-divider></v-divider>
                        <v-card-text>
                          <blockquote class="font-italic">
                            {{ sc.comment }}
                          </blockquote>
                          <v-chip class="my-5">
                            <v-icon left> mdi-calendar </v-icon>
                            {{ new Date(sc.createdate).toDateString() }}
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
                              currObj = sc;
                            "
                          >
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                          <v-btn
                            icon
                            @click="
                              editDialog = true;
                              currObj = sc;
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
      <v-tab-item>
        <!-- Palette -->
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
          <v-btn color="primary" rounded @click="delSavColor(currObj)">
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
          <v-btn color="primary" @click="editSavColor(currObj)" rounded>
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      pageTitle: 'casdf',
      serverAddress: 'http://localhost:3000',
      tab: null,
      search: '',
      page: 1,
      filter: {},
      sortDesc: false,
      sortBy: 'title',
      keys: ['title', 'createdate', 'creator'],
      savColors: [],
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
    async getSavColors() {
      const { data } = await axios.get(`${this.serverAddress}/colors`);
      this.savColors = data.map((e) => ({ ...e, show: false }));
    },
    async delSavColor(sc) {
      await axios.delete(`${this.serverAddress}/colors/${sc.id}`);
      this.getSavColors();
      this.delDialog = false;
    },
    async editSavColor(sc) {
      if (this.$refs.form.validate()) {
        await axios.patch(`${this.serverAddress}/colors/${sc.id}`, sc);
        this.getSavColors();
        this.editDialog = false;
      }
    },
  },
  created() {
    this.getSavColors();
    this.$watch(
      () => this.$route.params,
      () => {
        this.getSavColors();
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
