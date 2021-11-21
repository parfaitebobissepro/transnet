<template>
  <div>
    <section class="content">
      <div class="container-fluid">
        <div class="card container-principal">
          <form
            class="ecoleformulairesave"
            enctype="multipart/form-data"
            @submit.prevent="saveAllFields"
            id="profilForm"
          >
            <input type="hidden" class="id_eleve" value="no" />
            <div class="row">
              <div class="col-md-12">
                <h5>{{$t("EcoleProfile.IMAGES")}}</h5>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Logo_de_école")}}</label>
                  <input type="file" class="form-control" name="logo_ecole" />
                  <img
                    :src="$axios.defaults.baseURL + user.logo_ecole"
                    style="width: 10rem;object-fit: cover; display: block; margin-top: 5px;"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Couverture_de_école")}}</label>
                  <input
                    type="file"
                    class="form-control"
                    name="couverture_ecole"
                  />
                  <img
                    :src="$axios.defaults.baseURL + user.couverture_ecole"
                    style="width: 10rem;object-fit: cover; display: block; margin-top: 5px;"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Photo_du_gestionnaire")}}</label>
                  <input type="file" class="form-control" name="photo_ecole" />
                  <img
                    :src="$axios.defaults.baseURL + user.pic"
                    style="width: 10rem;object-fit: cover; display: block; margin-top: 5px;"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <h5>{{$t("EcoleProfile.RENSEIGNEMENTS_DU_GESTIONNAIRE")}}</h5>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Nom_utilisateur")}} *</label>
                  <input
                    type="text"
                    class="form-control"
                    :placeholder='$t("EcoleProfile.Nom_utilisateur")'
                    v-model.trim="$v.username.$model"
                  />
                  <div
                    class="error"
                    :style="
                      usernameErrors != ''
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                    {{$t("EcoleProfile.Le_nom_utilisateur_est_obligatoire")}}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Nom_du_gestionnaire")}} * </label>
                  <input
                    type="text"
                    class="form-control"
                    :placeholder='$t("EcoleProfile.Nom_du_gestionnaire")'
                    v-model.trim="$v.name.$model"
                  />
                  <div
                    class="error"
                    :style="
                      nameErrors != ''
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                    {{$t("EcoleProfile.Le_nom_du_gestionnaire_est_obligatoire")}}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Courriel_du_gestionnaire")}} *</label>
                  <input
                    type="email"
                    class="form-control"
                    :placeholder='$t("EcoleProfile.Courriel_du_gestionnaire")'
                    v-model.trim="$v.email.$model"
                  />
                  <div
                    class="error"
                    :style="
                      emailErrors != '' || $v.email.$error
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                    {{$t("EcoleProfile.Le_courriel_du_gestionnaire_est_vide_ou_incorrect")}}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Téléphone_du_gestionnaire")}} *</label>
                  <VuePhoneNumberInput
                    v-model.trim="$v.phone.$model"
                    @update="newPhone"
                    :show-code-on-list="true"
                    :default-country-code="country_phone"
                  />
                  <div
                    class="error"
                    :style="
                      phoneErrors != ''
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                    {{$t("EcoleProfile.Le_téléphone_du_gestionnaire_est_obligatoire")}}
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <h5>{{$t("EcoleProfile.RENSEIGNEMENTS_DE_ECOLE")}}</h5>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Nom_de_ecole")}} *</label>
                  <input
                    type="text"
                    class="form-control"
                    :placeholder='$t("EcoleProfile.Nom_de_ecole")'
                    v-model="nom_ecole"
                  />
                  <div
                    class="error"
                    :style="
                      nom_ecoleErrors != ''
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                   {{$t("EcoleProfile.Le_nom_de_école_obligatoire")}}
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for=""
                    >{{$t("EcoleProfile.N_d_immatriculation_RCS_SIREN_SIRET")}} *</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    :placeholder='$t("EcoleProfile.N_d_immatriculation_RCS_SIREN_SIRET")'
                    v-model.trim="$v.immatricule.$model"
                  />
                  <div
                    class="error"
                    :style="
                      immatriculeErrors != ''
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                   {{$t("EcoleProfile.Le_numéro_immatriculation_est_obligatoire")}}
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Courriel_du_compte")}} *</label>
                  <input
                    type="text"
                    class="form-control"
                    :placeholder='$t("EcoleProfile.Courriel_du_compte")'
                    v-model.trim="$v.email_ecole.$model"
                  />
                  <div
                    class="error"
                    :style="
                      email_ecoleErrors != '' || $v.email_ecole.$error
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                    {{$t("EcoleProfile.Le_couriel_est_vide_ou_inccorect")}}
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{ $t('EcoleFormationDashboard.slogan_ecole') }} *</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="$v.titre_ecole.$model"
                  />
                  <div
                    class="error"
                    :style="
                      titre_ecoleErrors != ''
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                    {{$t("EcoleProfile.Le_titre_école_est_obligatoire")}}
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Type_école")}} *</label>
                  <select class="form-control" v-model="type_ecole">
                    <option value="Université">{{$t("EcoleProfile.Université")}}</option>
                    <option value="Ecole d’études médicales et pharmaceutiques">
                      {{$t("EcoleProfile.Ecole_études_médicales_et_pharmaceutiques")}}
                    </option>
                    <option value="STS (sections de techniciens supérieurs)">
                      {{$t("EcoleProfile.STS_sections_techniciens_supérieurs")}}
                    </option>
                    <option
                      value="IUT (instituts universitaires de technologie)"
                    >
                      {{$t("EcoleProfile.IUT_instituts_universitaires_de_technologie")}}
                    </option>
                    <option
                      value="CPGE (Classes Préparatoires aux Grandes Écoles)"
                    >
                      {{$t("EcoleProfile.CPGE_Classes_Préparatoires_aux_Grandes_Écoles")}}
                    </option>
                    <option value="IAE">{{$t("EcoleProfile.IAE")}}</option>
                    <option value="IEP (Institut d’Etudes Politiques)">
                      {{$t("EcoleProfile.IEP_Institut_Etudes_Politiques")}}
                    </option>
                    <option value="ENS (Ecole Normale Supérieur)">
                      {{$t("EcoleProfile.ENS_Ecole_Normale_Supérieur")}}
                    </option>
                    <option value="Ecole Nationale Vétérinaire">
                      {{$t("EcoleProfile.Ecole_Nationale_Vétérinaire")}}
                    </option>
                    <option value="Ecole d’Agronomie">{{$t("EcoleProfile.Ecole_Agronomie")}}</option>
                    <option value="Ecole de la Défense">
                      {{$t("EcoleProfile.Ecole_de_la_Défense")}}
                    </option>
                    <option value="Ecole de Commerce">{{$t("EcoleProfile.Ecole_de_Commerce")}}</option>
                    <option value="Ecole d’Ingénieurs">
                      {{$t("EcoleProfile.Ecole_Ingénieurs")}}
                    </option>
                    <option value="Écoles paramédicales">
                      {{$t("EcoleProfile.Écoles_paramédicales")}}
                    </option>
                    <option value="Écoles du social">{{$t("EcoleProfile.Écoles_du_social")}}</option>
                    <option value="Écoles d'art et d'architecture">
                      {{$t("EcoleProfile.Écoles_d_art_et_architecture")}}
                    </option>
                    <option value="Écoles de la police et de l'armée">
                      {{$t("EcoleProfile.Écoles_de_la_police_et_de_armée")}}
                    </option>
                    <option value="Autres">{{$t("EcoleProfile.Autres")}}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Site_web_de_ecole")}}</label>
                  <input
                    type="text"
                    class="form-control"
                    :placeholder='$t("EcoleProfile.Site_web_de_ecole")'
                    v-model="site_ecole"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">Date de création</label>
                  <input
                    type="date"
                    class="form-control date_dont_pass_now"
                    v-model="creation_ecole"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Téléphone_école_1")}}</label>
                  <!-- <input
                    type="text"
                    class="form-control zcode31"
                    data-intl-tel-input-id="0"
                  /> -->
                  <VuePhoneNumberInput v-model="phone1_ecole" @update="newPhone1_ecole" :default-country-code="country_phone1_ecole"
                    :show-code-on-list="true" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Téléphone_école_2")}}</label>
                  <!-- <input
                    type="text"
                    class="form-control zcode32"
                    data-intl-tel-input-id="0"
                  /> -->
                  <VuePhoneNumberInput v-model="phone2_ecole" @update="newPhone2_ecole" :default-country-code="country_phone2_ecole"
                    :show-code-on-list="true" />
                </div>
              </div>
              <div class="col-md-5">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Pays_de_école")}}</label>
                  <!-- <select
                    class="selectpicker countrypicker countrypickerpaysecole"
                    data-default="FR"
                    data-flag="true"
                    v-model="pays_ecole"
                  >
                    <option value="france">france</option>
                  </select> -->

                  <VuCountryIntl
                    v-model="pays_ecole"
                    :placeholder="
                      pays_ecole ? pays_ecole.split('|')[0] : $t('EcoleProfile.choisir_un_pays')
                    "
                    :noDataText="'Pays non trouvé'"
                    id="pays_ecole"
                  ></VuCountryIntl>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Ville_de_école")}}</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="ville_ecole"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.adresse_ecole")}}</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="adresse_ecole"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Vidéo_de_présentation")}}</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="video_ecole"
                  />
                </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="">{{$t("EcoleId.Nombre_étudiants")}} *</label>
                      <select v-model="nbre_etudiant" id="nbre_etudiant_select" class="display:flex">
                          <option value="0 – 100">0 – 100</option>
                          <option value="100 – 500">100 – 500</option>
                          <option value="500 – 1000">500 – 1000</option>
                          <option value="1000 – 5000">1000 – 5000</option>
                          <option value="Plus de 5000">Plus de 5000</option>
                      </select>
                  </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Présentation_de_école")}}</label>

                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Présentation_de_école_en")}}</label>
                </div>
              </div>
              <div class="col-md-12">
                <h5>{{$t("EcoleProfile.Réseau")}}</h5>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for=""
                    >{{$t("EcoleProfile.Facebook")}} &nbsp; <i class="ti-facebook"></i
                  ></label>
                  <input
                    type="text"
                    class="form-control facebooklinkecole"
                    v-model="facebooklinkecole"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for=""
                    >{{$t("EcoleProfile.Instagram")}} &nbsp; <i class="ti-instagram"></i
                  ></label>
                  <input
                    type="text"
                    class="form-control instagramlinkecole"
                    v-model="instagramlinkecole"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for=""
                    >{{$t("EcoleProfile.Twitter")}} &nbsp; <i class="ti-twitter"></i
                  ></label>
                  <input
                    type="text"
                    class="form-control twitterlinkecole"
                    v-model="twitterlinkecole"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for=""
                    >{{$t("EcoleProfile.Youtube")}} &nbsp; <i class="ti-youtube"></i
                  ></label>
                  <input
                    type="text"
                    class="form-control youtubelinkecole"
                    v-model="youtubelinkecole"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for=""
                    >{{$t("EcoleProfile.Linkedin")}} &nbsp; <i class="ti-linkedin"></i
                  ></label>
                  <input
                    type="text"
                    class="form-control linkedinlinkecole"
                    v-model="linkedinlinkecole"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <h5>{{$t("EcoleProfile.Mot_de_passe")}}</h5>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Mot_de_passe")}}</label>
                  <input
                    type="password"
                    class="form-control pwd_ecole"
                    v-model.trim="$v.password.$model"
                    autocomplete="new-password"
                  />
                  <div
                    class="error"
                    :style="
                      passwordErrors != ''
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                    {{$t("EcoleProfile.Le_mot_de_passe_doit_comporter_au_moins_08_caractères_dont")}}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">{{$t("EcoleProfile.Confirmer_Mot_de_passe")}}</label>
                  <input
                    type="password"
                    class="form-control pwd_confirm_ecole"
                    v-model.trim="$v.cpassword.$model"
                    autocomplete="new-password"
                  />
                  <div
                    class="error"
                    :style="
                      cpasswordErrors != ''
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                    {{$t("EcoleProfile.Les_mots_de_passes_sont_différents")}}
                  </div>
                </div>
              </div>


              <div class="col-md-12">
                <h5>{{$t("EcoleProfile.LABELS")}}</h5>
              </div>
              <div class="honneursdiv col-md-12">
                <div class="honneursdivcontent col-md-12">
                  <div
                    class="honneurs-eleve row"
                    style="margin-bottom: 1rem;"
                    v-for="(honPriCert, index) in honPriCerts"
                    :key="honPriCert.id"
                  >
                    <div class="col-md-12 containDelete">
                      <hr />
                      <i
                        class="material-icons pull-left testdeclose"
                        @click="removeHonPriCert(index)"
                        v-if="isLoadingCLipHonneur != index"
                        >cancel</i
                      >
                      <clip-loader
                        :loading="loading"
                        :color="colorLaoder"
                        :size="sizeLoader"
                        v-if="isLoadingCLipHonneur == index"
                      ></clip-loader>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">{{$t("EcoleProfile.Titre")}}</label>
                        <input
                          type="text"
                          class="form-control"
                          :name="'nom_organisation-' + index"
                          :value="honPriCert.nom_organisation.split('|||')[0]"
                          :id="'nom_organisation-' + index"
                        />
                        <!-- {{honPriCert.nom_organisation}} -->
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="">{{$t("CandidatProile.Année_obtention")}}</label>
                        <input
                          type="date"
                          class="form-control date_dont_pass_now"
                          :name="'annee_obtention-' + index"
                          :value="honPriCert.annee_obtention"
                          :id="'annee_obtention-' + index"
                        />
                      </div>
                    </div>
                     <div class="col-md-3">
                      <div class="form-group">
                        <label for="">{{$t("EcoleProfile.Date_expiration")}}</label>
                        <input
                          type="date"
                          class="form-control date_pass_now"
                          :name="'annee_expiration-' + index"
                          :value="honPriCert.annee_expiration"
                          :id="'annee_expiration-' + index"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">{{$t("CandidatProile.Description")}}</label>
                        <textarea
                          class="form-control"
                          :name="'description_organisation-' + index"
                          :id="'description_organisation-' + index"
                          v-html="honPriCert.description_organisation"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">{{$t("EcoleProfile.logo_organisation")}}</label>
                        <input
                          type="file"
                          class="form-control"
                          :name="'logo_organisation-' + index"
                          :id="'logo_organisation-' + index"
                        />
                        <a
                          v-if="honPriCert.nom_organisation.split('|||')[1] != ''"
                          :href="
                            $axios.defaults.baseURL +
                              '/uploads/' +
                              honPriCert.nom_organisation.split('|||')[1]
                          "
                          target="_blank"
                          >{{$t("CandidatProile.Cliquer_pour_voir_la_pièce")}}
                          <i
                            class="material-icons"
                            style="font-size:15px;position: relative;top: 3px;"
                            >remove_red_eye</i
                          ></a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="honneurs-eleve row form-add"
                    style="margin-bottom: 1rem;"
                  >
                    <div class="col-md-12 containDelete">
                      <hr />

                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">{{$t("EcoleProfile.Titre")}}</label>
                        <input
                          type="text"
                          class="form-control"
                          name="nom_organisation"
                          id="nom_organisation"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="">{{$t("CandidatProile.Année_obtention")}}</label>
                        <input
                          type="date"
                          class="form-control date_dont_pass_now"
                          name="annee_obtention"
                          id="annee_obtention"
                        />
                      </div>
                    </div>
                   <div class="col-md-3">
                      <div class="form-group">
                        <label for="">{{$t("EcoleProfile.Date_expiration")}}</label>
                        <input
                          type="date"
                          class="form-control date_pass_now"
                          name="annee_expiration"
                          id="annee_expiration"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">{{$t("CandidatProile.Description")}}</label>
                        <textarea
                          class="form-control"
                          name="description_organisation"
                          id="description_organisation"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">{{$t("EcoleProfile.logo_organisation")}}</label>
                        <input
                          type="file"
                          class="form-control"
                          name="logo_organisation"
                          id="logo_organisation"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <button
                    style="margin-top:0px;max-width: 100%;width: 21%;"
                    class="btn-hover btn-border-radius color-5 add_honneurs submitButton"
                    @click="addAllHonneur"
                  >
                    {{$t("CandidatProile.Enregistrer_et_Ajouter")}} +
                    <clip-loader
                      :loading="loading"
                      :color="colorLaoderButton"
                      :size="sizeLoaderButton"
                      v-if="isLoadingSavingHonneur == 'pending'"
                    ></clip-loader>
                  </button>
                </div>
              </div>
              <div
                class="col-md-12"
                style="display: flex; justify-content: center"
              >
                <button
                  class="btn-hover btn-border-radius color-7 submit_all_ecole"
                  attr-type="save"
                  type="submit"
                >
                  {{$t("EcoleProfile.Sauvegarder")}}
                  <clip-loader
                    :loading="loading"
                    :color="colorLaoder"
                    :size="sizeLoader"
                    v-if="submitStatus == 'PENDING'"
                  ></clip-loader>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import moment from "moment";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Vuelidate from "vuelidate";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

