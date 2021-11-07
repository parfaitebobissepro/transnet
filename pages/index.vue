<template>
  <div>
    <div class="slider-header">
      <!-- <agile :nav-buttons="false" :autoplay-speed="7000" :speed="2500" fade="fade" pause-on-hover="pause-on-hover" autoplay="autoplay" v-if="slides != null">
                        <div class="slide" v-for="(slide,index) in slides" :key="index" :style="'background-image: url('+$axios.defaults.baseURL + slide.image+');box-shadow: inset 0 0 0 2000px rgb(6 48 66 / 35%);'">
                        <div style="display: flex;flex-direction: column;">
                            <h1 class="title-slider">{{ $i18n.locale == 'fr' ? slide.titre : slide.titre_en }}</h1>
                            <h3 class="desc-slider">{{ $i18n.locale == 'fr' ? slide.desc : slide.desc_en }}</h3>
                        </div>
                        </div>
                    </agile> -->
      <agile
        :nav-buttons="false"
        :autoplay-speed="7000"
        :speed="2500"
        fade="fade"
        pause-on-hover="pause-on-hover"
        autoplay="autoplay"
        :rtl="false"
        :dots="false"
      >
        <div class="slide">
          <div class="container-text-slide">
            <!-- slide background -->
            <img
              src="/img/unsplash/mak-fVDOn6sXWps-unsplash.jpg"
              alt="International Air freight"
            />

            <h2
              class="ms-layer pi-caption01 title-slider"
              data-type="text"
              data-effect="top(short)"
              data-duration="300"
              data-hide-effect="fade"
              data-delay="0"
            >
              Bienvenue chez Transnet
            </h2>
            <p
              class="ms-layer pi-text"
              style=""
              data-type="text"
              data-effect="top(short)"
              data-duration="300"
              data-hide-effect="fade"
              data-delay="600"
            >
              Transporter sa marchandise en toute sécurité
            </p>
          </div>
        </div>
        <!-- .slide end -->

        <!-- slide 03 start -->
        <div class="slide">
          <!-- slide background -->
          <div class="container-text-slide">
            <img
              src="/img/unsplash/pascal-meier-HfYk04kY0ZQ-unsplash.jpg"
              alt="Worldwide freight services"
            />
            <h2
              class="ms-layer pi-caption01 title-slider"
              data-type="text"
              data-effect="top(short)"
              data-duration="300"
              data-hide-effect="fade"
              data-delay="0"
            >
              Transporter sa marchandise en toute sécurité
            </h2>
            <p
              class="ms-layer pi-text"
              style=""
              data-type="text"
              data-effect="top(short)"
              data-duration="300"
              data-hide-effect="fade"
              data-delay="600"
            >
              Fast International Air Delivery
            </p>
          </div>
        </div>
        <!-- slide 04 start -->
        <div class="slide">
          <div class="container-text-slide">
            <img
              src="/img/unsplash/bernd-dittrich-eCc7FjMoR74-unsplash.jpg"
              alt="Worldwide freight services"
            />
            <h2
              class="ms-layer pi-caption01 title-slider"
              data-type="text"
              data-effect="top(short)"
              data-duration="300"
              data-hide-effect="fade"
              data-delay="0"
            >
              International Air Freight
            </h2>
            <p
              class="ms-layer pi-text"
              style=""
              data-type="text"
              data-effect="top(short)"
              data-duration="300"
              data-hide-effect="fade"
              data-delay="600"
            >
              
            </p>
          </div>
        </div>
        <!-- .slide slide04 end --> </agile
      ><!-- #masterslider end -->
    </div>

    <div class="page-content parallax parallax01 mb-70" v-if="articles">
      <div class="container">
        <div class="row services-negative-top">
          <div
            class="col-md-4 col-sm-4"
            v-for="article in articles.slice(0, 3)"
            :key="article._id"
          >
            <div class="service-feature-box">
              <div class="service-media">
                <img src="img/pics/img01.jpg" alt="Trucking" />

                <NuxtLink :to="'/articles/' + article.slug" class="read-more02">
                  <span>
                    Lire plus
                    <i class="fa fa-chevron-right"></i>
                  </span>
                </NuxtLink>
              </div>
              <!-- .service-media end -->

              <div class="service-body">
                <div class="custom-heading">
                  <h4>{{ article.title }}</h4>
                </div>
                <!-- .custom-heading end -->
                <div
                  v-html="$options.filters.strippedContent(article.content)"
                ></div>
                <!-- <p>
                                        We have a wide experience in overland 
                                        industry specific logistic solutions like 
                                        pharmaceutical logistics, retail and 
                                        automotive logistics by train or road.
                                    </p> -->
              </div>
              <!-- .service-body end -->
            </div>
            <!-- .service-feature-box-end -->
          </div>
          <!-- .col-md-4 end -->
        </div>
        <!-- .row end -->

        <div class="row">
          <div class="col-md-12">
            <NuxtLink
              to="/articles"
              class="btn btn-big btn-yellow btn-centered"
            >
              <span> Voir plus </span>
            </NuxtLink>
          </div>
          <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </div>
    <!-- .page-content end -->

    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="custom-heading02">
              <h2>Nos Services</h2>
              <p>TAILORED LOGISTIC SERVICES</p>
            </div>
            <!-- .custom-heading02 end -->
          </div>
          <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->

        <div class="row mb-30">
          <div class="col-md-6 col-sm-6">
            <div class="service-icon-left-boxed">
              <div
                class="icon-container animated triggerAnimation"
                data-animate="zoomIn"
              >
                <img src="img/svg/pi-checklist-2.svg" alt="checklist icon" />
              </div>
              <!-- .icon-container end -->

              <div class="service-details">
                <h3>Logistics</h3>

                <p>
                  Need custom logistic service? We got it covered. From
                  overland, air, rail and sea transportation. Fast, safe and
                  accurate shipment provided all over the globe.
                </p>
              </div>
              <!-- .service-details end -->
            </div>
            <!-- .service-icon-left-boxed end -->
          </div>
          <!-- .col-md-6 end -->

          <div class="col-md-6 col-sm-6">
            <div class="service-icon-left-boxed">
              <div
                class="icon-container animated triggerAnimation"
                data-animate="zoomIn"
              >
                <img src="img/svg/pi-globe-5.svg" alt="globe icon" />
              </div>
              <!-- .icon-container end -->

              <div class="service-details">
                <h3>Transport</h3>

                <p>
                  Trucking company offers the best logistics services using all
                  mens of supply chain. Use our overland, ocean and air freight
                  solutions for shipment of your goods.
                </p>
              </div>
              <!-- .service-details end -->
            </div>
            <!-- .service-icon-left-boxed end -->
          </div>
          <!-- .col-md-6 end -->
        </div>
        <!-- .row.mb-30 end -->

        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="service-icon-left-boxed">
              <div
                class="icon-container animated triggerAnimation"
                data-animate="zoomIn"
              >
                <img
                  src="img/svg/pi-forklift-truck-5.svg"
                  alt="forktruck icon"
                />
              </div>
              <!-- .icon-container end -->

              <div class="service-details">
                <h3>Douane</h3>

                <p>
                  Trucking offers intelligent warehouse solution. Lower your
                  storage and good maintenance by using our modern and
                  intelligent warehouses. You can see all locations on location
                  page.
                </p>
              </div>
              <!-- .service-details end -->
            </div>
            <!-- .service-icon-left-boxed end -->
          </div>
          <!-- .col-md-6 end -->

          <div class="col-md-6 col-sm-6">
            <div class="service-icon-left-boxed">
              <div
                class="icon-container animated triggerAnimation"
                data-animate="zoomIn"
              >
                <img src="img/svg/pi-touch-desktop.svg" alt="touch icon" />
              </div>
              <!-- .icon-container end -->

              <div class="service-details">
                <h3>Consultation logistique</h3>

                <p>
                  Don't know what mean of transportation would be right for you,
                  or you need someone for full supply chain management? Please
                  contact us. Our team of professionals will be happy to help.
                </p>
              </div>
              <!-- .service-details end -->
            </div>
            <!-- .service-icon-left-boxed end -->
          </div>
          <!-- .col-md-6 end -->
        </div>
        <!-- .row.mb-30 end -->
      </div>
      <!-- .container end -->
    </div>
    <!-- .page-content end -->

    <div
      class="page-content custom-bkg bkg-dark-blue column-img-bkg dark mb-70"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-md-offset-2 custom-col-padding-both">
            <div class="custom-heading">
              <h3>POURQUOI CHOISIR LE CAMIONNAGE DE TRANS-NET?</h3>
            </div>
            <!-- .custom-heading end -->

            <p>
              TRANS-NRT Sarl est une équipe composée de spécialistes du
              transport et de la logistique, de l’expedition du fret, e la
              douane et transit, et du droit; qui chaque jour accroît son
              efficacité à l'endroit de ses clients.
            </p>

            <ul class="service-list clearfix">
              <li>
                <div class="icon-container">
                  <img
                    class="svg-white"
                    src="img/svg/pi-cargo-box-2.svg"
                    alt="icon"
                  />
                </div>
                <!-- .icon-container end -->

                <p>Une large gamme de services</p>
              </li>

              <li>
                <div class="icon-container">
                  <img
                    class="svg-white"
                    src="img/svg/pi-mark-energy.svg"
                    alt="icon"
                  />
                </div>
                <!-- .icon-container end -->

                <p>Une meilleure qualité de services</p>
              </li>

              <li>
                <div class="icon-container">
                  <img
                    class="svg-white"
                    src="img/svg/pi-cargo-retail.svg"
                    alt="icon"
                  />
                </div>
                <!-- .icon-container end -->

                <p>Un professionnalisme remarquable</p>
              </li>

              <li>
                <div class="icon-container">
                  <img
                    class="svg-white"
                    src="img/svg/pi-truck-8.svg"
                    alt="icon"
                  />
                </div>
                <!-- .icon-container end -->

                <p>Sécurité pour sa marchandise</p>
              </li>
            </ul>
            <!-- .service-list end -->
          </div>
          <!-- .col-md-6 end -->

          <div class="col-md-6 img-bkg01">
            <div>&nbsp;</div>
          </div>
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </div>
    <!-- .page-content.bkg-dark-blue end -->

    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="custom-heading">
              <h3>publicité</h3>
            </div>
            <!-- .custom-heading end -->

            <ul class="pi-latest-posts clearfix">
              <li>
                <div class="post-media">
                  <img src="img/blog/latest01.jpg" alt="" />
                </div>
                <!-- .post-media end -->

                <div class="post-details">
                  <div class="post-date">
                    <p>
                      <i class="fa fa-calendar"></i>
                      MAY 15, 2021
                    </p>
                  </div>

                  <a href="news-single.html">
                    <h4>Concert petite pays - Au parcours vita</h4>
                  </a>

                  <a href="news-single.html" class="read-more">
                    <span>
                      Lire plus
                      <i class="fa fa-chevron-right"></i>
                    </span>
                  </a>
                </div>
                <!-- .post-details end -->
              </li>


            </ul>
            <!-- .pi-latest-posts end -->
          </div>
          <!-- .col-md-4 end -->

          <div class="col-md-4 col-sm-6">
            <div class="custom-heading">
              <h3>Avis clients</h3>
            </div>
            <!-- .custom-heading end -->

            <div class="carousel-container">
              <agile
                :autoplay="true"
                :fade="false"
                :navButtons="false"
                :swipeDistance="50"
                :timing="ease"
                :rtl="false"
                :dots="false"
              >
                <div class="owl-item">
                  <div class="testimonial">
                    <p>
                      « Toute l’équipe de [Nom de votre entreprise] vous
                      remercie pour votre message. Nous nous réjouissons de
                      savoir que vous avez apprécié nos [Nom de votre produit ou
                      de votre service]. Nous espérons vous revoir très bientôt
                      dans notre magasin de [lieu du point de vente]. »
                    </p>

                    <div class="testimonial-author">
                      <p>
                        Ngono Ronald, <br />
                        Transporteur
                      </p>
                    </div>
                    <!-- .testimonial-author end -->
                  </div>
                  <!-- .testimonial end -->
                </div>
                <!-- .owl-item end -->

                <div class="owl-item">
                  <div class="testimonial">
                    <p>
                      Attention! Lorsqu’on demande son opinion à quelqu’un, on
                      pose la question suivante: Tu en penses quoi? S’il n’y a
                      pas de complément, il est impératif de mettre ce pronom EN
                      car il s’agit de l’expression “penser quelque chose DE
                      quelque chose
                    </p>

                    <div class="testimonial-author">
                      <p>
                        parfait ebobisse, <br />
                        Développeur
                      </p>
                    </div>
                    <!-- .testimonial-author end -->
                  </div>
                  <!-- .testimonial end -->
                </div>
                <!-- .owl-item end -->
                <!-- .owl-item end --> </agile
              ><!-- #testimonial-carousel end -->
            </div>
            <!-- .carousel-container end -->
          </div>
          <!-- .col-md-4 end -->

          <div class="col-md-4 col-sm-12 clearfix">
            <div class="custom-heading">
              <h3>Comment débuter ?</h3>
            </div>
            <!-- .custom-heading end -->

            <img src="img/pics/locations.jpg" alt="locations illustration" />

            <br />

            <p>
              Vous ne savez pas quel moyen de trabsport vous conviendrait le
              mieux; comment faire pour l'import/export de vos marchandises;
              etc...?
            </p>

            <a href="locations.html" class="read-more">
              <span>
                commencer
                <i class="fa fa-chevron-right"></i>
              </span>
            </a>
          </div>
          <!-- .col-md-4 end -->
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </div>
    <!-- .page-content end -->

    <div class="page-content custom-bkg bkg-grey">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="carousel-container">
              <div
                id="client-carousel"
                class="owl-carousel owl-carousel-navigation"
              >
                <div class="owl-item">
                  <img src="img/pics/client01.png" alt="" />
                </div>
                <div class="owl-item">
                  <img src="img/pics/client02.png" alt="" />
                </div>
                <div class="owl-item">
                  <img src="img/pics/client03.png" alt="" />
                </div>
                <div class="owl-item">
                  <img src="img/pics/client04.png" alt="" />
                </div>
                <div class="owl-item">
                  <img src="img/pics/client05.png" alt="" />
                </div>
                <div class="owl-item">
                  <img src="img/pics/client06.png" alt="" />
                </div>
              </div>
              <!-- .owl-carousel.owl-carousel-navigation end -->
            </div>
            <!-- .carousel-container end -->
          </div>
          <!-- .col-md-12 end -->
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
import { mapState } from "vuex";
import moment from "moment";
moment.locale("fr");

