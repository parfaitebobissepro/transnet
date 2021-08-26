<template>
  <section class="content">
      
    <div class="container-fluid">
        <div class="card p-5">
            <form class="wpcf7 driver-app-form clearfix">
                <fieldset>
                <label><span class="required">*</span> Driver first name:</label>
                <input type="text" id="driver-name" class="wpcf7-text" />
                </fieldset>
                <fieldset>
                <label><span class="required">*</span> Driver last name:</label>
                <input type="text" id="driver-last-name" class="wpcf7-text" />
                </fieldset>
                <fieldset>
                <label><span class="required">*</span> Driver last name:</label>
                <input
                    type="text"
                    id="driver-date-birth"
                    placeholder="mm/dd/yy"
                    class="wpcf7-text"
                />
                </fieldset>
                <fieldset>
                <label><span class="required">*</span> You are:</label>
                <select class="form-control" v-model="civilite_eleve">
                    <option value="Owner">Owner</option>
                    <option value="Company driver">Company driver</option>
                  </select>
                </fieldset>
                <fieldset>
                <label
                    ><span class="required">*</span> Driver's license date
                    issued:</label
                >
                <input id="driver-licence-period" class="wpcf7-text" />
                </fieldset>
                <fieldset>
                <label
                    ><span class="required">*</span> Type of driver's licence:</label
                >
                <input id="driver-licence-type" class="wpcf7-text" />
                </fieldset>
                <fieldset>
                <label><span class="required">*</span> Your phone number:</label>
                <input id="driver-phone" class="wpcf7-text" />
                </fieldset>
                <fieldset>
                <label><span class="required">*</span> Your cell number:</label>
                <input id="driver-cell" class="wpcf7-text" />
                </fieldset>
                <fieldset>
                <label><span class="required">*</span> Years of experience:</label>
                <input
                    id="driver-experience"
                    placeholder="Minimum 3..."
                    class="wpcf7-text"
                />
                </fieldset>
                <input type="submit" value="apply now" class="wpcf7-submit" />
            </form>
        </div>
        <div class="card">            
            <div class="col-md-12 mt-5">
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
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import moment from "moment";
moment.locale("fr");
export default {
  layout: "dashboardLayout",
  computed: {},
  name: "MessagerieEcole",
  data() {
    return {
      searchquery: "",
    };
  },
  head: {
    title: "Messagerie - UniversCitiz",
    links: [
      {
        href: "/dashbord_assets/css/style.css",
        rel: "stylesheets",
      },
    ],
    scripts: [
      {
        src: "/dashbord_assets/js/pages/apps/chat.js",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
</style>