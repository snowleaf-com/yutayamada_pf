<template>
  <v-container px-5 mb-15 fruid dull-height>
    <v-row justify="center" align-content="center">
      <v-col cols="12" sm="10" md="10" lg="10">
        <h1 class="text-center font1">Skills</h1>
      </v-col>
    </v-row>

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
        if(timesRun === 10) {
            clearInterval(this.interval);
            return;
        }
        timesRun += 1;
        this.items.forEach( item => {
          if (item.value !== item.limit) {
            item.value += 10
          }
        });
      }, 300)
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
        color: 'orange',
        src: require('@/assets/images/html-5.svg'),
        limit: 70,
        value: 0,
      },
      {
        title: 'CSS',
        comment: '',
        color: 'blue',
        src: require('@/assets/images/css-3.svg'),
        limit: 50,
        value: 0,
      },
      {
        title: 'Sass',
        comment: '',
        color: '#e29fbd',
        src: require('@/assets/images/sass.svg'),
        limit: 50,
        value: 0,

      },
      {
        title: 'PHP',
        comment: '',
        color: '#4F5D95',
        src: require('@/assets/images/php.svg'),
        limit: 70,
        value: 0,

      },
      {
        title: 'JavaScript',
        comment: '',
        color: '#f1e05a',
        src: require('@/assets/images/javascript.svg'),
        limit: 50,
        value: 0,

      },
      {
        title: 'Laravel',
        comment: '',
        color: '#fc817f',
        src: require('@/assets/images/laravel.svg'),
        limit: 60,
        value: 0,

      },
      {
        title: 'Vue.js',
        comment: '',
        color: '#199f4b',
        src: require('@/assets/images/vue.svg'),
        limit: 40,
        value: 0,

      },
      {
        title: 'MySQL',
        comment: '',
        color: '#124e78',
        src: require('@/assets/images/mysql.svg'),
        limit: 60,
        value: 0,

      },
      {
        title: 'AmazonWebService',
        comment: '',
        color: '#f6b33f',
        src: require('@/assets/images/ss7.svg'),
        limit: 50,
        value: 0,

      },
      {
        title: 'Docker',
        comment: '',
        color: '#59acf3',
        src: require('@/assets/images/docker-icon.svg'),
        limit: 50,
        value: 0,

      },
      {
        title: 'Git',
        comment: '',
        color: '#f18080',
        src: require('@/assets/images/git-icon.svg'),
        limit: 30,
        value: 0,

      },
      {
        title: 'AdobeXD',
        comment: '',
        color: '#F82CF4',
        src: require('@/assets/images/adobexd.svg'),
        limit: 50,
        value: 0,

      },
    ]
  })
  }
</script>
