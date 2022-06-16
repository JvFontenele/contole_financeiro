<!-- ~/pages/sign-in -->
<template>
  <v-card width="500">
    <v-card-title class="headline primary white--text font-weight-bold">
      Login
    </v-card-title>
    <v-card-text>
      <v-text-field class="mt-4" v-model="email" label="Email" />
      <v-text-field
        class="mt-2"
        type="password"
        v-model="password"
        label="password"
      />
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-btn class="mr-2 mb-2" @click="submit()" color="primary">
        <v-icon class="mr-2">mdi-login-variant</v-icon> logar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.$supabase.auth
        .signIn({
          email: this.email,
          password: this.password,
        })
        .then(({ error, data }) => {
          if (error) {
            alert(error.message);
          } else {
            this.$router.push("/");
          }
        });
    },
  },
};
</script>
