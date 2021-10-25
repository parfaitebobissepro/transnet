<template>
  <div>
    <BANNERFO></BANNERFO>

    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-md-9 blog-posts post-single">
            <div class="blog-post clearfix" v-if="articles_details">
              <div class="post-media">
                <a href="news-single.html" class="post-img">
                  <img
                    src="img/blog/post-img01.jpg"
                    alt="Trucking Transportation and Logistics HTML template"
                  />
                </a>
              </div>
              <!-- .post-media end -->

              <div class="post-date">
                <p class="day">{{ articles_details.createdAt | momentDay }}</p>
                <p class="month">{{ articles_details.createdAt | momentMonth }}</p>
              </div>
              <!-- .post-date end -->

              <div class="post-body">
                <a href="news-single.html">
                  <h2>{{ articles_details.title }}</h2>
                </a>

                <div v-html="articles_details.content"></div>
              </div>
              <!-- .post-body end -->

              <!-- .post-comments start -->
              <div class="post-comments">
                <div class="custom-heading">
                  <h3>Comments</h3>
                </div>
                <!-- .custom-heading end -->

                <!-- .comments-li start -->
                <ul class="comments-li">
                  <li>
                    <div class="comment">
                      <div class="avatar">
                        <img src="img/blog/avatar01.png" alt="author" />
                      </div>

                      <ul class="comment-meta">
                        <li>
                          <a href="#" class="author">Mila Curtis</a>
                        </li>

                        <li class="date">December 09th, 2014 at 11:05 am</li>
                      </ul>

                      <div class="comment-body">
                        <p>
                          Lorem ipsum dolor sit amet, onsectetuer dipiscing elit, sed diam
                          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                          erat volutpat.
                        </p>

                        <!-- <a class="comment-reply-link"> Reply </a> -->
                      </div>
                    </div>
                    <!-- children end -->
                  </li>
                  <!-- li end -->
                </ul>
                <!-- .comments-li end -->
              </div>
              <!-- .post-comments end -->

              <!-- .comment-form start -->
              <div class="comment-form">
                <div id="respond">
                  <div class="custom-heading">
                    <h3>laissez un commentaire</h3>
                  </div>
                  <!-- .custom-heading end -->

                  <form
                    id="commentform"
                    action="post"
                    method="post"
                    @submit.prevent="submit"
                  >
                    <fieldset>
                      <label> <span class="required">*</span> Full Name: </label>

                      <input
                        name="author"
                        class="wpcf7-text"
                        id="comment-name"
                        type="text"
                        v-model="name"
                      />
                    </fieldset>

                    <fieldset>
                      <label> <span class="required">*</span> Email address: </label>

                      <input
                        name="email"
                        class="wpcf7-text"
                        id="comment-email"
                        type="email"
                        v-model="email"
                        required
                      />
                    </fieldset>

                    <fieldset class="wpcf7-message">
                      <label> <span class="required">*</span> Message: </label>

                      <textarea
                        name="comment"
                        class="wpcf7-textarea"
                        id="comment-message"
                        rows="8"
                        v-model="message"
                      ></textarea>
                    </fieldset>

                    <input type="submit" class="comment-reply" value="Submit" />
                  </form>
                </div>
                <!-- 3respond end -->
              </div>
              <!-- .comment-form end -->
            </div>
            <!-- .blog-post end -->
          </div>
          <!-- .col-md-9.blog-posts.post-list end -->

          <!-- aside.aside-left start -->
          <aside class="col-md-3 aside aside-left">
            <!-- .aside-widgets start -->
            <ul class="aside-widgets">
              <!-- .widget.widget-search start -->
              <li id="search-2" class="widget widget_search clearfix">
                <div class="title">
                  <h3>search</h3>
                </div>

                <form action="#" method="get">
                  <input
                    class="a_search"
                    name="s"
                    type="text"
                    placeholder="Type and hit enter..."
                  />
                  <input class="search-submit" type="submit" />
                </form>
              </li>
              <!-- .widget.widget_search end -->

              <!-- .widget.widget-categories start -->
              <li class="widget widget_categories">
                <div class="title">
                  <h3>categories</h3>
                </div>

                <ul>
                  <li><a href="news-single.html">Corporate news (3)</a></li>
                  <li><a href="news-single.html">Financial Reports (5)</a></li>
                  <li><a href="news-single.html">Company Events (3)</a></li>
                  <li><a href="news-single.html">Transportation Conventions</a></li>
                </ul>
              </li>
              <!-- .widget_categories end -->

              <!-- .widget.rpw_posts_widget start -->
              <li class="widget rpw_posts_widget">
                <div class="title">
                  <h3>latest posts</h3>
                </div>

                <ul>
                  <li>
                    <a href="news-single.html">
                      <h4>Trucking, the Employee of the year 2015</h4>
                    </a>
                  </li>

                  <li>
                    <a href="news-single.html">
                      <h4>Trucking wins the green truck award for 2013</h4>
                    </a>
                  </li>

                  <li>
                    <a href="news-single.html">
                      <h4>Inside Trucking: Meet our employees</h4>
                    </a>
                  </li>
                </ul>
              </li>
              <!-- .rpw_posts_widget end -->

              <!-- .widget.widget-text start -->
              <li class="widget widget-text">
                <div class="title">
                  <h3>contact us</h3>
                </div>

                <img src="img/pics/locations.jpg" alt="contact us" />

                <p>Let us know what can we do for you. Contact us today!</p>

                <a href="contact-simple.html" class="read-more">
                  <span>
                    Contact us
                    <i class="fa fa-chevron-right"></i>
                  </span>
                </a>
              </li>
              <!-- .widget-text end -->
            </ul>
            <!-- .aside-widgets end -->
          </aside>
          <!-- .aside.aside-left end -->
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </div>
    <!-- .page-content end -->
  </div>
</template>

<script>
import BANNERFO from "../../components/bannerFo.vue";
import Vue from "vue";
import { mapState } from "vuex";
import moment from "moment";
moment.locale("fr");

export default {
  name: "article",
  layout: "frontLayout",
  components: {
    BANNERFO,
  },
  data() {
    return {
      namePage: "Notre blog",
      name: "",
      email: "",
      message: "",
    };
  },
  computed: {
    ...mapState({
      articles_details: (state) => state.frontoffice.articles_details,
    }),
  },
  async created() {
    // console.log(this.$route.params.id);
    const result = await this.$store.dispatch(
      "frontoffice/getArticleBySlug",
      this.$route.params.id
    );

    console.log(result);

    //
    if (result) {
      this.namePage = "Notre blog > " + result.title;
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format("LL");
    },
    momentDay: function (date) {
      return moment(date).format("Do");
    },
    momentMonth: function (date) {
      return moment(date).format("MMMM");
    },
    momentfrom: function (date) {
      return moment(date).fromNow();
    },
    strippedContent: function (string) {
      return string.replace(/<\/?[^>]+>/gi, " ").substring(0, 150) + "...";
    },
  },
  methods: {
    async submit() {
      this.submitStatus = "PENDING";
      await this.commentApi(this.name, this.email, this.message);
      this.submitStatus = "OK";
    },

    async commentApi(name, email, message) {
      var data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("comment", message);
      //   data.append("lang", this.$i18n.locale);
      // console.log(data);
      let response = await this.$store.dispatch("frontoffice/postComment", data);
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

        console.log(response);

        // await this.$store.dispatch("frontoffice/getLastComments");
      }
    },
  },
};
</script>
