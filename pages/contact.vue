<template>
  <div>
    <BANNERFO></BANNERFO>
    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="custom-heading">
              <h3>QUI SOMMES-NOUS?</h3>
            </div>
            <!-- .custom-heading.left end -->

            <p>
              Nous sommes TRANS-NET Sarl, une entreprise de prestation de
              services(logistique, transport, douane, transit, transport urbain
              VIP, tracking, publicité ) opérant dans plus de trois (03) pays de la
              sous région Afrique centrale en général et en particulier au
              cameroun, offrant une excellente expérience dans ces différents
              domaines et secteurs d'activités.
            </p>

            <br />

            <!-- .contact form start -->
            <form class="wpcf7 clearfix" method="post" @submit.prevent="submit">
              <!-- <fieldset>
                  <label> <span class="required">*</span> Your request: </label>

                  <select
                    class="wpcf7-form-control-wrap wpcf7-select"
                    id="contact-inquiry"
                  >
                    <option value="I need an offer for contract logistics">
                      I need an offer for contract logistics
                    </option>
                    <option value="I need an offer for air freight">
                      I need an offer for air freight
                    </option>
                    <option value="I want to become your partner">
                      I want to become your partner
                    </option>
                    <option value="I have some other request">
                      I have some other request
                    </option>
                  </select>
                </fieldset> -->

              <fieldset>
                <label> <span class="required">*</span> Name: </label>

                <input
                  type="text"
                  class="wpcf7-text"
                  id="contact-name"
                  required
                  v-model="name"
                />
              </fieldset>

              <fieldset>
                <label> <span class="required">*</span> Subject: </label>

                <input
                  type="text"
                  class="wpcf7-text"
                  id="contact-last-name"
                  v-model="subject"
                />
              </fieldset>

              <fieldset>
                <label> <span class="required">*</span> Email: </label>

                <input
                  type="email"
                  class="wpcf7-text"
                  id="contact-email"
                  v-model="email"
                  required
                />
              </fieldset>

              <fieldset>
                <label> <span class="required">*</span> Message: </label>

                <textarea
                  rows="8"
                  class="wpcf7-textarea"
                  id="contact-message"
                  v-model="message"
                ></textarea>
              </fieldset>

              <!-- <input type="submit" class="wpcf7-submit" value="send" /> -->
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
                <span v-if="submitStatus != 'PENDING'">Envoyer</span>
              </button>
            </form>
            <!-- .wpcf7 end -->
          </div>
          <!-- .col-md-6 end -->

          <div class="col-md-6">
            <div class="custom-heading">
              <h3>Localiser Transnet</h3>
            </div>
            <!-- .custom-heading end -->

            <!-- <div id="map"></div> -->
            <GMap
              ref="gMap"
              language="en"
              :cluster="{ options: { styles: clusterStyle } }"
              :center="{ lat: locations[0].lat, lng: locations[0].lng }"
              :options="{ fullscreenControl: false, styles: mapStyle }"
              :zoom="6"
            >
              <GMapMarker
                v-for="location in locations"
                :key="location.id"
                :position="{ lat: location.lat, lng: location.lng }"
                :options="{
                  icon:
                    location === currentLocation
                      ? pins.selected
                      : pins.notSelected,
                }"
                @click="currentLocation = location"
              >
                <GMapInfoWindow :options="{ maxWidth: 200 }">
                  <code>
                    lat: {{ location.lat }}, lng: {{ location.lng }}
                  </code>
                </GMapInfoWindow>
              </GMapMarker>
              <GMapCircle :options="circleOptions" />
            </GMap>

            <div class="custom-heading">
              <h4>INFORMATIONS SUR L'ENTREPRISE</h4>
            </div>
            <!-- .custom-heading end -->

            <address>
              Douala, Bonanjo<br />
            </address>

            <span class="text-big colored"> 690788316 / 672734445 / 696902778 </span>
            <br />

            <a href="mailto:">info@transnet.com</a>
          </div>
          <!-- .col-md-6 end -->
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import BANNERFO from "../components/bannerFo.vue";
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

export default {
  name: "Contact",
  layout: "frontLayout",
  head: {
    title: "Transnet -  Contact",
  },
  components: {
    BANNERFO,
    PulseLoader,
  },
  data() {
    return {
      submitStatus: null,
      sizeLoader: "9px",
      colorLaoder: "#FFF",
      name: "",
      subject: "",
      email: "",
      message: "",
      currentLocation: {},
      circleOptions: {},
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058,
        },
        {
          lat: 45.815,
          lng: "15.9819",
        },
        {
          lat: "45.12",
          lng: "16.21",
        },
      ],
      pins: {
        selected: "data:image/png;base64,iVBORw0KGgo...",
        notSelected: "data:image/png;base64,iVBORw0KGgo...",
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    async submit() {
      this.submitStatus = "PENDING";
      await this.contactApi(this.name, this.subject, this.email, this.message);
      this.submitStatus = "OK";
    },

    async contactApi(name, subject, email, message) {
      var data = new FormData();
      data.append("name", name);
      data.append("subject", subject);
      data.append("email", email);
      data.append("message", message);
      //   data.append("lang", this.$i18n.locale);
      console.log(data);
      for (let [key, value] of data) {
        console.log(`${key}: ${value}`);
      }
      let response = await this.$store.dispatch("frontoffice/contactApi", data);
      console.log(response);
      if (response.type == null) {
        this.$mesFonctions.toaster({
          message: "Une erreur est survenue",
          type: "error",
        });
      } else {
        this.$mesFonctions.toaster({
          message: response.message,
          type: response.type,
        });
      }
    },
  },
};
</script>
<style>
.wpcf7-submit span {
  color: #fff;
}
</style>