<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <a
          href="#"
          onClick="return false;"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-expanded="false"
        ></a>
        <a href="#" onClick="return false;" class="bars"></a>
        <a
          class="navbar-brand"
          href="/"
          style="    display: flex;
    justify-content: center;
    align-items: center;"
        >
          <img
            class="main-logo"
            src="~/assets/img/logo.png"
            alt="UniversCitiz"
          />
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav navbar-left">
          <li>
            <a href="#" onClick="return false;" class="sidemenu-collapse">
              <i class="nav-hdr-btn ti-align-left"></i>
            </a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <!-- Full Screen Button -->
          <li class="fullscreen">
            <a href="javascript:;" class="fullscreen-btn">
              <i class="nav-hdr-btn ti-fullscreen"></i>
            </a>
          </li>
          <li class="dropdown" id="notifications">
            <a
              href="#"
              onClick="return false;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
            >
              <i class="nav-hdr-btn ti-bell"></i>
              <span class="notify"> </span>
            </a>
            <ul class="dropdown-menu pullDown">
              <li class="header"></li>
              <li class="body" style="width: 100%;max-height: 400px;overflow-y: auto;">
                <ul class="menu" style="max-height: 400px;overflow-y: auto;">
                  <li :class="''" style="width: 100%" @click.prevent="">
                  <a href="#"  >
                      <span class="table-img msg-user">
                        <img  :src="''" alt="" />
                      </span>
                      <span class="menu-info">
                        <span class="menu-title"></span>
                        <span class="menu-desc">
                          <i class="material-icons">access_time</i>
                        </span>
                        <span class="menu-desc"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a
              href="#"
              onClick="return false;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
            >
              <i class="nav-hdr-btn ti-world"></i>
            </a>
            <ul class="dropdown-menu pullDown" style="width: 14rem;">
              <li class="body">
                <!-- overflow: hidden;width: auto;height: 140px !important; -->
                <div
                  class="slimScrollDiv"
                  id="toi2"
                  style="position: relative;"
                >
                  <ul class="menu" id="toi1" style="">
                    <li :class="''">
                      <a href="#" @click.prevent="">
                      
                        <span class="table-img msg-user">
                          <img src="~/assets/img/en.png" alt="" />
                        </span>
                        <span class="menu-info">
                          <span
                            class="menu-title"
                            style="position: relative;top: 1rem;"
                            ></span
                          >
                        </span>
                      </a>
                    </li>
                    <li :class="''">
                      <a href="#" @click.prevent="''">
                        <span class="table-img msg-user">
                          <img src="~/assets/img/fr.png" alt="" />
                        </span>
                        <span class="menu-info">
                          <span
                            class="menu-title"
                            style="position: relative;top: 1rem;"
                            ></span
                          >
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div
                    class="slimScrollBar"
                    style="background: rgba(0, 0, 0, 0.5); width: 4px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 0px; z-index: 99; right: 1px; height: 121.499px;"
                  ></div>
                  <div
                    class="slimScrollRail"
                    style="width: 4px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 0px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"
                  ></div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dropdown user_profile">
            <div class="dropdown-toggle" data-toggle="dropdown">
              <img
                :src="'/img/unsplash/avatar-01.png'"
                alt="user"
              />
            </div>
            <ul class="dropdown-menu pullDown">
              <li class="body">
                <ul class="user_dw_menu">
                  <li>
                    <nuxt-link
                      onClick="return false;"
                      :to="''"
                    >
                      <i class="material-icons">person</i
                      >Mon Profil
                    </nuxt-link>
                  </li>
                  <li>
                    <a href="/" @click.prevent="">
                      <i class="material-icons">power_settings_new</i
                      >Deconnexion
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</template>

<script>

export default {
  name: "NavbarDashboard",
  data() {
    return {
      // typePage: String,
    };
  },
  computed: {
  },
  methods: {
  },  
  created() {
  },
  beforeMount() {},
  mounted() {
  },

};
</script>

<style lang="css" scoped>
.theme-black .navbar {
  background-color: #4068a3;
  background-color: #343d45;
}

.dropdown img {
  width: 35px;
  height: 35px;
  object-fit: cover;
}

.navbar-nav.navbar-right {
  margin-right: 0;
}

.main-logo {
  max-height: 45px;
}

.side-closed.submenu-closed .navbar-header {
  min-height: 60px;
}

/* .side-closed.submenu-closed .navbar-header img{
  visibility: hidden;
} */

@media (min-width: 500px) {
  .navbar-header {
    max-height: 60px;
  }
}

@media (max-width: 500px) {
  .theme-black .nav > li > a {
    position: relative;
    top: 6px;
    right: -7px;
  }
}

.navbar-collapse.collapse{
  width: calc(100% - 205px);
}

.ls-closed .bars:before{
  top: 20px;
}

.navbar-nav .user_profile .dropdown-toggle{
  padding: 10px;
}
</style>
