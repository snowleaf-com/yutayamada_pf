<template>
  <v-app>
    <v-main>
      <header-vue></header-vue>
      <router-view></router-view>
      <footer-vue></footer-vue>
    </v-main>
  </v-app>
</template>

<script>
  import FooterVue from './components/FooterVue';
  import HeaderVue from "./components/HeaderVue";

  export default {
    name: 'App',
    data() {
      return {
        name: '',
        comment: '',
        now: ''
      }
    },
    components: {
      HeaderVue,
      FooterVue
    },
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@900&display=swap");

  html {
    overflow: overlay;
  }
  html::-webkit-scrollbar {
    width: 16px;
  }
  html::-webkit-scrollbar-track:hover {
    background: #fff;
  }

  html::-webkit-scrollbar-thumb:hover {
    background: #3e3a3a;
    border: 1px solid #fff;
  }


  .font1 {
    font-family: 'MuseoModerno', 'M PLUS 1p', sans-serif;;
  }

  .text-content {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    line-height: 1.5rem;
  }

</style>
