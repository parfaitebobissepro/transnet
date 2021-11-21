<template>
  <section class="content">
    <div class="container-fluid">
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style">
              <li class="breadcrumb-item">
                <h4 class="page-title">Tableau de bord</h4>
                <!-- {{user}} -->
              </li>
              <!-- <li class="breadcrumb-item bcrumb-1">
                <a href="../../index.html"> <i class="fas fa-home"></i> Home</a>
              </li> -->
              <!-- <li class="breadcrumb-item bcrumb-2">
                <a href="#" onClick="return false;">Extra</a>
              </li> -->
              <!-- <li class="breadcrumb-item active">Profile</li> -->
            </ul>
          </div>
        </div>
      </div>
      <!-- Your content goes here  -->
      <div class="row clearfix">
        <!-- <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div
            class="alert alert-info"
            style="border-radius: 5px"
            v-html="'Message'"
          ></div>
        </div> -->
        <div class="col-lg-4 col-md-12">
          <div class="card">
            <div class="m-b-20">
              <div class="contact-grid">
                <div
                  class="profile-header"
                  :style="'box-shadow: inset 0 0 0 2000px rgb(6 48 66 / 35%);background-size: cover;'"
                >
                  <div class="user-name">{{user.username}}</div>
                  <div class="name-center">{{user.type}}</div>
                </div>
                <img :src="'/img/unsplash/avatar-01.png'" class="user-img" alt="" />
                <div>
                  <!-- <span class="phone">
                    <i class="material-icons">phone</i>{{user.phone}}</span
                  > -->
                  <!-- <span class="phone">
                    <i class="material-icons">phone</i
                    >{{ user.phone }}</span
                  > -->
                </div>
                <div class="row">
                  <div
                    class="col-md-12"
                    style="display: flex !important; justify-content: center"
                  >
                    <!-- <NuxtLink
                      :to="'/'"
                      class="nav-link active show profil-link"
                      style="
                        background-color: rgb(67 106 165) !important;
                        box-shadow: rgb(0 0 0 / 20%) 0px 5px 20px 0px,
                          rgb(64 104 163 / 36%) 0px 13px 24px -11px;
                        color: rgb(255, 255, 255) !important;
                        border-radius: 30px;
                        height: 35px;
                        display: flex !important;
                        justify-content: center;
                        align-items: center;
                      "
                      ><i class="material-icons">account_circle</i> Voir mon
                      profile</NuxtLink
                    > -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style="text-align: center; display: flex; justify-content: center"
          >
            <NuxtLink
              :to="''"
              class="
                btn-hover btn-border-radius
                color-6
                long-button
                pack-button
                link-bloc
              "
            >
              <i class="material-icons">redeem</i>
              Devis
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <!-- <div class="alert alert-info">
              <h2>98%</h2>
              <p>Profile Text</p>
            </div> -->
            <div class="profile-tab-box">
              <div class="p-l-20">
                <ul class="nav">
                  <li class="nav-item tab-all">
                    <NuxtLink
                      :to="'/dashboard/client/profile'"
                      class="nav-link active show profil-link"
                      data-toggle="tab"
                      ><i class="material-icons">account_circle</i> Modifier mon
                      profil</NuxtLink
                    >
                  </li>
                  <li class="nav-item tab-all">
                    <p class="mt-3 ml-4">Cliquer pour modifier son profil</p>
                  </li>
                  <!-- <li class="nav-item tab-all p-l-20">
                                        <a class="nav-link" href="#usersettings" data-toggle="tab">Settings</a>
                                    </li> -->
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-content">
            <div
              role="tabpanel"
              class="tab-pane active"
              id="project"
              aria-expanded="true"
            >
              <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="card project_widget">
                    <div class="header">
                      <h2>Mes informations</h2>
                    </div>
                    <div class="body">
                      <div class="row">
                        <div class="col-md-3 col-6 b-r">
                          <strong>NOM</strong>
                          <br />
                          <p class="text-muted">{{user.name}}</p>
                        </div>
                        <div class="col-md-3 col-6 b-r">
                          <strong>TÉLÉPHONE</strong>
                          <br />
                          <p class="text-muted">{{user.phone}}</p>
                          <!-- <p class="text-muted">{{ user.phone }}</p> -->
                        </div>
                        <div class="col-md-3 col-6 b-r">
                          <strong>Email</strong>
                          <br />
                          <p class="text-muted">{{user.email}}</p>
                        </div>
                        <!-- <div class="col-md-3 col-6">
                          <strong>Date de naissance</strong>
                          <br />
                          <p class="text-muted">{{user.date}}</p>
                        </div> -->
                      </div>
                      <!-- <p class="m-t-30">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel et earum tempore sequi, saepe dolores.
                      </p>
                      <br /> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "dashboardLayout",
  name: "accueilDashboard",
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {};
  },
  head: {
    title: "Dashboard - Transnet",
  },
};
</script>

<style lang="css">
.user-img {
  min-height: 112px;
  object-fit: cover;
}

.pack-button i {
  font-size: 20px;
  margin-right: 5px;
  position: relative;
  top: 1px;
}
.profile-tab-box .profil-link,
.pack-button {
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.profil-link i {
  font-size: 22px;
  margin-right: 5px;
  position: relative;
  top: 1px;
}

.link-bloc:hover {
  color: #fff;
}

.user-img {
  display: inline-block;
  min-width: 112px;
}

.user-img{
  padding: 0 !important;
}
</style>
