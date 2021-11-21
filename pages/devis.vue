<template>
  <div>
    <BANNERFO></BANNERFO>
    <div class="page-content">
      <div class="container">
        <div class="row">
          <aside class="col-md-3 aside aside-left">
            <ul class="aside-widgets">
              <!-- .widget.widget-text start -->
              <li class="widget widget-text">
                <div class="title">
                  <h3>Nous contacter</h3>
                </div>

                <img src="img/pics/locations.jpg" alt="contact us" />

                <br />

                <p>Let us know what can we do for you. Contact us today!</p>

                <NuxtLink to="/contact" class="read-more">
                  <span>
                    Nous contacter
                    <i class="fa fa-chevron-right"></i>
                  </span>
                </NuxtLink>
              </li>
              <!-- .widget-text end -->
            </ul>
            <!-- .aside-widgets end -->
          </aside>
          <!-- .aside.aside-left end -->

          <div class="col-md-9">
            <div class="custom-heading">
              <h2>FAIRE UN DEVIS DE TRANSPORT</h2>
            </div>

            <img class="float-right" src="img/pics/img25.jpg" width="360" alt="" />

            <p>
              I throw myself down among the tall grass by the trickling stream; and, as I
              lie close to the earth, a thousand unknown plants are noticed by me: when I
              hear the buzz of the little world among the stalks, and grow familiar with
              the countless indescribable forms of the insects and flies, then I feel the
              presence of the Almighty, who formed us in his own image, and the breath. On
              the other hand, we denounce with righteous indignation and dislike men who
              are so beguiled and demoralized by the charms of pleasure of the moment, so
              blinded by desire, that they cannot foresee the pain and trouble that are
              bound to ensue; and equal blame belongs to those who fail in their duty.
            </p>

            <br />

            <form class="wpcf7 driver-app-form clearfix" @submit.prevent="submit">
              <fieldset>
                <label><span class="required">*</span> Poids (Kg):</label>

                <input
                  type="number"
                  class="wpcf7-text"
                  id="driver-name"
                  placeholder="0"
                  min="0"
                  max="10"
                  v-model="poids"
                />
              </fieldset>

              <fieldset>
                <label><span class="required">*</span> Fragilité (0-10):</label>

                <input
                  type="number"
                  class="wpcf7-text"
                  id="driver-last-name"
                  placeholder="0"
                  min="0"
                  max="10"
                  v-model="fragilite"
                />
              </fieldset>

     
              <fieldset class="fieldset-target" style="width: 100%">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  width="395.71px"
                  height="395.71px"
                  viewBox="0 0 395.71 395.71"
                  style="enable-background: new 0 0 395.71 395.71"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                    />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
                <span class="target"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  width="395.71px"
                  height="395.71px"
                  viewBox="0 0 395.71 395.71"
                  style="enable-background: new 0 0 395.71 395.71"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                    />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </fieldset>

              <fieldset>
                <label> <span class="required">*</span> Départ: </label>

                <v-autocomplete
                  :items="items"
                  v-model="item"
                  :get-label="getLabel"
                  :component-item="template"
                  :placeholder="'Départ'"
                  @update-items="updateItems"
                  searchText="recherche"
                  :input-class="'wpcf7-text'"
                  :min-len="1"
                ></v-autocomplete>
              </fieldset>

              <fieldset>
                <label> <span class="required">*</span> Destination: </label>

                <v-autocomplete
                  :items="items2"
                  v-model="item2"
                  :get-label="getLabel"
                  :component-item="template"
                  @update-items="updateItems2"
                  searchText="recherche"
                  :input-class="'wpcf7-text'"
                  :min-len="1"
                ></v-autocomplete>
              </fieldset>


              <fieldset>
                <h5 v-if="distance == 0">0 Km</h5>
                <h5 v-if="distance">{{ distance.toFixed(2) }} Km</h5>
              </fieldset>
              <fieldset>
                <div style="display: block; text-align: center">
                  <button
                    class="wpcf7-submit"
                    type="submit"
                    style="color: #fff"
                    :class="submitStatus == 'PENDING' ? 'pending' : ''"
                  >
                    <pulse-loader
                      :color="colorLaoder"
                      :size="sizeLoader"
                      v-if="submitStatus == 'PENDING'"
                    ></pulse-loader>
                    <span v-if="submitStatus != 'PENDING'">Commencer</span>
                  </button>
                </div>
              </fieldset>
              <modal name="devis-modal" width="700" height="350">
                <div class="sous_block1" v-if="submitStatus != 'PENDING'">
                  <div class="ligne">
                    <span>Poids: </span>
                    <span>{{ poids }} Kg</span>
                  </div>
                  <div class="ligne">
                    <span>Fragilité: </span>
                    <span>{{ fragilite }}</span>
                  </div>
                  <div class="ligne parcours-bloc">
                    <span>Départ: </span>
                    <span>{{ getLabel(item) }}</span>
                  </div>
                  <div class="ligne parcours-bloc">
                    <span>Destination: </span>
                    <span>{{ getLabel(item2) }}</span>
                  </div>
                </div>
                <div class="devis-bloc" v-if="submitStatus != 'PENDING'">
                  {{ prix | numberWithSpaces }} FCFA
                </div>
                <div class="sous_block2" v-if="submitStatus != 'PENDING'">
                  <button
                    class="wpcf7-submit"
                    type="submit"
                    style="background-color: green"
                  >
                    <span v-if="submitStatus != 'PENDING'">Payer</span>
                  </button>
                </div>

              </modal>
            </form>
            <div>
                <!-- <registerComponent></registerComponent> -->
            </div>
            <!-- <div class="col-md-12 mt-5">
              <div class="table-responsive">
                <table class="table">
                  <caption class="mt-2">
                    packaging options table
                  </caption>

                  <thead>
                    <tr>
                      <th>package size</th>
                      <th>small</th>
                      <th>medium</th>
                      <th>large</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Package dimensions</td>
                      <td>120 x 150 x 178</td>
                      <td>120 x 150 x 178</td>
                      <td>120 x 150 x 178</td>
                    </tr>

                    <tr>
                      <td>Weight</td>
                      <td>35 kg</td>
                      <td>45kg</td>
                      <td>65kg</td>
                    </tr>

                    <tr>
                      <td>Capacity</td>
                      <td>approx 158 units of textile</td>
                      <td>approx 258 units of textile</td>
                      <td>approx 258 units of textile</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> -->
          </div>
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </div>
    <!-- .page-content end -->
  </div>
