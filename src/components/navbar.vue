<template>
        <v-app-bar light app color="white" elevation="1"
        class="black--text navBar">
          <div to="/" style="cursor: pointer;" class="d-flex align-center font-weight-light">
              <v-img alt="Vuetify Logo" class="shrink mr-2"
              contain src="../assets/logo.png"
              transition="scale-transition" width="50"/>
              ACRES
          </div>

        <v-spacer></v-spacer>

        <v-btn to="/Login" small text class="black--text">
            <span class="mr-2">Log in</span>
        </v-btn>

        <v-btn small text class="black--text">
            <span class="mr-2">Sign up</span>
        </v-btn>
        </v-app-bar>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>
<style scoped>
  .navBar {
      background-color: transparent !important;
      color: black;
  }
</style>