import VuCountryIntl from "vue-country-intl";
import "vue-country-intl/lib/vue-country-intl.css";

Vue.use(VueToast);
Vue.use(Vuelidate);

import {
  required,
  minLength,
  between,
  email,
  sameAs
} from "vuelidate/lib/validators";

export default {
  name: "ProfileEcole",
  layout: "dashboardLayout",
  middleware: "authentication",
  components: { VuePhoneNumberInput, VuCountryIntl, ClipLoader },
  data() {
    return {
      nom_ecole: "",
      immatricule: "",
      email_ecole: "",
      logo_ecole: "",
      titre_ecole: "",
      type_ecole: "",
      site_ecole: "",
      phone1_ecole: "",
      phone2_ecole: "",
      phone: "",
      copy_phone1_ecole: "",
      copy_phone2_ecole: "",
      copy_phone: "",
      country_phone1_ecole: "FR",
      country_phone2_ecole: "FR",
      country_phone: "FR",
      creation_ecole: "",
      presentation_ecole: "",
      pays_ecole: "",
      ville_ecole: "",
      adresse_ecole: "",
      video_ecole: "",
      facebooklinkecole: "",
      instagramlinkecole: "",
      twitterlinkecole: "",
      youtubelinkecole: "",
      linkedinlinkecole: "",
      couverture_ecole: "",
      type: "",
      username: "",
      email: "",
      id_eleve: null,
      password: "",
      cpassword: "",
      photo_ecole: "",
      name: "",
      nbre_etudiant: "",
      phoneDatas: {},

      submitStatus: null,
      sizeLoader: "12px",
      colorLaoder: "#FFF",
      editor: DecoupledDocument,
      editorData: '',
      editorData1: '',
      presentation_ecole_en: '',
      honPriCerts: [],
      isLoadingSavingHonneur: "ok",
      typeSubmit: "sauvergarderSimple",
    };
  },
  validations: {
    username: {
      required
    },
    name: {
      required
    },
    email: {
      required,
      email
    },
    phone: {
      required
    },
    password: {
      goodPassword: password => {
        let regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W|_]){1,})(?!.*\s).{8,50}$/;
        let result = regex.test(password);
        if (password == "") {
          return true;
        } else {
          return result;
        }
      }
    },
    cpassword: {
      sameAsPassword: sameAs("password")
    },
    nom_ecole: {
      required
    },
    immatricule: {
      required
    },
    email_ecole: {
      required,
      email
    },
    titre_ecole: {
      required
    }
  },
  computed: {
    nameErrors() {
      // this.test();
      console.log("je remplis le champs");
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required &&
        errors.push("Le nom d'utilisateur est obligatoiree");
      return errors;
    },

    usernameErrors() {
      // this.test();
      console.log("je remplis le champs");
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required &&
        errors.push("Le nom d'utilisateur est obligatoiree");
      return errors;
    },

    nom_ecoleErrors() {
      // this.test();
      const errors = [];
      if (!this.$v.nom_ecole.$dirty) return errors;
      !this.$v.nom_ecole.required &&
        errors.push("Le nom d'utilisateur est obligatoiree");
      return errors;
    },

    immatriculeErrors() {
      // this.test();
      const errors = [];
      if (!this.$v.immatricule.$dirty) return errors;
      !this.$v.immatricule.required &&
        errors.push("Le nom d'utilisateur est obligatoiree");
      return errors;
    },

    titre_ecoleErrors() {
      // this.test();
      const errors = [];
      if (!this.$v.immatricule.$dirty) return errors;
      !this.$v.immatricule.required &&
        errors.push("Le nom d'utilisateur est obligatoiree");
      return errors;
    },

    immatriculeErrors() {
      // this.test();
      const errors = [];
      if (!this.$v.immatricule.$dirty) return errors;
      !this.$v.immatricule.required &&
        errors.push("Le nom d'utilisateur est obligatoiree");
      return errors;
    },

    phoneErrors() {
      // this.test();
      const errors = [];
      console.log(this.$v.phone);
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required &&
        errors.push("Le nom d'utilisateur est obligatoiree");
      return errors;
    },

    titre_ecoleErrors() {
      // this.test();
      const errors = [];
      if (!this.$v.titre_ecole.$dirty) return errors;
      !this.$v.titre_ecole.required &&
        errors.push("Le nom d'utilisateur est obligatoiree");
      return errors;
    },

    emailErrors() {
      // this.test();
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("L' email est obligatoire");
      return errors;
    },

    email_ecoleErrors() {
      // this.test();
      const errors = [];
      if (!this.$v.email_ecole.$dirty) return errors;
      !this.$v.email_ecole.required &&
        errors.push("Le courriel du compte est obligatoire");
      return errors;
    },

    passwordErrors() {
      // this.test();
      const errors = [];
      console.log(this.$v.password.$error);
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.goodPassword &&
        errors.push(
          "Le mot de passe doit comporter, au moins 08 caractères dont au minimum une majuscule, une minuscule, un chiffre et un caractère spécial"
        );
      return errors;
    },

    cpasswordErrors() {
      // this.test();
      const errors = [];
      if (!this.$v.cpassword.$dirty) return errors;
      !this.$v.cpassword.sameAsPassword &&
        errors.push("Les mots de passes sont différents");
      return errors;
    },

    ...mapState({
      user: state => state.auth.user,
      nom_organisation: state => state.ecole.nom_organisation,
      annee_obtention: state => state.ecole.annee_obtention,
      annee_expiration: state => state.ecole.annee_expiration,
      description_organisation: state => state.ecole.description_organisation,
      logo_organisation: state => state.ecole.logo_organisation,
    }),
    reseau_ecole() {
      return `${this.facebooklinkecole} | ${this.instagramlinkecole} | ${this.twitterlinkecole} | ${this.youtubelinkecole} | ${this.linkedinlinkecole}`;
    }
  },
  watch: {
    user: function() {
      this.getOldDatas();
      this.majFieldsOrganisation();
    }
  },
   beforeMount() {
    this.majFieldsOrganisation();
  },
  created() {
    var self = this;
    setTimeout(function() {
      self.getOldDatas();
      var dtToday = new Date();

      var month = dtToday.getMonth() + 1;
      var day = dtToday.getDate();
      var year = dtToday.getFullYear();
      if(month < 10)
          month = '0' + month.toString();
      if(day < 10)
          day = '0' + day.toString();

      var maxDate = year + '-' + month + '-' + day;

      // or instead:
      // var maxDate = dtToday.toISOString().substr(0, 10);

      console.log(maxDate);
      $('.date_dont_pass_now').attr('max', maxDate);
      $('.date_pass_now').attr('min', maxDate);
    }, 5000);
  },

  methods: {
    onReady(editor) {
      editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
    },
    async sauvegarderProfile(copyblock) {
      console.log(this.$v);
      if (this.$v.$invalid) {
        let instance = Vue.$toast.open({
          message: "Veuillez remplir covenablement tous les champs requis",
          type: "error",
          position: "top"
          // all of other options may go here
        });
      } else {
        let self = this;
        console.log(self.user);

        
       if (copyblock == "sauvergarderGlobal") {
          this.typeSubmit = "sauvergarderGlobal";
          this.submitStatus = "PENDING";
          this.addAllHonneur();
          this.typeSubmit = "";
          // return 0;
        }else{
          this.submitStatus = "PENDING";
        }
        let logoGetEcole = document.getElementsByName("logo_ecole");
        let couvertureGetEcole = document.getElementsByName("couverture_ecole");
        let photoGetEcole = document.getElementsByName("photo_ecole");
        // let videoGetEcole = document.getElementsByName("video_ecole");

        var data = new FormData();
        data.append("nom_ecole", self.nom_ecole);
        data.append("immatricule", self.immatricule);
        data.append("email_ecole", self.email_ecole);
        data.append("lang", self.$i18n.locale);
        data.append(
          "logo_ecole",
          logoGetEcole[0].files[0] == undefined
            ? self.user.logo_ecole
            : logoGetEcole[0].files[0]
        );
        data.append("titre_ecole", self.titre_ecole);
        data.append("type_ecole", self.type_ecole);
        data.append("site_ecole", self.site_ecole);

        data.append("phone1_ecole", self.copy_phone1_ecole);
        data.append("phone2_ecole", self.copy_phone2_ecole);

        data.append("creation_ecole", self.creation_ecole);
        data.append("presentation_ecole", self.editorData);
        data.append("presentation_ecole_en", self.editorData1);
        // data.append("presentation_ecole", self.editorData.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''));
        // data.append("presentation_ecole_en", self.presentation_ecole_en.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''));
        data.append("nbre_etudiant", self.nbre_etudiant);

        // let get_pays_ecole;
        if (
        document.querySelector(
          "#pays_ecole .vue-country-item.selected .vue-country-name"
        ) == null
        ) {
          // get_pays_ecole = self.pays_ecole;
          // console.log("pays etablissement2");
          // console.log(pays_ecole);
        } else {
          let nomPays_eleve = document
            .querySelector(
              "#pays_ecole .vue-country-item.selected .vue-country-name"
            )
            .textContent.split(" ")[0];
          let codePays_eleve = document
            .querySelector("#pays_ecole .vue-country-item.selected")
            .getAttribute("data-iso");
          self.pays_ecole = nomPays_eleve + "|" + codePays_eleve;

        }

        // let nomPays_ecole = document
        //   .querySelector(
        //     "#pays_ecole .vue-country-item.selected .vue-country-name"
        //   )
        //   .textContent.split(" ")[0];
        // let codePays_ecole = document
        //   .querySelector(
        //     "#pays_ecole .vue-country-item.selected"
        //   )
        //   .getAttribute("data-iso");
        // self.pays_ecole = nomPays_ecole + "|" + codePays_ecole;
        data.append("pays_ecole", self.pays_ecole);

        data.append("adresse_ecole", self.adresse_ecole);
        data.append("ville_ecole", self.ville_ecole);
        // data.append("adresse_ecole", self.adresse_ecole);
        // data.append("video_ecole", videoGetEcole[0].files[0] == undefined ? self.user.video_ecole : videoGetEcole[0].files[0]);
        data.append("video_ecole", self.video_ecole);
        data.append("reseau_ecole", self.reseau_ecole);
        data.append(
          "couverture_ecole",
          couvertureGetEcole[0].files[0] == undefined
            ? self.user.couverture_ecole
            : couvertureGetEcole[0].files[0]
        );
        data.append("id_eleve", self.user._id);
        data.append("type", self.user?.type);
        data.append("username", self.username);
        data.append("email", self.email);
        data.append("phone", self.copy_phone);
        data.append("name", self.name);
        data.append("password", self.password);
        data.append(
          "pic",
          photoGetEcole[0].files[0] == undefined
            ? self.user.pic
            : photoGetEcole[0].files[0]
        );


        if (copyblock == "honneur" || copyblock == "sauvergarderGlobal") {
          console.log("bonjour");
          if (this.copyHonPriCerts.length == 0) {
            data.append("nom_organisation[]", "");
            data.append("annee_obtention[]", "");
             data.append("annee_expiration[]", "");
            data.append("description_organisation[]", "");
            data.append("logo_organisation[]", "");
          } else {
            for (let index = 0; index < this.copyHonPriCerts.length; index++) {
              // console.log(this.copyHonPriCerts[index].nom_organisation+'|||logo_organisation[].|||'+this.copyHonPriCerts[index].logo_organisation.name+''+this.copyHonPriCerts[index].logo_organisation.size);
              console.log(this.copyHonPriCerts[index].logo_organisation);
              if (
                this.copyHonPriCerts[index].logo_organisation == undefined
              ) {
                console.log("dans1");
                data.append(
                  "nom_organisation[]",
                  this.copyHonPriCerts[index].nom_organisation + "|||"
                );
              } else if (
                this.copyHonPriCerts[index].logo_organisation.lastModifiedDate
              ) {
                console.log("dans2");
                data.append(
                  "nom_organisation[]",
                  this.copyHonPriCerts[index].nom_organisation +
                    "|||logo_organisation" +
                    this.copyHonPriCerts[index].logo_organisation.size +
                    "." +
                    this.copyHonPriCerts[index].logo_organisation?.type.split(
                      "/"
                    )[1]
                );
              } else {
                console.log("dans3");
                console.log(this.copyHonPriCerts[index].nom_organisation);
                console.log(
                  this.honPriCerts[index].nom_organisation.split("|||")[1]
                );
                data.append(
                  "nom_organisation[]",
                  this.copyHonPriCerts[index].nom_organisation +
                    "|||" +
                    this.honPriCerts[index].nom_organisation.split("|||")[1]
                );
              }
              // data.append("nom_organisation[]",this.copyHonPriCerts[index].nom_organisation);
              data.append(
                "annee_obtention[]",
                this.copyHonPriCerts[index].annee_obtention
              );
              data.append(
                "annee_expiration[]",
                this.copyHonPriCerts[index].annee_expiration
              );
              data.append(
                "description_organisation[]",
                this.copyHonPriCerts[index].description_organisation
              );
              data.append(
                "logo_organisation[]",
                this.copyHonPriCerts[index].logo_organisation
              );
            }
          }
        } else {

          if (this.user.nom_organisation) {
            for (
              let index = 0;
              index < JSON.parse(this.user.nom_organisation).length;
              index++
            ) {
              data.append(
                "nom_organisation[]",
                JSON.parse(this.user.nom_organisation)[index]
              );
            }
            for (
              let index = 0;
              index < JSON.parse(this.user.nom_organisation).length;
              index++
            ) {
              data.append(
                "annee_obtention[]",
                JSON.parse(this.user.annee_obtention)[index]
              );
            }
            for (
              let index = 0;
              index < JSON.parse(this.user.nom_organisation).length;
              index++
            ) {
              data.append(
                "annee_expiration[]",
                JSON.parse(this.user.annee_expiration)[index]
              );
            }
            for (
              let index = 0;
              index < JSON.parse(this.user.nom_organisation).length;
              index++
            ) {
              data.append(
                "description_organisation[]",
                JSON.parse(this.user.description_organisation)[index]
              );
            }
            for (
              let index = 0;
              index < JSON.parse(this.user.nom_organisation).length;
              index++
            ) {
              data.append(
                "logo_organisation[]",
                JSON.parse(this.user.logo_organisation)[index]
              );
            }
          }
          // }
        }
 
        const result = await this.$store.dispatch("ecole/saveProfile", data);
        // console.log(result);
        // let resultSetAuthEcole = {
        //   isLoggedIn: true,
        //   user: result.data
        // };
        console.log("result", result);
        this.$store.dispatch("auth/setAuthEcole", result.data);
        this.$store.dispatch(
          "ecole/setupdateNom_organisation",
          result.data?.nom_organisation
        );
        this.$store.dispatch(
          "ecole/setupdateAnnee_obtention",
         result.data?.annee_obtention
        );
        this.$store.dispatch(
          "ecole/setupdateAnnee_expiration",
         result.data?.annee_expiration
        );
        this.$store.dispatch(
          "ecole/setupdateDescription_organisation",
         result.data?.description_organisation
        );
        this.$store.dispatch(
          "ecole/setupdateLogo_organisation",
         result.data?.logo_organisation
        );
        

        console.log(result);
         if (
          JSON.parse(this.nom_organisation).length != 0 &&
          JSON.parse(this.nom_organisation)[0] != "" &&
          JSON.parse(this.annee_obtention).length != 0 &&
          JSON.parse(this.annee_obtention)[0] != "" &&
          JSON.parse(this.annee_expiration).length != 0 &&
          JSON.parse(this.annee_expiration)[0] != "" &&
          JSON.parse(this.description_organisation).length != 0 &&
          JSON.parse(this.description_organisation)[0] != "" &&
          JSON.parse(this.logo_organisation).length != 0 &&
          JSON.parse(this.logo_organisation)[0] != ""
        ) {
          console.log("appel");
          this.fillNomOrganisation();
        }
        let instance = Vue.$toast.open({
          message: result.message,
          type: result?.type,
          position: "top"
          // all of other options may go here
        });

        this.submitStatus = "OK";
        if (result.type == "success") {
          this.$router.push(this.localePath('/dashboard/ecole'));
        }
      }
    },
    fillNomOrganisation() {
      this.honPriCerts.length = 0;
      console.log(this.honPriCerts);
      console.log("le computed s'exécute");
      console.log(JSON.parse(this.nom_organisation));

      for (
        let index = 0;
        index < JSON.parse(this.nom_organisation).length;
        index++
      ) {
        let honPriCert = {
          nom_organisation: JSON.parse(this.nom_organisation)[index]
        };
        console.log(honPriCert);
        this.honPriCerts.push(honPriCert);
        console.log(this.honPriCerts);
      }
      console.log(this.honPriCerts);
      this.fillAnneeOrganisation();
    },
    fillAnneeOrganisation() {
      for (
        let index = 0;
        index < JSON.parse(this.nom_organisation).length;
        index++
      ) {
        this.honPriCerts[index].annee_obtention = JSON.parse(this.annee_obtention)[
          index
        ];
      }
      console.log(this.honPriCerts);
      this.fillAnneeExpiration();
    },
    fillAnneeExpiration() {
      for (
        let index = 0;
        index < JSON.parse(this.nom_organisation).length;
        index++
      ) {
        this.honPriCerts[index].annee_expiration= JSON.parse(this.annee_expiration)[
          index
        ];
      }
      console.log(this.honPriCerts);
      this.fillDescriptionOrganisation();
    },
    fillDescriptionOrganisation() {
      for (
        let index = 0;
        index < JSON.parse(this.nom_organisation).length;
        index++
      ) {
        this.honPriCerts[index].description_organisation = JSON.parse(
          this.description_organisation
        )[index];
      }
      console.log(this.honPriCerts);
      this.fillLogoOrganisation();
    },
    fillLogoOrganisation() {
      for (
        let index = 0;
        index < JSON.parse(this.nom_organisation).length;
        index++
      ) {
        this.honPriCerts[index].logo_organisation = JSON.parse(
          this.logo_organisation
        )[index];
      }
      console.log(this.honPriCerts);
    },
    majFieldsOrganisation() {
      // console.log(this.user.nom_organisation);
      this.honPriCerts = [];
      if (this.user.nom_organisation) {
        if (
          JSON.parse(this.user.nom_organisation).length == 1 &&
          JSON.parse(this.user.nom_organisation)[0] == "" &&
          JSON.parse(this.user.annee_obtention).length == 1 &&
          JSON.parse(this.user.annee_obtention)[0] == "" &&
          JSON.parse(this.user.annee_expiration).length == 1 &&
          JSON.parse(this.user.annee_expiration)[0] == "" &&
          JSON.parse(this.user.description_organisation).length == 1 &&
          JSON.parse(this.user.description_organisation)[0] == "" &&
          JSON.parse(this.user.logo_organisation).length == 1 &&
          JSON.parse(this.user.logo_organisation)[0] == ""
        ) {
          this.honPriCerts = [];
        } else {
          for (
            let index = 0;
            index < JSON.parse(this.user.nom_organisation).length;
            index++
          ) {
            let honPriCert = {
              nom_organisation: JSON.parse(this.user.nom_organisation)[index],
              annee_obtention: JSON.parse(this.user.annee_obtention)[index],
              annee_expiration: JSON.parse(this.user.annee_expiration)[index],
              description_organisation: JSON.parse(this.user.description_organisation)[
                index
              ],
              logo_organisation: JSON.parse(this.user.logo_organisation)[
                index
              ]
            };
            this.honPriCerts.push(honPriCert);
            console.log(this.honPriCerts);
          }

          console.log("+++++++++++++++++++ici+++++++++++++++++");
          console.log(this.honPriCerts);
        }
      }
    },
    toaster(message, type) {
      let instance = Vue.$toast.open({
        message: message,
        type: type,
        position: "top"
        // all of other options may go here
      });
    },
    addAllHonneur(event) {
      if (event) {
        event.preventDefault();
      }
      let self = this;

      self.copyHonPriCerts = [];
      console.log(this.honPriCerts);
      for (let index = 0; index < this.honPriCerts.length; index++) {
        let nom_organisation = document.getElementById("nom_organisation-" + index);
        let annee_obtention = document.getElementById("annee_obtention-" + index);
        let annee_expiration = document.getElementById("annee_expiration-" + index);
        let description_organisation = document.getElementById(
          "description_organisation-" + index
        );
        let logo_organisation = document.getElementById(
          "logo_organisation-" + index
        );

        let honPriCert = {
          nom_organisation: nom_organisation.value,
          annee_obtention: annee_obtention.value,
          annee_expiration: annee_expiration.value,
          description_organisation: description_organisation.value,
          logo_organisation:
            logo_organisation.files[0] == undefined
              ? JSON.parse(self.user.logo_organisation)[index]
              : logo_organisation.files[0]
        };
        self.copyHonPriCerts.push(honPriCert);
      }

      let nom_organisation = document.getElementById("nom_organisation");
      let annee_obtention = document.getElementById("annee_obtention");
      let annee_expiration = document.getElementById("annee_expiration");
      let description_organisation = document.getElementById("description_organisation");
      let logo_organisation = document.getElementById("logo_organisation");

  

      let allRestTitre = true;

      for (let index = 0; index < this.copyHonPriCerts.length; index++) {
        if (this.copyHonPriCerts[index].nom_organisation == "") {
          console.log(this.copyHonPriCerts[index].nom_organisation);
          allRestTitre = false;
          // return 0;
        }
      }

      if (this.copyHonPriCerts.length == 0) {
        allRestTitre = false;
      }

      console.log(this.copyHonPriCerts);
      console.log(allRestTitre);

      // if(((annee_obtention.value != '' || description_organisation != '') && nom_organisation.value == '') || ((annee_obtention.value != '' || description_organisation != '') && this.allRestTitre == false)){
      if (
        allRestTitre == false &&
        this.copyHonPriCerts.length == 0 &&
        nom_organisation.value == "" &&
        event
      ) {
        console.log("n-1");
        this.toaster(
          this.$i18n.t('CandidatProile.remplir_titre_section')+" "+this.$i18n.t('EcoleProfile.LABELS'),
          "error"
        );
        return 0;
      } else if (allRestTitre == false && this.copyHonPriCerts.length != 0) {
        console.log("n-2");
        this.toaster(
          this.$i18n.t('CandidatProile.remplir_les_titre_section')+" "+this.$i18n.t('EcoleProfile.LABELS'),
          "error"
        );
        return 0;
      } else if (
        allRestTitre == true &&
        nom_organisation.value == "" &&
        (annee_obtention.value != "" || description_organisation.value != "")
      ) {
        console.log("n-3");
        this.toaster(
          this.$i18n.t('CandidatProile.remplir_titre_section')+" "+this.$i18n.t('EcoleProfile.LABELS'),
          "error"
        );
        return 0;
      } else {
        console.log(allRestTitre);
        // console.log(nom_organisation.value);
        // this.toaster("Veuillez remplir le champs titre dans la section HONNEURS, PRIX OU CERTIFICATIONS","error");
        // return 0;
      }
      // }

      if (nom_organisation.value != "") {
        let honPriCert = {
          nom_organisation: nom_organisation.value,
          annee_obtention: annee_obtention.value,
          annee_expiration: annee_expiration.value,
          description_organisation: description_organisation.value,
          logo_organisation: logo_organisation.files[0]
        };

        nom_organisation.value = "";
        annee_obtention.value = "";
        annee_expiration.value = "";
        description_organisation.value = "";
        logo_organisation.value = "";

        self.copyHonPriCerts.push(honPriCert);
      }
      // }

      console.log(this.copyHonPriCerts);
      this.isLoadingSavingHonneur = "pending";
      if (this.typeSubmit == "sauvergarderGlobal") {
      } else {
        this.typeSubmit = "sauvergarderSimple";
        console.log("je suis ici+++++++++++")
        this.sauvegarderProfile("honneur");
      }
      return this.copyHonPriCerts;
    },
    removeHonPriCert(index) {
      this.isLoadingCLipHonneur = index;
      this.copyHonPriCerts = this.honPriCerts.slice();
      this.copyHonPriCerts.splice(index, 1);
      // this.honPriCerts.splice(index, 1);
      this.sauvegarderProfile("honneur");

      // console.log(this.honPriCerts);
      return this.honPriCerts;
    },
   saveAllFields(event) {
      if (event) {
        event.preventDefault();
      }
      this.sauvegarderProfile("sauvergarderGlobal");
    },
    getOldDatas() {
      console.log(this.user);
      // if (result) {
        const script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src = "/dashbord_assets/js/admin.js";
        document.body.appendChild(script2);
      // }
      this.nom_ecole = this.user.nom_ecole;

      this.immatricule = this.user.immatricule;
      this.email_ecole = this.user.email_ecole;
      this.titre_ecole = this.user.titre_ecole;
      this.type_ecole = this.user.type_ecole;
      this.site_ecole = this.user.site_ecole;
      this.phone1_ecole = this.user.phone1_ecole != undefined ? this.user.phone1_ecole.includes('|') ? this.user.phone1_ecole.split("|")[0] : "" : "";
      this.phone2_ecole = this.user.phone2_ecole != undefined ? this.user.phone2_ecole.includes('|') ? this.user.phone2_ecole.split("|")[0] : "" : "";
      this.editorData = this.user.presentation_ecole;
      // this.presentation_ecole_en = this.user.presentation_ecole_en;
      this.editorData1 = this.user.presentation_ecole_en;
      this.pays_ecole = this.user.pays_ecole;
      this.adresse_ecole = this.user.adresse_ecole;
      this.ville_ecole = this.user.ville_ecole;
      // this.adresse_ecole = this.user.adresse_ecole;
      this.type = this.user?.type;
      this.username = this.user.username;
      this.name = this.user.name;
      this.email = this.user.email;
      this.phone = this.user.phone != undefined ? this.user.phone.includes('|') ? this.user.phone.split("|")[0] : "" : "";
      this.country_phone = this.user.phone != undefined ? this.user.phone.includes('|') ? this.user.phone.split("|")[1] : "" : "";
      this.country_phone1_ecole = this.user.phone1_ecole != undefined ? this.user.phone1_ecole.includes('|') ? this.user.phone1_ecole.split("|")[1] : "" : "";
      this.country_phone2_ecole = this.user.phone2_ecole != undefined ? this.user.phone2_ecole.includes('|') ? this.user.phone2_ecole.split("|")[1] : "" : "";
      this.id_eleve = this.user.id_eleve;
      this.video_ecole = this.user.video_ecole;
      this.nbre_etudiant = this.user.nbre_etudiant;
      this.creation_ecole = this.user.creation_ecole;

      // let reseaux = this.user.reseau_ecole.split("|");
      if (this.user.reseau_ecole) {
        this.facebooklinkecole = this.user.reseau_ecole.split(" | ")[0];
        this.instagramlinkecole = this.user.reseau_ecole.split(" | ")[1];
        this.twitterlinkecole = this.user.reseau_ecole.split(" | ")[2];
        this.youtubelinkecole = this.user.reseau_ecole.split(" | ")[3];
        this.linkedinlinkecole = this.user.reseau_ecole.split(" | ")[4];
      }

      console.log("+++++++++");
      console.log(this.nom_ecole);
      console.log(this.user.nom_ecole);
    },

    newPhone(data) {
      if(data.formatInternational){
        this.copy_phone = data.formatInternational + "|" + data.countryCode;
      }
      console.log(this.phone);
    },

    newPhone1_ecole(data) {

      if(data.formatInternational){
        this.copy_phone1_ecole = data.formatInternational + "|" + data.countryCode;
      }
    },

    newPhone2_ecole(data) {
        if(data.formatInternational){
        this.copy_phone2_ecole = data.formatInternational + "|" + data.countryCode;
      }
    },
  }
};
</script>

