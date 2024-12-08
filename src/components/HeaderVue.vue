<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      flat
      color="#FAFAFA"
      dense
      light
      sizes="(max-height: 500px) 1000px"
    >
      <v-tooltip bottom :disabled="tooltips">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            exact
            to="/"
            depressed
            height="100%"
            tile
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>fa-home</v-icon>
          </v-btn>
        </template>
        <span>Home</span>
      </v-tooltip>


      <v-spacer></v-spacer>

      <v-tooltip bottom :disabled="tooltips">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            exact
            to="/profile"
            depressed
            height="100%"
            tile
            text
            v-bind="attrs"
            v-on="on">
            <v-icon>fa-address-card</v-icon>
          </v-btn>
        </template>
        <span>Profile</span>
      </v-tooltip>

      <v-tooltip bottom :disabled="tooltips">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            exact
            to="/works"
            depressed
            height="100%"
            tile
            text
            v-bind="attrs"
            v-on="on">
            <v-icon>fa-briefcase</v-icon>
          </v-btn>
        </template>
        <span>Works</span>
      </v-tooltip>

      <v-tooltip bottom :disabled="tooltips">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            exact
            to="/skills"
            depressed
            height="100%"
            tile
            text
            v-bind="attrs"
            v-on="on">
            <v-icon>fa-code</v-icon>
          </v-btn>
        </template>
        <span>Skills</span>
      </v-tooltip>

<!--      <v-tooltip bottom :disabled="tooltips">-->

<!--        <template v-slot:activator="{ on, attrs }">-->
<!--          <v-btn-->
<!--            exact-->
<!--            to="/bbs"-->
<!--            depressed-->
<!--            height="100%"-->
<!--            tile-->
<!--            text-->
<!--            v-bind="attrs"-->
<!--            v-on="on">-->
<!--            <v-icon>mdi-comment-text-multiple-outline</v-icon>-->
<!--          </v-btn>-->
<!--        </template>-->
<!--        <span>BBS</span>-->
<!--      </v-tooltip>-->

    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: 'HeaderVue',
    computed: {
      tooltips() {
        return this.$vuetify.breakpoint.name == 'xs' || this.$vuetify.breakpoint.name == 'sm'
      }
    }
  }
</script>

<style scoped>
  .container {
    max-width: 1000px;
  }
</style>