</template>

<script>
import Vue from "vue";
import BANNERFO from "../components/bannerFo.vue";
import ItemTemplate from "../components/ItemTemplate.vue";
import registerComponent from "../components/registerComponent.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import VModal from "vue-js-modal";

import Autocomplete from "v-autocomplete";
import "v-autocomplete/dist/v-autocomplete.css";
// import ItemTemplate from './ItemTemplate.vue'
Vue.use(Autocomplete);
Vue.use(VModal);

export default {
  name: "Devis",
  layout: "frontLayout",
  head: {
    title: "Transnet -  Devis",
  },
  data() {
    return {
      submitStatus: null,
      sizeLoader: "9px",
      colorLaoder: "#FFF",
      photomDepartItems: [],
      prix: 0,
      item: {
        geometry: {
          coordinates: [9.706203, 4.0429408],
          type: "Point",
        },
        type: "Feature",
        properties: {
          osm_id: 732125487,
          osm_type: "N",
          country: "Cameroun",
          osm_key: "place",
          city: "Douala II",
          countrycode: "CM",
          osm_value: "city",
          postcode: "3522 DLA",
          name: "Douala",
          county: "Wouri",
          state: "Littoral",
          type: "district",
        },
      },
      item2: {
        geometry: {
          coordinates: [9.706203, 4.0429408],
          type: "Point",
        },
        type: "Feature",
        properties: {
          osm_id: 732125487,
          osm_type: "N",
          country: "Cameroun",
          osm_key: "place",
          city: "Douala II",
          countrycode: "CM",
          osm_value: "city",
          postcode: "3522 DLA",
          name: "Douala",
          county: "Wouri",
          state: "Littoral",
          type: "district",
        },
      },
      items: [],
      items2: [],
      //   distance,
      template: ItemTemplate,
      fragilite: 0,
      poids: 0,
    };
  },
  components: {
    BANNERFO,
    ItemTemplate,
    PulseLoader,
    VModal,
    registerComponent,
  },
  computed: {
    distance: function () {
      console.log(this.item);
      console.log(this.item2);
      if (this.item && this.item2) {
        var radlat1 = (Math.PI * this.item.geometry.coordinates[0]) / 180;
        var radlat2 = (Math.PI * this.item2.geometry.coordinates[0]) / 180;
        var theta =
          this.item.geometry.coordinates[1] - this.item2.geometry.coordinates[1];
        var radtheta = (Math.PI * theta) / 180;
        var dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        // dist = dist * 0.8684
        // if (unit=="K") { dist = dist * 1.609344 }
        // if (unit=="N") { dist = dist * 0.8684 }
        return dist;
      }
      // return 0;
    },
  },
  methods: {
    async submit() {
      this.submitStatus = "PENDING";
      this.prix = await this.devisApi(this.fragilite, this.poids, this.distance);
      this.showDevisModal();
      this.submitStatus = "OK";
    },
    async devisApi(fragilite, poids, distance) {
      var data = new FormData();
      data.append("fragilite", fragilite);
      data.append("poids", poids);
      data.append("distance", distance);
      let response = await this.$store.dispatch("frontoffice/devisApi", data);
      console.log(response);
      if (response.type == null) {
        this.$mesFonctions.toaster({
          message: "Une erreur est survenue",
          type: "error",
        });
      } else {
        if (response.type == "error") {
          this.$mesFonctions.toaster({
            message: response.message,
            type: response.type,
          });
        } else {
          return response.data;
        }
      }
    },
    async searcInPhotom(ville) {
      console.log(ville);
      let response = await this.$store.dispatch("frontoffice/searchCity", ville);
      //   this.photomDepartItems = response;
      console.log(response);
      return response;
    },
    getLabel(item) {
      var holder = "";
      var vide = true;
      if (item != null) {
        if (item.properties.country != undefined) {
          console.log("country");
          holder += item.properties.country;
          vide = false;
        }
        if (item.properties.state != undefined) {
          console.log("state");
          holder += ", " + item.properties.state;
          vide = false;
        }
        if (item.properties.city != undefined) {
          console.log("city");
          holder += ", " + item.properties.city;
          vide = false;
        }
        if (item.properties.name != undefined) {
          console.log("name");
          holder += ", " + item.properties.name;
          vide = false;
        }

        return holder;
      }
    },
    updateItems(text) {
      this.searcInPhotom(text).then((response) => {
        console.log(response);
        this.items = response;
      });
    },
    updateItems2(text) {
      this.searcInPhotom(text).then((response) => {
        console.log(response);
        this.items2 = response;
      });
    },
    toRad($Value) {
      return ($Value * Math.PI) / 180;
    },
    showDevisModal() {
      this.$modal.show("devis-modal");
    },
    hideDevisModal() {
      this.$modal.hide("devis-modal");
    },
  },
  filters: {
    numberWithSpaces: function (x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    },
  },
};
</script>
<style scoped>

