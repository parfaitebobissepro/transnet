<template>
  <div>
    <div class="header-wrapper header-transparent">
      <!-- .header.header-style01 start -->
      <header id="header" class="header-style01">
        <!-- .container start -->
        <div class="container">
          <!-- .main-nav start -->
          <div class="main-nav">
            <!-- .row start -->
            <div class="row">
              <div class="col-md-12">
                <nav class="navbar navbar-default nav-left" role="navigation">
                  <!-- .navbar-header start -->
                  <div class="navbar-header">
                    <div class="logo">
                      <a href="index.html">
                        <img
                          src="img/logo.png"
                          alt="Trucking Transportation and Logistics HTML Template"
                        />
                      </a>
                    </div>
                    <!-- .logo end -->
                  </div>
                  <!-- .navbar-header start -->

                  <!-- MAIN NAVIGATION -->
                  <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                      <li class="dropdown">
                        <NuxtLink :to="'/'"> Accueil </NuxtLink>
                      </li>
                      <!-- .dropdown end -->

                      <li class="dropdown">
                        <NuxtLink :to="'/apropos'"> A PROPOS </NuxtLink>
                      </li>
                      <!-- .dropdown end -->

                      <li class="dropdown">
                        <NuxtLink :to="'/services'"> Services </NuxtLink>
                      </li>
                      <!-- .dropdown end -->

                      <li class="dropdown">
                        <NuxtLink :to="'/articles'"> articles</NuxtLink>
                      </li>
                      <!-- .dropdown end -->

                      <li>
                        <NuxtLink :to="'/devis'"> Devis </NuxtLink>
                      </li>

                      <li class="dropdown">
                        <NuxtLink :to="'/Contact'"> Contact </NuxtLink>
                      </li>
                      <!-- .dropdown end -->
                      <!-- <li class="dropdown" id="loginLi">
                        <NuxtLink :to="'/login'"> Connexion </NuxtLink>
                      </li> -->
                      <template v-if="!isLoggedIn">
                        <li @click="toogleMenu">
                          <NuxtLink :to="'/login'"> Connexion </NuxtLink>
                        </li>
                      </template>
                      <template v-if="isLoggedIn">
                        <li @click="toogleMenu">
                          <NuxtLink :to="user.type == 'client' ? '/dashboard/client': '/dashboard/transporteur'"> Dashboard </NuxtLink>
                        </li>
                        <li @click.prevent="logout">
                          <NuxtLink  :to="'/login'">
                            Deconnexion
                          </NuxtLink>
                        </li>
                      </template>
                    </ul>
                    <!-- .nav.navbar-nav end -->

                    <!-- RESPONSIVE MENU -->
                    <div id="dl-menu" class="dl-menuwrapper">
                      <button class="dl-trigger">Open Menu</button>

                      <ul class="dl-menu">
                        <li @click="toogleMenu">
                          <NuxtLink :to="'/'"> Accueil </NuxtLink>
                        </li>
                        <li @click="toogleMenu">
                          <NuxtLink :to="'/apropos'"> A PROPOS </NuxtLink>
                        </li>

                        <li @click="toogleMenu">
                          <NuxtLink :to="'/services'"> Services </NuxtLink>
                        </li>

                        <li @click="toogleMenu">
                          <NuxtLink :to="'/articles'"> articles</NuxtLink>
                        </li>

                        <li @click="toogleMenu">
                          <NuxtLink :to="'/devis'"> Devis </NuxtLink>
                        </li>

                        <!-- <li @click="toogleMenu">
                          <NuxtLink :to="'/Contact'"> Contact </NuxtLink>
                        </li> -->
                        <template v-if="!isLoggedIn">
                          <li @click="toogleMenu">
                            <NuxtLink :to="'/login'"> Connexion </NuxtLink>
                          </li>
                        </template>
                        <template v-if="isLoggedIn">
                          <li @click="toogleMenu">
                            <NuxtLink :to="'/devis'"> Dashboard </NuxtLink>
                          </li>
                          <li @click="toogleMenu">
                            <NuxtLink @click.prevent="logout" :to="'/login'">
                              Deconnexion
                            </NuxtLink>
                          </li>
                        </template>
                      </ul>
                      <!-- .dl-menu end -->
                    </div>
                    <!-- #dl-menu end -->

                    <!-- #search start -->
                    <div id="search">
                      <form action="#" method="get">
                        <input class="search-submit" type="submit" />
                        <input
                          id="m_search"
                          name="s"
                          type="text"
                          placeholder="Type and hit enter..."
                        />
                      </form>
                    </div>
                    <!-- #search end -->
                  </div>
                  <!-- MAIN NAVIGATION END -->
                </nav>
                <!-- .navbar.navbar-default end -->
              </div>
              <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
          </div>
          <!-- .main-nav end -->
        </div>
        <!-- .container end -->
      </header>
      <!-- .header.header-style01 -->
    </div>
    <!-- .header-wrapper end -->
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "HEADERFO",
  mounted() {
    jQuery(function ($) {
      // MAIN NAVIGATION
      $(".nav .dropdown").hover(
        function () {
          $(this)
            .find("ul:first")
            .css({
              visibility: "visible",
              display: "none",
            })
            .fadeIn(300);
        },
        function () {
          $(this).find("ul:first").css({
            display: "none",
          });
        }
      );

      // RESPONSIVE NAVIGATION
      $(function () {
        $("#dl-menu").dlmenu({
          animationClasses: {
            classin: "dl-animate-in-2",
            classout: "dl-animate-out-2",
          },
        });
      });

      // SEARCH ANIMATION
      $("#header").on("click", "#search", function (e) {
        e.preventDefault();

        $(this).find("#m_search").slideDown(200).focus();
      });

      $("#m_search").focusout(function (e) {
        $(e.target).slideUp();
      });

      if (!is_touch_device()) {
        function set_static_header(position) {
          var header_height = $(".header-wrapper.header-transparent").height();
          if (position > header_height) {
            $(".header-wrapper.header-transparent")
              .addClass("solid-color")
              .find(".header-style01 .main-nav")
              .css("margin-top", "10px");
            $(".header-wrapper.header-transparent02")
              .addClass("solid-color")
              .find(".header-style01 .main-nav")
              .css("margin-top", "10px");
          } else {
            $(".header-wrapper.header-transparent")
              .removeClass("solid-color")
              .find(".header-style01 .main-nav")
              .css("margin-top", "35px");
            $(".header-wrapper.header-transparent02")
              .removeClass("solid-color")
              .find(".header-style01 .main-nav")
              .css("margin-top", "35px");
          }

          var header_height = $(".header-style02").height();
          var top_bar_height = $("#top-bar-wrapper").height();
          if (position > header_height) {
            $(".header-wrapper").css("top", -top_bar_height - 20);
          } else {
            $(".header-wrapper").css("top", 0);
          }

          var header_height02 = $(".header-style03").height();
          if (position > header_height02) {
            $(".header-wrapper.style03").css("top", 0);
          } else {
            $(".header-wrapper.style03").css("top", 0);
          }
        }

        (function () {
          var window_y = $(document).scrollTop();
          if (window_y > 0) {
            set_static_header(1);
          }
        })();

        $(window).scroll(function () {
          var position = $(this).scrollTop();
          set_static_header(position);
        });

        var headerWwrapperHeight = $(".header-wrapper").height();
        $(".header-wrapper").next().css("margin-top", headerWwrapperHeight);
      }

      // CONTENT TABS
      (function () {
        $(".tabs").each(function () {
          var $tabLis = $(this).find("li");
          var $tabContent = $(this).next(".tab-content-wrap").find(".tab-content");

          $tabContent.hide();
          $tabLis.first().addClass("active").show();
          $tabContent.first().show();
        });

        $(".tabs").on("click", "li", function (e) {
          var $this = $(this);
          var parentUL = $this.parent();
          var tabContent = parentUL.next(".tab-content-wrap");

          parentUL.children().removeClass("active");
          $this.addClass("active");

          tabContent.find(".tab-content").hide();
          var showById = $($this.find("a").attr("href"));
          tabContent.find(showById).fadeIn();

          e.preventDefault();
        });
      })();

      //ACCORDION
      (function () {
        "use strict";
        $(".accordion").on("click", ".title", function (event) {
          event.preventDefault();
          $(this).siblings(".accordion .active").next().slideUp("normal");
          $(this).siblings(".accordion .title").removeClass("active");

          if ($(this).next().is(":hidden") === true) {
            $(this).next().slideDown("normal");
            $(this).addClass("active");
          }
        });
        $(".accordion .content").hide();
        $(".accordion .active").next().slideDown("normal");
      })();

      // SCROLL TO TOP
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $(".scroll-up").fadeIn();
        } else {
          $(".scroll-up").fadeOut();
        }
      });

      $(".scroll-up").click(function () {
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          600
        );
        return false;
      });

      // NEWSLETTER FORM AJAX SUBMIT
      $(".newsletter .submit").on("click", function (event) {
        event.preventDefault();
        var email = $(this).siblings(".email").val();
        var form_data = new Array({ Email: email });
        $.ajax({
          type: "POST",
          url: "contact.php",
          data: { action: "newsletter", form_data: form_data },
        }).done(function (data) {
          alert(data);
        });
      });

      // function to check is user is on touch device
      if (!is_touch_device()) {
        // ANIMATION FOR CONTENT
        $.stellar({
          horizontalOffset: 0,
          horizontalScrolling: false,
        });

        // ANIMATED CONTENT
        if ($(".animated")[0]) {
          jQuery(".animated").css("opacity", "0");
        }

        var currentRow = -1;
        var counter = 1;

        $(".triggerAnimation").waypoint(
          function () {
            var $this = $(this);
            var rowIndex = $(".row").index($(this).closest(".row"));
            if (rowIndex !== currentRow) {
              currentRow = rowIndex;
              $(".row")
                .eq(rowIndex)
                .find(".triggerAnimation")
                .each(function (i, val) {
                  var element = $(this);
                  setTimeout(function () {
                    var animation = element.attr("data-animate");
                    element.css("opacity", "1");
                    element.addClass("animated " + animation);
                  }, i * 250);
                });
            }

            //counter++;
          },
          {
            offset: "70%",
            triggerOnce: true,
          }
        );
      }
      // function to check is user is on touch device
      function is_touch_device() {
        return Modernizr.touch;
      }

      // Placeholder fix for old browsers
      $("input, textarea").placeholder();

      // services gallery button positioning
      var service_button_width = $(".hover-details").width() / 2;
      $(".hover-details").css("margin-left", -service_button_width);

      /*
       * SVG COLOR CHANGING
       */
      jQuery("img.svg-white").each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");

        jQuery.get(
          imgURL,
          function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find("svg");

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== "undefined") {
              $svg = $svg.attr("id", imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg");
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr("xmlns:a");

            // Replace image with new SVG
            $img.replaceWith($svg);
          },
          "xml"
        );
      });

      /*
       * SVG COLOR CHANGING
       */
      jQuery(".icon-container img").each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");

        jQuery.get(
          imgURL,
          function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find("svg");

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== "undefined") {
              $svg = $svg.attr("id", imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg");
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr("xmlns:a");

            // Replace image with new SVG
            $img.replaceWith($svg);
          },
          "xml"
        );
      });
    });
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.isLoggedIn,
      user: (state) => state.auth.user,
    }),
  },
  methods: {
    toogleMenu() {
      // alert("oui");
      // $('#dl-menu .dl-menu').hide();
      if ($("#dl-menu .dl-menu").hasClass("dl-menuopen")) {
        $("#dl-menu .dl-trigger").removeClass("dl-active");
        $("#dl-menu .dl-menu").removeClass("dl-menuopen");
      }

      $("#dl-menu .dl-trigger").on("click", function () {
        $("#dl-menu .dl-trigger").addClass("dl-active");
        $("#dl-menu .dl-menu").addClass("dl-menuopen");
      });
    },

    async logout() {
      var user = {
        logged: false,
        data: "No",
      };
      this.$store.dispatch("auth/setAuthStatus", user);
      //   await this.$store.dispatch("auth/setMessage", 0);
      // window.location.href = "";
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
@media (min-width: 768px) {
  .navbar-nav {
    float: left;
    margin: 0;
    display: inline-block;
  }

  .navbar {
    flex-direction: row;
    flex-wrap: nowrap;
    padding-bottom: 0;
  }

  .navbar-nav > li > .dropdown-menu {
    position: absolute;
  }

  @media (min-width: 768px) {
    .navbar-collapse.collapse {
      display: block !important;
      height: auto !important;
      padding-bottom: 0;
      overflow: visible !important;
      display: flex !important;
      justify-content: flex-end;
    }
    .navbar-header {
      padding-left: 30px;
    }
  }

  @media (max-width: 991px) {
    .navbar-nav {
      display: none !important;
    }
    .navbar {
      justify-content: center;
    }

    .logo img {
      margin-bottom: 0;
    }
  }
}

.navbar-header {
  padding-left: 0px;
}

.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  display: block;
}

@media (max-width: 768px) {
  .dl-menuwrapper {
    display: block !important;
  }

  .navbar-header {
    width: 100%;
  }

  .scroll-up {
    right: 20px;
  }
}
</style>
<style>
.container-fluid.maxx {
  padding-left: 0px;
  padding-right: 0px;
}

#loginLi a.current-menu-item,
#loginLi a:hover {
  border-color: transparent;
  color: #006db7;
}
</style>
