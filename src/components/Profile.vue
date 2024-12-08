<template>
  <v-container px-5 mb-15 fruid dull-height>
    <v-row justify="center" align-content="center">
      <v-col cols="12" xs="7" sm="10" md="9" lg="10">
        <h1 class="text-center font1">{{ title }}</h1>
        <v-card tag="div" class="py-3">
          <v-card-actions class="justify-center">
            <v-avatar
              class="profile"
              size="20%"
              rounded="lg">
              <v-img src="@/assets/images/prof.jpeg">
              </v-img>
            </v-avatar>
          </v-card-actions>
          <v-card-title class="py-2">
            <h2 class="font1">{{ name }}</h2>
          </v-card-title>
          <v-card-text>
            <h4 class="font1">(yy.dec5@gmail.com)</h4>
          </v-card-text>
          <v-card-text>
            <div class="text-left">
                <span class="text-content">
                  <p>
                    新卒で機能訓練指導員として介護施設に入職し、3年間にわたり高齢者を対象としたリハビリ指導や運動プログラムの作成を担当。利用者一人ひとりのニーズに応じた支援を提供し、対人スキルや課題解決能力を磨きました。
                  </p>
                  <p>
                    その後、運送業界に転職し、4年間従事。さらに同職種で別の企業に転職し、現在も勤務しております。現在は倉庫管理を任され、業務効率化を図るためにシステム開発の勉強を開始。簡単な在庫管理アプリを導入し、棚卸し時間の削減に寄与しました。この経験を通じてシステム開発への関心が高まり、さらに学習を続ける中で、実用的なアプリケーションの制作にも取り組みました。
                  </p>
                  <p>
                    現在、年齢的にもラストチャンスと捉え、システム開発分野への転職を志望しています。これまでの経験で培った課題解決力と業務効率化の視点を活かし、新たな挑戦をしたいと考えています。
                  </p>
                </span>
            </div>
          </v-card-text>
          <div class="px-2">
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
              >
                <v-card
                  :color="item.color"
                  dark
                >
                  <v-card-title class="font1">{{ item.title }}</v-card-title>
                  <v-card-text class="white text--primary pt-5">
                    <p class="font1">{{ item.comment }}</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    computed: {
      dense() {
        return this.$vuetify.breakpoint.smAndDown;
      }
    },
    data: () => ({
      title: 'Profile',
      name: 'Yuta Yamada',
      introduce: {
      },
      items: [
        {
          title: 'Senior High school',
          color: 'black',
          icon: 'fa-school',
          comment: 'Shizuoka Nishi Senior High School'
        },
        {
          title: 'Technical school',
          color: 'black',
          icon: 'fa-bone',
          comment: 'Shizuoka Medical College'
        },
        {
          title: 'Company Employee',
          color: 'black',
          icon: 'fa-user-nurse',
          comment: 'Judo Therapist / Functional training instructor'
        },
        {
          title: 'Company Employee',
          color: 'black',
          icon: 'fa-truck-moving',
          comment: 'Medium Truck Driver'
        },
        {
          title: 'Company Employee',
          color: 'black',
          icon: 'fa-industry',
          comment: 'Heavy Truck Driver / Warehouse Manager'
        },
        {
          title: '2021.1〜',
          color: 'black',
          icon: 'fa-code',
          comment: 'I began to study programming'
        },
      ],
    }),
    name: 'Profile',
  }
</script>

<style>
</style>