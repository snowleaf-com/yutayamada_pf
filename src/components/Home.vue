<template>
  <v-parallax
    light
    src="@/assets/images/611895_m.jpg"
    size
    class="parallax-background"
    height="550"
    contain
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="font1 mb-4">{{ title }}</h1>
        <h4 class="font1">{{ subTitle }}</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        title: "YutaYamada's Portfolio",
        subTitle: "Welcome to my portfolio!",

      }
    }
  }
</script>

<style scoped>
.parallax-background {
  background-size: cover; /* または contain */
  background-position: center;
  background-repeat: no-repeat;
}
</style>