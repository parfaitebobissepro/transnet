<template>
  <div>
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
      <!-- Menu -->
      <div class="menu">
        <ul class="list">
          <li>
            <div class="sidebar-profile clearfix">
              <div class="profile-img">
                <img
                  src="/img/unsplash/avatar-01.png"
                  alt="profile"
                />
              </div>
              <div class="profile-info">
                <h3>
                  {{user.name}}
                </h3>
                <p style="display: flex; align-items: center; justify-content: space-between">
                  <span style="position: relative; top: 1px">Bienvenue!</span>
                </p>
                <!-- v-if="user.approved == 'on'"  -->
              </div>
            </div>
          </li>
          <!-- <li class="header">-- {{$t("asidesDashboard.Main")}}</li> -->
          <!-- <li class="header">-- Dashboard</li> -->
          <template>
            <li class="active">
              <!-- <a href="#" onClick="return false;" class="menu-toggle">
                              <i class="menu-icon ti-home"></i>
                              <span>Home</span>
                          </a> -->
              <NuxtLink :to="'/dashboard/client/'">
                <i class="menu-icon ti-home"></i>
                <span>Tableau de bord</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/dashboard/client/messagerie'"
                style="positio: relative">
                <i class="menu-icon ti-comments"></i>
                <span>Messagerie</span>
                <span
                  style="
                    color: white;
                    padding: 0px 9px;
                    background: #4269a4;
                    margin-left: 11rem;
                    justify-content: center;
                    border-radius: 50%;
                    position: absolute;
                    width: 26px;
                    height: 26px;
                    align-items: center;
                    bottom: 2px;
                    display: flex;
                  "
                  >5</span
                >
              </NuxtLink>
            </li>
            <li v-if="user.type == 'client'">
              <NuxtLink :to="'/dashboard/client/devis'">
                <i class="material-icons">assignment</i>
                <span>Devis</span>
              </NuxtLink>
            </li>
            <li v-if="user.type == 'client'">
              <NuxtLink :to="'/dashboard/client/paiement'">
                <i class="menu-icon ti-bookmark-alt"></i>
                <span>Paiements</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/dashboard/client/historique'">
                <i class="material-icons">account_balance</i>
                <span>Historique</span>
              </NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink :to="'/dashboard/client/statisques'">
                <i class="material-icons">school</i>
                <span>Statistiques</span>
              </NuxtLink>
            </li> -->
          </template>
          <!-- <li>
            <NuxtLink :to="'/'">
              <i class="material-icons">redeem</i>
              <span>Candidature</span>
            </NuxtLink>
          </li> -->
          <!-- <li v-if="typePage == 'Ecole'">
            <NuxtLink :to="localePath('/dashboard/candidat/commande')">
              <i class="material-icons">attach_money</i>
              <span>Commandes</span>
            </NuxtLink>
          </li> -->
        </ul>
      </div>
    </aside>
    <!-- #END# Right Sidebar -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AsidesDashboard",
    computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      nbre_new_msg: 0,
    };
  },
};
</script>

<style lang="css" scoped>
.profile-img img {
  object-fit: cover;
}

.sidebar .menu .list li.active > :first-child span {
  font-weight: 300;
}

.sidebar .menu .list li .active > span {
  font-weight: bold !important;
}
</style>
