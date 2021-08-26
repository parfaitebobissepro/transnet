<template>
  <section class="content">
    <style>

      .people-list .chat-list li {
        padding: 10px 15px;
        list-style: none;
        display: flex;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -ms-border-radius: 3px;
        border-radius: 3px;
        /* justify-content: space-between; */
        align-items: center;
      }
      .people-list .chat-list img {
        width: 45px;
        height: 45px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        border-radius: 50%;
        object-fit: contain;
      }
      .chat .chat-header img {
        float: left;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        object-fit: contain;
        border: 1px solid #cbcdc8;
      }
      .chat .chat-header {
        padding: 20px;
        border-bottom: 1px solid #eee;
        border-radius: 0 0.55rem 0 0;
        display: flex;
        align-items: center;
      }
      .chat-message input[type=text], input[type=email], textarea{
        border: 1px solid #0f3042 !important;
        border-radius: 5px !important;
        background: transparent !important;
        padding: 0px 7px !important;
      }
      .chat-message input[type=text]:focus, input[type=email]:focus, textarea:focus{
        border: 1px solid #78ae61 !important;
        -webkit-box-shadow: 0 1px 0 0 #78ae61 !important;
        box-shadow: 0 1px 0 0 #78ae61 !important;
      }
      .chat-message .form-group .form-control{
          width: 97% !important;
      }
    </style>
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="breadcrumb breadcrumb-style ">
                            <li class="breadcrumb-item">
                                <h4 class="page-title">Chat</h4>
                            </li>
                            <li class="breadcrumb-item bcrumb-1">
                                <a href="../../index.html">
                                    <i class="fas fa-home"></i> Home</a>
                            </li>
                            <li class="breadcrumb-item bcrumb-2">
                                <a href="#" onClick="return false;">Apps</a>
                            </li>
                            <li class="breadcrumb-item active">Chat</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div class="card">
                        <div class="body">
                            <div id="plist" class="people-list">
                                <div class="form-line m-b-15">
                                    <input type="text" class="form-control" placeholder="Search..." />
                                </div>
                                <div class="tab-content">
                                    <div id="chat_user">
                                        <ul class="chat-list list-unstyled m-b-0">
                                            <li class="clearfix active">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">William Smith</div>
                                                    <div class="status">
                                                        <i class="material-icons offline">fiber_manual_record</i>
                                                        left 7 mins ago </div>
                                                </div>
                                            </li>
                                            <li class="clearfix ">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">Martha Williams</div>
                                                    <div class="status">
                                                        <i class="material-icons offline">fiber_manual_record</i>
                                                        online </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">Joseph Clark</div>
                                                    <div class="status">
                                                        <i class="material-icons online">fiber_manual_record</i>
                                                        online </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">Nancy Taylor</div>
                                                    <div class="status">
                                                        <i class="material-icons online">fiber_manual_record</i>
                                                        online </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">Margaret Wilson</div>
                                                    <div class="status">
                                                        <i class="material-icons online">fiber_manual_record</i>
                                                        online </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">Joseph Jones</div>
                                                    <div class="status">
                                                        <i class="material-icons offline">fiber_manual_record</i>
                                                        left 30 mins ago </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">Jane Brown</div>
                                                    <div class="status">
                                                        <i class="material-icons offline">fiber_manual_record</i>
                                                        left 10 hours ago </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">Eliza Johnson</div>
                                                    <div class="status">
                                                        <i class="material-icons online">fiber_manual_record</i>
                                                        online </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">Mike Clark</div>
                                                    <div class="status">
                                                        <i class="material-icons online">fiber_manual_record</i>
                                                        online </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">Ann Henry</div>
                                                    <div class="status">
                                                        <i class="material-icons online">fiber_manual_record</i>
                                                        online </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">Nancy Smith</div>
                                                    <div class="status">
                                                        <i class="material-icons online">fiber_manual_record</i>
                                                        online </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                                <div class="about">
                                                    <div class="name">David Wilson</div>
                                                    <div class="status">
                                                        <i class="material-icons offline">fiber_manual_record</i>
                                                        offline since Oct 28 </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div class="card">
                        <div class="chat">
                            <div class="chat-header clearfix">
                                <img src="/img/unsplash/avatar-01.jpg" alt="avatar">
                                <div class="chat-about">
                                    <div class="chat-with">Maria Smith</div>
                                    <div class="chat-num-messages">2 new messages</div>
                                </div>
                            </div>
                            <div class="chat-history" id="chat-conversation">
                                <ul>
                                    <li class="clearfix">
                                        <div class="message-data text-right">
                                            <span class="message-data-time">10:10 AM, Today
                                            </span>
                                            &nbsp; &nbsp;
                                            <span class="message-data-name">Maria</span>
                                        </div>
                                        <div class="message other-message float-right"> Hi Robert , how are you? How is
                                            your work going on? </div>
                                    </li>
                                    <li>
                                        <div class="message-data">
                                            <span class="message-data-name">Robert </span>
                                            <span class="message-data-time">10:12 AM, Today</span>
                                        </div>
                                        <div class="message my-message">
                                            <p>Its good. We completed almost all task assign by our manager.</p>
                                            <div class="row">
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="message-data">
                                            <span class="message-data-name">Robert </span>
                                            <span class="message-data-time">10:12 AM, Today</span>
                                        </div>
                                        <div class="message my-message">
                                            <p>How are you feel today? What's about vacation?.</p>
                                            <div class="row">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="message-data text-right">
                                            <span class="message-data-time">10:10 AM, Today
                                            </span>
                                            &nbsp; &nbsp;
                                            <span class="message-data-name">Maria</span>
                                        </div>
                                        <div class="message other-message float-right"> I am good, We think for next
                                            weekend.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="chat-message clearfix">
                                <div class="form-group">
                                    <div class="form-line">
                                        <input type="text" class="form-control" placeholder="Enter text here.." />
                                    </div>
                                </div>
                                <div class="chat-upload">
                                    <button type="button" class="btn btn-circle waves-effect waves-circle waves-float bg-deep-orange">
                                        <i class="material-icons">attach_file</i>
                                    </button>
                                    <button type="button" class="btn btn-circle waves-effect waves-circle waves-float bg-deep-orange">
                                        <i class="material-icons">insert_emoticon</i>
                                    </button>
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
import Vue from "vue";
import { mapState } from "vuex";
import moment from "moment";
moment.locale("fr");
export default {
  layout: "dashboardLayout",
  computed: {
  },
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
        rel: "stylesheets"
      }
    ],
    scripts: [
      {
        src: "/dashbord_assets/js/pages/apps/chat.js"
      }
    ]
  },
};
</script>

<style lang="scss" scoped>
</style>