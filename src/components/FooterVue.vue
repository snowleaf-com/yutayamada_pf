<template>
  <v-footer
    padless
    light
  >
    <v-card
      class="text-center"
      width="100%"
      color="#FAFAFA"
    >
      <v-card-text>
          <v-btn
            v-for="(icon,i) in icons"
            :key="i"
            class="mx-4"
            icon
            :href="icon.link"
            target="_blank"
          >
              <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
      </v-card-text>


      <v-divider></v-divider>

      <v-card-text class="font1">
        {{ new Date().getFullYear() }} — <strong>YutaYamada's Portfolio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'FooterVue',
    data: () => ({
      icons: [
        {
          icon: 'mdi-github',
          link: 'https://github.com/snowleaf-com'
        },
        {
          icon: 'mdi-youtube',
          link: 'https://www.youtube.com/@snowleafDIY'
        },
        {
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/y2_____/'
        },
        {
          icon: 'mdi-wordpress',
          link: 'https://snow-leaf.com'
        },
      ],
    }),
  }
</script>