export default {
  name: "Accueil",
  layout: "frontLayout",
  head: {
    title: "Transnet -  Accueil",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  async created() {
    const result = await this.$store.dispatch("frontoffice/getArticles");
    console.log(result);
  },
  computed: {
    ...mapState({
      articles: (state) => state.frontoffice.articles,
    }),
  },
  filters: {
    moment: function (date) {
      return moment(date).format("LL");
    },
    strippedContent: function (string) {
      return string.replace(/<\/?[^>]+>/gi, " ").substring(0, 150) + "...";
    },
  },
};
</script>
<style scoped>
#client-carousel {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.agile__slides {
  align-items: flex-start;
}
.collapse:not(.show) {
  display: block;
}
.slider-header .slide h2,
.slider-header .slide p {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: unset !important;
}
.slider-header .slide h2 {
  z-index: 9999;
  top: 45%;
  font-size: 3vw;
  color: #ffffff;
}

.slider-header .slide p {
  color: white;
  font-size: 2rem;
  top: 60%;
  display: none;
}
.slider-header img {
  position: relative;
  filter: brightness(0.5);
}

.slider-header .slide {
  cursor: pointer;
}

.slider-header .slide .container-text-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-bkg01{
    background-image: url('/img/pics/img-bkg01.e6d0be0.jpg');
}
</style>