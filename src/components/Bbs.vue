<template>
    <v-container px-5 mb-15 fruid>
      <v-row justify="center" align-content="center">
        <v-col cols="12" xs="7" sm="7" md="7" lg="7" align="center">
          <h1 class="text-center font1">{{ title }}</h1>
          <h3 class="text-center text-content mb-5">{{ introduce2 }}</h3>
          <Form @post-success="success"></Form>
          <transition name='post-alert'>
            <v-alert v-show='post_success' type="success">内容が投稿されました！</v-alert>
          </transition>
        </v-col>
      </v-row>

      <v-row justify="center" align-content="center">
        <v-col cols="12" xs="7" sm="7" md="7" lg="7" xl="6" align="left">
          <v-list three-line>
            <transition-group name="comment">

            <template v-for="post in posts.slice().reverse()">
              <!-- <v-list-item
                :key="post.id"
              >

                <v-list-item-content>
                  <v-list-item-subtitle>
                    {{post.name}}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="text--primary subheading">{{post.cont}}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    {{post.created.toDate().toLocaleString()}}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                </v-list-item-action>
              </v-list-item> -->
            </template>
            </transition-group>
          </v-list>

        </v-col>
      </v-row>

    </v-container>
</template>

<script>
// import Form from './Form';
// import firebase from 'firebase'


//   export default {
//     name: 'Bbs',
//     data() {
//       return {
//         title: 'BBS',
//         introduce: 'Please write your comment!',
//         introduce2: 'firebaseを使用し、試験的に運用しています。',
//         posts: [],
//         post_success: false
//       }
//     },
//     computed: {
//       dense() {
//         return this.$vuetify.breakpoint.smAndDown;
//       },
//     },
//     components: {
//       Form
//     },
//     created() {
//       firebase.firestore().collection("posted_data").where("id", ">=", 1)
//         // .orderBy('id', 'desc')
//         .onSnapshot(function(querySnapshot) {
//           querySnapshot.forEach(function(doc){
//             let id_ary = [];
//             this.posts.forEach(function(post) {
//               id_ary.push(post.id);
//               console.log(post);
//             });
//             if(id_ary.indexOf(doc.data().id) == -1) {
//               this.posts.push(doc.data());
//             }
//           }.bind(this));
//         }.bind(this));
//     },
//     methods: {
//       success(value) {
//         this.post_success = value;
//       }
//     }

//   }
</script>

<style lang="scss" scoped>
  .center {
    justify-content: center;

    &--strong {
      font-weight: bold;
    }
  }
  .post-alert-enter-active, .post-alert-leave-active {
    transition: opacity 2s, transform 1.5s;
  }
  .post-alert-enter {
    opacity: 0;
  }
  .post-alert-leave-to {
    opacity: 0;
  }

  .comment-enter-active, .comment-leave-active {
    transition: opacity 1s, transform 2s;
  }
  .comment-enter {
    opacity: 0;
    transform: translateX(100px);
  }
  .comment-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
</style>