<style lang="css" scoped>
.education-eleve,
.experience-eleve,
.langue-eleve,
.honneurs-eleve,
.autrepiece-eleve {
  width: 100%;
  padding: 2rem;
  padding-bottom: 0;
}

.btn-hover.color-7 {
  background-image: linear-gradient(
    to right,
    #78ae61,
    #4068a3,
    #78ae61,
    #4068a3
  );
  -webkit-box-shadow: 0 4px 15px 0 rgb(45 54 65 / 75%);
  -moz-box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  -ms-box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  box-shadow: 0 4px 15px 0 rgb(45 54 65 / 75%);
}

i.material-icons.pull-left.testdeclose {
  color: red;
  position: absolute;
  /* top: 1px; */
  right: 2rem;
  cursor: pointer;
}

.select2-container {
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;
  width: 100% !important;
  height: 100%;
}

.select2-container--default .select2-selection--single {
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

select.bs-select-hidden,
select.selectpicker {
  display: block !important;
  opacity: 1 !important;
  width: 100% !important;
  height: 100% !important;
}

.bootstrap-select:not([class*="col-"]):not([class*="form-control"]):not(.input-group-btn) {
  width: 100% !important;
}

.bootstrap-select .dropdown-toggle {
  display: block;
}

.bootstrap-select > select {
  position: absolute !important;
  bottom: 0;
  left: 0%;
}

.bootstrap-select.btn-group .dropdown-toggle .filter-option {
  display: inline-block;
  overflow: hidden;
  width: 74%;
  position: relative;
  text-align: left;
  top: 0px !important;
  left: 0rem;
  margin-left: 0px !important;
}

.iti input,
.iti input[type="text"],
.iti input[type="tel"] {
  position: relative;
  z-index: 0;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding-right: 36px;
  margin-right: 0;
  padding-left: 4rem !important;
  width: 82% !important;
}

.container-principal {
  padding: 25px 25px;
  margin: 100px 0px;
}
</style>
<style lang="css">
#profilForm input[type="tel"]:not(.browser-default) {
  cursor: pointer;
  background-color: #fff;
  height: 44px;
  min-height: 40px;
}

