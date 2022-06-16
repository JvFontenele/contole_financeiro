<template>
  <v-app dark>
    <div class="d-flex justify-end">
      <v-avatar @click="mudarTema()" class="mt-5 mr-5" color="grey" size="32">
        <v-icon color="white">{{
          this.$vuetify.theme.isDark
            ? "mdi-weather-sunny"
            : "mdi-weather-sunny-off"
        }}</v-icon></v-avatar
      >
    </div>
    <v-main class="d-flex justify-center align-center">
      <v-container>
        <v-row justify="center" align="center">
          <Nuxt />
        </v-row>
      </v-container>
    </v-main>
    <v-footer>
      <span class="mx-auto"
        >&copy; {{ new Date().getFullYear() }} - JvFontenele</span
      >
    </v-footer>
  </v-app>
</template>
<script>
export default {
  methods: {
    mudarTema() {
      console.log(this.$vuetify.theme);
      if (!this.$vuetify.theme.isDark) {
        this.$vuetify.theme.isDark = true;
      } else {
        this.$vuetify.theme.isDark = false;
      }
    },
  },
};
</script>
<style></style>
