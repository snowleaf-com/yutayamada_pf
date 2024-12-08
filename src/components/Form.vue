<template>
  <div class="py-3 mb-4">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="text-content align-center"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          :block="dense"
        >
          投稿フォームを開く
        </v-btn>

      </template>
      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn class="text-content" icon @click="dialogs()">
            <v-icon size="24px">fa-times</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col cols="12" md="8">
                  <v-text-field
                    label="お名前"
                    required
                    outlined
                    counter="20"
                    v-model="form_data.name"
                    :rules="[rules.required, rules.nameCounter]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    label="コメント"
                    required
                    outlined
                    counter="255"
                    v-model="form_data.cont"
                    :rules="[rules.required, rules.commentCounter]"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" align="center">
                  <v-btn class="text-content" color="blue" style="color:white" light @click="submit_form"
                         :block="dense" :disabled="!valid">投稿する
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from 'firebase'

  export default {
    name: 'Form',
    data() {
      return {
        dialog: false,
        valid: true,
        form_data : {
          name: '',
          cont: '',
        },
        id_last: '0',
        rules: {
          required: value => !!value || '入力してください。',
          nameCounter: value => value.length <= 20 || '最大20文字までです。',
          commentCounter: value => value.length <= 255 || '最大255文字までです。',
        },
        post_message: false
      }
    },
    computed: {
      dense() {
        return this.$vuetify.breakpoint.smAndDown;
      },
    },
    methods: {
      dialogs() {
        this.dialog = false;
      },
      clear() {
        this.$refs.form.reset()
      },
      submit_form() {
        const now = new Date();
        this.id_last = Number( Number(this.id_last) + 1);

        firebase.firestore().collection("posted_data").add({
          id: this.id_last,
          name: this.form_data.name.trim(),
          cont: this.form_data.cont.trim(),
          created: now
        });

        this.dialogs()
        this.clear()
        this.$emit('post-success', true);
        setTimeout(() => {
          this.$emit('post-success', false)
        }, 2500)
      }
    },
    created() {
      firebase.firestore().collection("posted_data").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          if(Number(doc.data().id) > Number(this.id_last)) {
            this.id_last = doc.data().id
          }
        }.bind(this));
      }.bind(this));
    },


  }
</script>