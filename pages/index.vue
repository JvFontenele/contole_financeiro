<template>
  <v-card width="600">
    <v-card-title class="headline">
      Aplicação web construida com Vuetify + Nuxt.js
    </v-card-title>
    <v-card-text>
      <p>
        <span color="red">Vuetify</span>
        -descricao
      </p>

      <p>
        Thank you for developing with Vuetify and I look forward to bringing
        more exciting features in the future.
      </p>
      <div class="text-xs-right">
        <em><small>&mdash; John Leider</small></em>
      </div>
      <hr class="my-3" />

      <br />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" nuxt to="/main"> Continue </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
