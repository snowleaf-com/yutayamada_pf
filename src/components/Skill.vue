<template>
  <v-container px-5 mb-15 fruid dull-height>
    <v-row justify="center" align-content="center">
      <v-col cols="12" sm="10" md="10" lg="10">
        <h1 class="text-center font1">Skills</h1>
      </v-col>
    </v-row>

    <v-expansion-panels class="mb-2">
      <v-expansion-panel>
        <v-expansion-panel-header class="font1">
          スキルレベルについて（自己採点）
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-tabs>
            <!-- Tabs for switching content -->
            <v-tab>
              <v-icon left>mdi-note</v-icon>
              25
            </v-tab>
            <v-tab>
              <v-icon left>mdi-note</v-icon>
              50
            </v-tab>
            <v-tab>
              <v-icon left>mdi-note</v-icon>
              75
            </v-tab>
            <v-tab>
              <v-icon left>mdi-note</v-icon>
              100
            </v-tab>

            <!-- Tab items with content -->
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  初学者レベル - 基本的な文法や使い方は理解しているが、応用は難しい段階。
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  基礎的なタスクをこなせるレベル - 個人開発で活用経験があり、小規模なシステムを構築可能。
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  実務を想定したレベル - 業務での使用を想定し、チーム開発でも問題なく対応できると想定。
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  経験豊富なプロフェッショナルレベル - 豊富な経験と実績があり、高度な要件にも柔軟に対応可能。
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row justify="center" align-content="center">
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12" sm="6" md="4" lg="4" xl="4"
      >
        <v-card
          :color="item.color"
          dark
          class="mx-auto"
          max-width="500"
        >
          <div class="d-flex flex-no-wrap justify-space-around">
            <v-avatar
              class="ma-3"
              size="70"
              tile
            >
              <v-img contain :src="item.src">
                <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                ><v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
                </template>
              </v-img>
            </v-avatar>


            <div>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
              <v-progress-circular
                :rotate="-90"
                :size="70"
                :width="10"
                :value="item.value"
                color="primary"
              >
                {{ item.value }}
              </v-progress-circular>

              </v-row>

            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>





<script>
  export default {
    mounted () {
      let timesRun = 0;
      this.interval = setInterval(() => {
        if(timesRun === 15) {
            clearInterval(this.interval);
            return;
        }
        timesRun += 1;
        this.items.forEach( item => {
          if (item.value !== item.limit) {
            item.value += 5
          }
        });
      }, 50)
    },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  data: () => ({
    interval: {},
    items: [
      {
        title: 'HTML',
        comment: '',
        color: '#F9A489',
        src: require('@/assets/images/html-5.svg'),
        limit: 75,
        value: 0,
      },
      {
        title: 'CSS',
        comment: '',
        color: '#6FAAD6',
        src: require('@/assets/images/css-3.svg'),
        limit: 75,
        value: 0,
      },
      {
        title: 'PHP',
        comment: '',
        color: '#B2B9D8',
        src: require('@/assets/images/php.svg'),
        limit: 75,
        value: 0,
        
      },
      {
        title: 'Laravel',
        comment: '',
        color: '#FF8E87',
        src: require('@/assets/images/laravel.svg'),
        limit: 50,
        value: 0,
      },
      {
        title: 'JavaScript',
        comment: '',
        color: '#FFF3A6',
        src: require('@/assets/images/javascript.svg'),
        limit: 75,
        value: 0,
        
      },
      {
        title: 'TypeScript',
        comment: '',
        color: '#80ACDE',
        src: require('@/assets/images/Typescript_logo_2020.svg'),
        limit: 50,
        value: 0,
      },
      {
        title: 'React.js',
        comment: '',
        color: '#A8EAFD',
        src: require('@/assets/images/React-icon.svg'),
        limit: 50,
        value: 0,
      },
      {
        title: 'Next.js',
        comment: '',
        color: '#6D6D6D',
        src: require('@/assets/images/Nextjs-logo.svg'),
        limit: 50,
        value: 0,
      },
      {
        title: 'Vue.js',
        comment: '',
        color: '#9FDEC3',
        src: require('@/assets/images/vue.svg'),
        limit: 50,
        value: 0,

      },
      {
        title: 'MySQL',
        comment: '',
        color: '#8BB1C8',
        src: require('@/assets/images/mysql.svg'),
        limit: 75,
        value: 0,

      },
      {
        title: 'AmazonWebService',
        comment: '',
        color: '#FFC966',
        src: require('@/assets/images/ss7.svg'),
        limit: 50,
        value: 0,

      },
      {
        title: 'Docker',
        comment: '',
        color: '#84C3F2',
        src: require('@/assets/images/docker-icon.svg'),
        limit: 75,
        value: 0,

      },
      {
        title: 'Git',
        comment: '',
        color: '#F59A80',
        src: require('@/assets/images/git-icon.svg'),
        limit: 75,
        value: 0,

      },
      {
        title: 'Adobe XD',
        comment: '',
        color: '#FFA3F8',
        src: require('@/assets/images/adobexd.svg'),
        limit: 50,
        value: 0,
      },
      {
        title: 'Adobe Illustrator',
        comment: '',
        color: '#FFC766',
        src: require('@/assets/images/Adobe_Illustrator_CC_icon.svg'),
        limit: 75,
        value: 0,
      },
      {
        title: 'Adobe Photoshop',
        comment: '',
        color: '#8CCBFF',
        src: require('@/assets/images/Adobe_Photoshop_CC_icon.svg'),
        limit: 50,
        value: 0,
      },
    ]
  })
  }
</script>
<style>
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right) > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev {
    display: none; /* 完全に非表示にする */
}
</style>