#profilForm .country-selector__input {
  width: 55px;
  color: #000;
  padding-top: 7px;
  position: relative;
  height: 35px;
  min-height: 15px;
  border-bottom: 1px solid rgb(204, 204, 204);
}
</style>

<style lang="css" scoped>
.error {
  font-size: 11px;
  line-height: 16px;
  margin-top: 2px;
  margin-bottom: 5px;
  min-height: 23px;
  color: #fc7b7b;
}

.submit_all_ecole {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
<style lang="css">
.country-intl-input::placeholder {
  font-size: 14px;
  font-weight: 400;
  color: rgb(95, 95, 95);
}
.country-intl-input {
  margin-bottom: 0 !important;
  border-bottom: none !important;
  padding: 0 12px !important;
  font-weight: 400;
  font-size: 14px;
  font: 400 14px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  color: #000;
}

.user-img {
  width: 112px !important;
  height: 112px !important;
}
.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable), .ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners {
    border-radius: var(--ck-border-radius);
    border: 1px solid gray;
    height: 15rem;
}
.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused {
    outline: none;
    border: var(--ck-focus-ring);
    box-shadow: var(--ck-inner-shadow),0 0;
    height: 15rem;
}
.document-editor {
        border: 1px solid var(--ck-color-base-border);
        border-radius: var(--ck-border-radius);

        /* Set vertical boundaries for the document editor. */
        max-height: 700px;

        /* This element is a flex container for easier rendering. */
        display: flex;
        flex-flow: column nowrap;
    }

    .document-editor__toolbar {
        /* Make sure the toolbar container is always above the editable. */
        z-index: 1;

        /* Create the illusion of the toolbar floating over the editable. */
        box-shadow: 0 0 5px hsla( 0,0%,0%,.2 );

        /* Use the CKEditor CSS variables to keep the UI consistent. */
        border-bottom: 1px solid var(--ck-color-toolbar-border);
    }

    /* Adjust the look of the toolbar inside the container. */
    .document-editor__toolbar .ck-toolbar {
        border: 0;
        border-radius: 0;
    }

    /* Make the editable container look like the inside of a native word processor application. */
    .document-editor__editable-container {
        padding: calc( 2 * var(--ck-spacing-large) );
        background: var(--ck-color-base-foreground);

        /* Make it possible to scroll the "page" of the edited content. */
        overflow-y: scroll;
    }

    .document-editor__editable-container .ck-editor__editable {
        /* Set the dimensions of the "page". */
        width: 15.8cm;
        min-height: 21cm;

        /* Keep the "page" off the boundaries of the container. */
        padding: 1cm 2cm 2cm;

        border: 1px hsl( 0,0%,82.7% ) solid;
        border-radius: var(--ck-border-radius);
        background: white;

        /* The "page" should cast a slight shadow (3D illusion). */
        box-shadow: 0 0 5px hsla( 0,0%,0%,.1 );

        /* Center the "page". */
        margin: 0 auto;
    }

    /* Set the default font for the "page" of the content. */
    .document-editor .ck-content,
    .document-editor .ck-heading-dropdown .ck-list .ck-button__label {
        font: 16px/1.6 "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    /* Adjust the headings dropdown to host some larger heading styles. */
    .document-editor .ck-heading-dropdown .ck-list .ck-button__label {
        line-height: calc( 1.7 * var(--ck-line-height-base) * var(--ck-font-size-base) );
        min-width: 6em;
    }

    /* Scale down all heading previews because they are way too big to be presented in the UI.
    Preserve the relative scale, though. */
    .document-editor .ck-heading-dropdown .ck-list .ck-button:not(.ck-heading_paragraph) .ck-button__label {
        transform: scale(0.8);
        transform-origin: left;
    }

    /* Set the styles for "Heading 1". */
    .document-editor .ck-content h2,
    .document-editor .ck-heading-dropdown .ck-heading_heading1 .ck-button__label {
        font-size: 2.18em;
        font-weight: normal;
    }

    .document-editor .ck-content h2 {
        line-height: 1.37em;
        padding-top: .342em;
        margin-bottom: .142em;
    }

    /* Set the styles for "Heading 2". */
    .document-editor .ck-content h3,
    .document-editor .ck-heading-dropdown .ck-heading_heading2 .ck-button__label {
        font-size: 1.75em;
        font-weight: normal;
        color: hsl( 203, 100%, 50% );
    }

    .document-editor .ck-heading-dropdown .ck-heading_heading2.ck-on .ck-button__label {
        color: var(--ck-color-list-button-on-text);
    }

    /* Set the styles for "Heading 2". */
    .document-editor .ck-content h3 {
        line-height: 1.86em;
        padding-top: .171em;
        margin-bottom: .357em;
    }

    /* Set the styles for "Heading 3". */
    .document-editor .ck-content h4,
    .document-editor .ck-heading-dropdown .ck-heading_heading3 .ck-button__label {
        font-size: 1.31em;
        font-weight: bold;
    }

    .document-editor .ck-content h4 {
        line-height: 1.24em;
        padding-top: .286em;
        margin-bottom: .952em;
    }

    /* Set the styles for "Paragraph". */
    .document-editor .ck-content p {
        font-size: 1em;
        line-height: 1.63em;
        padding-top: .5em;
        margin-bottom: 1.13em;
    }

    /* Make the block quoted text serif with some additional spacing. */
    .document-editor .ck-content blockquote {
        font-family: Georgia, serif;
        margin-left: calc( 2 * var(--ck-spacing-large) );
        margin-right: calc( 2 * var(--ck-spacing-large) );
    }

    #nbre_etudiant_select{
      display: flex;
      border: 1px solid #e8e8e8;
    }
</style>
