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
                <h4 class="page-title">Messagerie</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row" v-if="chat_conversation != null">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div class="card">
            <div class="body">
              <div id="plist" class="people-list">
                <div class="form-line m-b-15">
                  <input
                    @keyup="search_discuss"
                    type="text"
                    class="form-control search_discuss"
                    placeholder="Rechercher..."
                    v-model="searchquery"
                  />
                </div>
                <div
                  class="tab-content"
                  style="    max-height: 430px;
    overflow-y: scroll;"
                >
                  <div id="chat_user">
                    <ul class="chat-list list-unstyled m-b-0" v-if="user != {}">
                      <template v-for="(chat,index) in chat_conversation">
                        <li :class="index == 0 ? 'clearfix chatonglet active' : 'clearfix chatonglet'" :attr-onglet="chat._id" :attr-destinataire="chat.recepteur._id" :attr-nom="chat.recepteur.nom_ecole" :attr-conversation="chat._id" v-if="chat.emetteur._id == user._id && chat.recepteur.type == 'Ecole'" :key="index">
                            <img
                              :src="$axios.defaults.baseURL + chat.recepteur.logo_ecole"
                              alt="avatar"
                            />
                            <div class="about">
                            <div class="name">
                                    {{ chat.recepteur.name }}
                            </div>
                            </div>
                        </li>
                        <li :class="index == 0 ? 'clearfix chatonglet active' : 'clearfix chatonglet'" :attr-onglet="chat._id" :attr-destinataire="chat.recepteur._id" :attr-nom="chat.recepteur.username" :attr-conversation="chat._id" v-if="chat.emetteur._id == user._id && chat.recepteur.type != 'Ecole'" :key="index">
                            <img
                              :src="chat.recepteur.type == 'Etudiant' ? $axios.defaults.baseURL  + chat.recepteur.pic : '' + chat.recepteur.pic"
                              alt="avatar"
                            />
                            <div class="about">
                            <div class="name">
                                    {{ chat.recepteur.name }}
                            </div>
                            </div>
                        </li>
                        <li :class="index == 0 ? 'clearfix chatonglet active' : 'clearfix chatonglet'" :attr-onglet="chat._id" :attr-destinataire="chat.emetteur._id" :attr-nom="chat.emetteur.nom_ecole" :attr-conversation="chat._id" v-if="chat.recepteur._id == user._id && chat.emetteur.type == 'Ecole'" :key="index">
                            <img
                              :src="$axios.defaults.baseURL + chat.emetteur.logo_ecole"
                              alt="avatar"
                            />
                            <div class="about">
                            <div class="name">
                                    {{ chat.emetteur.name }}
                            </div>
                            </div>
                        </li>
                        <li :class="index == 0 ? 'clearfix chatonglet active' : 'clearfix chatonglet'" :attr-onglet="chat._id" :attr-destinataire="chat.emetteur._id" :attr-nom="chat.emetteur.username" :attr-conversation="chat._id" v-if="chat.recepteur._id == user._id && chat.emetteur.type != 'Etudiant'" :key="index">
                            <img
                              :src="chat.emetteur.type == 'Etudiant' ? $axios.defaults.baseURL  + chat.emetteur.pic : ''  + chat.emetteur.pic"
                              alt="avatar"
                            />
                            <div class="about">
                            <div class="name">
                                    {{ chat.emetteur.name }}
                            </div>
                            </div>
                        </li>
                      </template>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
          <div class="card">
              <div :class="'chat chat'+chat_message._id+' ongletchat'" :style="index == 0 ? '' : 'display: none;'" v-for="(chat_message,index) in chat_conversation" :key="index">
                <div class="chat-header clearfix">
                  <template v-if="chat_message.emetteur._id == user._id && chat_message.recepteur.type == 'Ecole'">
                    <img
                      :src="$axios.defaults.baseURL+chat_message.recepteur.logo_ecole"
                      alt="avatar"
                    />
                    <div class="chat-about">
                      <div class="chat-with">{{ chat_message.recepteur.name }}</div>
                    </div>
                  </template>
                  <template v-if="chat_message.emetteur._id == user._id && chat_message.recepteur.type != 'Ecole'">
                    <img
                      :src="chat_message.recepteur.type == 'Etudiant' ? $axios.defaults.baseURL  + chat_message.recepteur.pic : ''  + chat_message.recepteur.pic"
                      alt="avatar"
                    />
                    <div class="chat-about">
                      <div class="chat-with">{{ chat_message.recepteur.name }}</div>
                    </div>
                  </template>
                  <template v-if="chat_message.recepteur._id == user._id && chat_message.emetteur.type == 'Ecole'">
                    <img
                      :src="$axios.defaults.baseURL+chat_message.emetteur.logo_ecole"
                      alt="avatar"
                    />
                    <div class="chat-about">
                      <div class="chat-with">{{ chat_message.emetteur.name }}</div>
                    </div>
                  </template>
                  <template v-if="chat_message.recepteur._id == user._id && chat_message.emetteur.type != 'Ecole'">
                    <img
                      :src="chat_message.emetteur.type == 'Etudiant' ? $axios.defaults.baseURL  + chat_message.emetteur.pic : ''  + chat_message.emetteur.pic"
                      alt="avatar"
                    />
                    <div class="chat-about">
                      <div class="chat-with">{{ chat_message.emetteur.name }}</div>
                    </div>
                  </template>
                </div>
                <div class="chat-history" id="chat-conversation">
                  <ul style="height: 30rem;overflow: auto;">
                    <template v-for="(message,index) in chat_message.messages">
                      <section :key="index">
                        <li class="clearfix" v-if="message.from == user._id">
                          <div class="message-data text-right">
                            <span class="message-data-time">{{ message.createdAt | moment }}</span>
                            &nbsp; &nbsp;
                            <span class="message-data-name">Vous</span>
                          </div>
                          <div class="message other-message float-right">
                            <span style="font-weight: bold;color: black;">-- Objet: {{ message.objet }}</span><br>
                            {{ message.message }}
                          </div>
                        </li>
                        <li v-if="message.from != user._id">
                          <div class="message-data">
                            <span class="message-data-name" v-if="chat_message.recepteur._id == user._id">{{ chat_message.emetteur.name }}</span>
                            <span class="message-data-name" v-if="chat_message.emetteur._id == user._id">{{ chat_message.recepteur.name }}</span>
                            <span class="message-data-time">{{ message.createdAt | moment }}</span>
                          </div>
                          <div class="message my-message">
                            <p>
                              <span style="font-weight: bold;color: black;">-- Objet: {{ message.objet }}</span><br>
                              {{ message.message }}
                            </p>
                            <div class="row"></div>
                          </div>
                        </li>
                        <li v-if="message.file != '' && message.file != undefined && message.from == user._id">
                          <div style="position: relative;display: flex;justify-content: flex-end;margin-bottom: 5rem;">
                              <img :src="$axios.defaults.baseURL+message.file" style="height: 10rem;width: 10rem;object-fit: contain;" v-if="message.file.split('.')[message.file.split('.').length-1].toLowerCase() == 'png' || message.file.split('.')[message.file.split('.').length-1].toLowerCase() == 'jpg' || message.file.split('.')[message.file.split('.').length-1].toLowerCase() == 'jpeg' || message.file.split('.')[message.file.split('.').length-1].toLowerCase() == 'webp' || message.file.split('.')[message.file.split('.').length-1].toLowerCase() == 'svg'">

                              <a :href="$axios.defaults.baseURL+message.file" target="_blank" v-else>Cliquer pour voir le fichier <i class="material-icons" style="font-size:15px;position: relative;top: 3px;">remove_red_eye</i></a>
                          </div>
                        </li>
                        <li v-if="message.file != '' && message.file != undefined && message.from != user._id">
                          <div style="position: relative;display: flex;justify-content: flex-start;margin-bottom: 5rem;">
                              <img :src="$axios.defaults.baseURL+message.file" style="height: 10rem;width: 10rem;object-fit: contain;" v-if="message.file.split('.')[message.file.split('.').length-1].toLowerCase() == 'png' || message.file.split('.')[message.file.split('.').length-1].toLowerCase() == 'jpg' || message.file.split('.')[message.file.split('.').length-1].toLowerCase() == 'jpeg' || message.file.split('.')[message.file.split('.').length-1].toLowerCase() == 'webp' || message.file.split('.')[message.file.split('.').length-1].toLowerCase() == 'svg'">

                              <a :href="message.file" target="_blank" v-else>Cliquer pour voir le fichier <i class="material-icons" style="font-size:15px;position: relative;top: 3px;">remove_red_eye</i></a>
                          </div>
                        </li>
                      </section>
                    </template>
                  </ul>
                </div>
              </div>
            <div class="chat-message clearfix" style="padding: 2rem;">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control objet_message"
                      placeholder="Objet"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea class="form-control text_message" placeholder="Ecrivez ici..." style="margin-top: 0px;margin-bottom: 0px;height: 125px;padding: 10px !important;margin: 0px;width: 99.2% !important;"></textarea>
                  </div>
                </div>
              </div>
              <div class="chat-upload" style="position: relative;">
                <div style="position: absolute;right: 2rem;top: 5px;display:none;">
                  <input type="file" name="" id="attach_file" class="attach_file">
                </div>
                <button
                  type="button"
                  class="btn btn-circle waves-effect waves-circle waves-float bg-dark send_msg"
                  title="Envoyer"
                  @click.prevent="send_msg()"
                >
                  <i class="material-icons" style="color: white;">send</i>
                </button>
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
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
Vue.use(VueToast);
var files_attach;
export default {
  layout: "dashboardLayout",
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.isLoggedIn,
      chat_conversation: state => state.chat.chat_conversation,
      user: state => state.auth.user
    })
  },
  name: "MessagerieClient",
  data() {
    return {
      searchquery: "",
    };
  },
  async created() {
    const cookieLog = this.$cookies.get('auth', { parseJSON: true });
    if (cookieLog) {
      if(cookieLog.isLoggedIn){
        await this.$store.dispatch('auth/newMessage', 0);
        const result = await this.$store.dispatch(
          "chat/getChatUser",
          cookieLog.user._id
        );
        if (result) {
            var onglet;
            const script2 = document.createElement("script");
            script2.type = "text/javascript";
            script2.src = "/dashbord_assets/js/admin.js";
            document.body.appendChild(script2);
        
            setTimeout(() => {
                scrollDownChat()
            }, 3000);
            $('.chatonglet').on('click', function () {
                $('.chatonglet').removeClass('active');
                $(this).addClass('active');
                onglet = $(this).attr('attr-onglet');
                $('.ongletchat').hide();
                $('.chat'+onglet).fadeIn(400);
                scrollDownChat()
            })
            function scrollDownChat() {
                var ongletchat = $('.chatonglet.active').attr('attr-onglet');
                $('.chat'+ongletchat+' .chat-history ul').animate({ scrollTop: $('.chat'+ongletchat+' .chat-history ul').prop("scrollHeight")}, 1000);
            }
        }
      }
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).calendar();
    }
  },
  methods: {
    async search_discuss() {
      var value = this.searchquery;
      value = value.toLowerCase();
      $(".chatonglet").filter(function() {
          $(this).toggle(
              $(this)
                  .text()
                  .toLowerCase()
                  .indexOf(value) > -1
          );
      });
    },
    async send_msg() {
      // console.log("fucntion entré");
      var objet = $(".objet_message").val();
      var message = $(".text_message").val();
      // console.log(message);
      var from = this.user._id;
      // var to = dest;
      files_attach = $('.attach_file')[0].files[0];
      var from_nom = "";
      var message_formatted = message.replaceAll('\n','<br>');
      var data = {
          objet,
          message:message_formatted,
          from,
          to: $('.chatonglet.active').attr('attr-destinataire'),
          to_nom: $('.chatonglet.active').attr('attr-nom'),
          from_nom,
          conversation: $('.chatonglet.active').attr('attr-conversation'),
          hasFile: files_attach == undefined ? false : true
      }
      data = JSON.stringify(data);
      var actual_date = new Date();
      var ongletchat = $('.chatonglet.active').attr('attr-onglet');
      $('.chat'+ongletchat+' .chat-history ul').animate({ scrollTop: $('.chat'+ongletchat+' .chat-history ul').prop("scrollHeight")}, 1000);
      $('.chat'+ongletchat+' .chat-history ul').append(`
              <li class="clearfix">
              <div class="message-data text-right">
                  <span class="message-data-time">${moment(actual_date).calendar()}</span>
                  &nbsp; &nbsp;
                  <span class="message-data-name">Vous</span>
              </div>
              <div class="message other-message float-right">
                  <span style="font-weight: bold;color: black;">-- Objet: ${objet}</span><br>
                  ${message_formatted}
              </div>
              </li>`);
      $(".objet_message").val("");
      $(".text_message").val("");
      this.$socket.emit("message", data);
    },
  },
  sockets: {
      connect: function () {
          console.log('socket connected')
      },
      new_message: async function (data) {
        await this.$store.dispatch('auth/newMessage', 0);
        var notif_data = JSON.parse(data)
        var actual_date = new Date();
        $('.chat'+notif_data.conversation+' .chat-history ul').animate({ scrollTop: $('.chat'+notif_data.conversation+' .chat-history ul').prop("scrollHeight")}, 1000);
        $('.chat'+notif_data.conversation+' .chat-history ul').append(`
          <li>
            <div class="message-data">
              <span class="message-data-name">${notif_data.from.name}</span>
              <span class="message-data-time">${moment(actual_date).calendar()}</span>
            </div>
            <div class="message my-message">
              <p>
                <span style="font-weight: bold;color: black;">-- Objet: ${notif_data.objet}</span><br>
                ${notif_data.message}
              </p>
              <div class="row"></div>
            </div>
          </li>
        `);
      },
      retour_message_file: function (data) {
        console.log("Un nouveau fichier emit");
        console.log(data);
        var attach_data = JSON.parse(data)
        var self = this;
        console.log(this.user._id);
        console.log(attach_data.from._id);
        console.log(attach_data.from._id == this.user._id);
        if (attach_data.from._id == this.user._id) {
            var data = new FormData();
            console.log(files_attach);
            data.append('file', files_attach);
            $.ajax({
                url: this.$axios.defaults.baseURL+'/upload-chat-image/'+attach_data._id,
                type: 'POST',
                processData: false,
                contentType: false,
                data: data,
                success: function (data) {
                  document.getElementById("attach_file").value = "";
                    self.$socket.emit("image_uploaded", data.data);
                },
                error: function (error) {
                    console.log(error);
                }
            })
        }
      },
      new_file: function (data) {
        var upload_data = JSON.parse(data)
        console.log(upload_data);
        var ficher = upload_data.file.split(".")[upload_data.file.split(".").length-1].toLowerCase();
        if (upload_data.from._id == this.user._id) {
            if (ficher == "png" || ficher == "jpg" || ficher == "jpeg" || ficher == "webp" || ficher == "svg") {
                $('.chat'+upload_data.conversation+' .chat-history ul').append(`
                        <li>
                        <div style="position: relative;display: flex;justify-content: flex-end;margin-bottom: 5rem;">
                            <img src="${this.$axios.defaults.baseURL}${upload_data.file}" style="height: 10rem;width: 10rem;object-fit: contain;">
                        </div>
                        </li>`);
            } else {
                $('.chat'+upload_data.conversation+' .chat-history ul').append(`
                        <li>
                        <div style="position: relative;display: flex;justify-content: flex-end;margin-bottom: 5rem;">
                            <a href="${this.$axios.defaults.baseURL}${upload_data.file}" target="_blank">Cliquer pour voir le fichier <i class="material-icons" style="font-size:15px;position: relative;top: 3px;">remove_red_eye</i></a>
                        </div>
                        </li>`);
            }
        } else {
            if (ficher == "png" || ficher == "jpg" || ficher == "jpeg" || ficher == "webp" || ficher == "svg") {
                $('.chat'+upload_data.conversation+' .chat-history ul').append(`
                        <li>
                        <div style="position: relative;display: flex;justify-content: flex-start;margin-bottom: 5rem;">
                            <img src="${this.$axios.defaults.baseURL}${upload_data.file}" style="height: 10rem;width: 10rem;object-fit: contain;">
                        </div>
                        </li>`);
            } else {
                $('.chat'+upload_data.conversation+' .chat-history ul').append(`
                        <li>
                        <div style="position: relative;display: flex;justify-content: flex-start;margin-bottom: 5rem;">
                            <a href="${this.$axios.defaults.baseURL}${upload_data.file}" target="_blank">Cliquer pour voir le fichier <i class="material-icons" style="font-size:15px;position: relative;top: 3px;">remove_red_eye</i></a>
                        </div>
                        </li>`);
            }
        }
      },
  },
  head: {
    title: "Messagerie - Transnet",
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