.driver-app-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.driver-app-form fieldset {
  width: 48%;
}
.driver-app-form fieldset {
  padding-right: 0;
}

.clearfix:before {
  display: none;
}

.container {
  min-height: 80vh;
}

.wpcf7-text {
  height: 50px !important;
}

.fieldset-target {
  display: flex;
  margin-top: 50px;
}
fieldset svg {
  /* width: 50px; */
  height: 50px;
  width: 50px;
  /* flex: 1; */
}

.target {
  display: inline-block;
  flex: auto;
  height: 5px;
  background-color: #1a73e8;
  align-self: center;
}
fieldset svg:nth-of-type(1) {
  fill: rgb(214, 3, 3);
}
fieldset svg:nth-of-type(2) {
  fill: rgb(68, 68, 68);
}
</style>
<style>
.v-autocomplete-input-group .wpcf7-text {
  height: 50px !important;
}
</style>
<style>
.devis-modal {
  border-radius: 16px;
  box-shadow: 0 0 50px 5px rgb(71 91 126 / 10%);
  color: #29292a;
  padding: 20px;
  position: relative;
  display: grid;
  grid-template-columns: 60px auto;
  grid-column-gap: 5px;
  grid-template-areas:
    "partner cta"
    "features features";
}

.vm--modal {
  padding: 30px 30px;
  background-image: linear-gradient(
    95.2deg,
    rgba(173, 252, 234, 1) 26.8%,
    rgba(192, 229, 246, 1) 64%
  );
  max-width: 100%;
}
.sous_block1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.ligne {
  width: 45%;
  text-align: center;
  color: #000;
}

.ligne span {
  font-size: 15px;
  color: #000;
}

.ligne span:nth-of-type(2) {
  font-size: 15px;
  color: #000;
  font-weight: 700;
}

.parcours-bloc span:nth-child(2) {
  font-size: 15px;
  font-weight: 700;
}

.sous_block2 {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 35px;
}

.devis-bloc {
  font-size: 2.5rem;
  text-align: center;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  color: rgb(27, 31, 27);
  font-weight: 700;
}

@media (max-width: 736px) {
  .vm--modal {
    left: 0 !important;
    height: 400px !important;
  }
}
</style>
