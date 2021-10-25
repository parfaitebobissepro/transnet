<template>
    <div>
        <BANNERFO></BANNERFO>

        <div class="page-content custom-bkg bkg-grey">
            <div class="container">
                <div class="row">
                    <ul class="col-md-12 blog-posts isotope masonry">
                        <template v-for="article in articles">
                            <li class="blog-post clearfix isotope-item" :key="article._id">
                                <div class="post-info clearfix">
                                    <div class="post-date">
                                        <p>
                                            <i class="fa fa-calendar"></i>
                                            {{article.createdAt | moment}}
                                        </p>
                                    </div><!-- .post-date end -->  

                                    <div class="post-category">
                                        <a href="#">{{article.type}}</a>
                                    </div>
                                </div><!-- .post-info end -->

                                <div class="post-body">
                                    <a href="news-single.html">
                                        <h3>{{article.title}}</h3>
                                    </a>

                                    <div  v-html="$options.filters.strippedContent(article.content)" style="height: 70px">
                                    </div>                                
                                </div><!-- .post-body end -->

                                <div class="post-media">
                                    <a href="news-single.html" class="post-img">
                                        <img :src="article.image ? $axios.defaults.baseURL + article.image : 'img/blog/masonry01.jpg'" alt="Trucking Transportation and Logistics HTML template"/>
                                    </a>
                                </div><!-- .post-media end -->

                                <div class="post-footer">
                                    <ul class="post-meta">
                                        <li class="comments fa fa-comments-o"><a href="news-single.html">{{article.comments.length}}</a></li>
                                        <!-- <li class="post-like fa fa-heart-o" data-url="http://www.envato.com" data-text="This is an example of sharing your blog post"></li> -->
                                    </ul><!-- .post-meta end -->

                                    <NuxtLink :to="'/articles/' + article.slug" class="read-more">
                                        <span>
                                            Lire plus
                                            <i class="fa fa-external-link"></i>
                                        </span>
                                    </NuxtLink>
                                </div><!-- .post-meta end -->
                            </li><!-- .blog-post end -->
                        </template>
                    </ul><!-- .col-md-12.blog-posts.post-list end -->
                </div><!-- .row end -->
            </div><!-- .container end -->
        </div><!-- .page-content end -->
    </div>
</template>

<script>
import BANNERFO from "../../components/bannerFo.vue";
import Vue from "vue";
import { mapState } from "vuex";
import moment from "moment";
moment.locale('fr');

export default {
    name:'articles',
    layout:'frontLayout',
    data() {
        return {
        namePage: "article",
        };
    },
    async created() {
        const result = await this.$store.dispatch(
        "frontoffice/getArticles"
        );
        console.log(result);
    },
    filters: {
        moment: function(date) {
        return moment(date).format('LL');
        },
        strippedContent: function(string) {
            return string.replace(/<\/?[^>]+>/ig, " ").substring(0,150)+'...';
        }
    },
    computed: {
        ...mapState({
        articles: state => state.frontoffice.articles,
        }),
    },
    head: {
        title: "Transnet -  Articles",
    },
    components: {
      BANNERFO,
    },
}
</script>