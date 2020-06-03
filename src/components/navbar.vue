<template>
        <v-app-bar light app color="white" elevation="1" class="black--text navBar">
          <router-link to="/" style="cursor: pointer;text-decoration: none;">
            <div class="d-flex align-center font-weight-light black--text">
                <v-img alt="Vuetify Logo" class="shrink mr-2"
                contain src="../assets/logo.png"
                transition="scale-transition" width="50"/>
                ACRES
            </div>
          </router-link>

        <v-spacer></v-spacer>
        <template v-if="!authState">
          <v-btn @click="openDialog" small text class="black--text">
              <span class="mr-2">Log in</span>
          </v-btn>
        </template>
        <template v-if="authState">
          {{ authState }}
          <v-btn @click="logoutUser" small text class="red--text">
              <span class="mr-2">Logout</span>
          </v-btn>
        </template>
        <AuthDialog v-if="dialog" />
        </v-app-bar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import AuthDialog from '@/components/Generics/LoginDialog.vue';

export default {
  name: 'Navbar',

  components: {
    AuthDialog,
  },

  data() {
    return {
      //
    };
  },

  computed: {
    ...mapGetters(['authUser', 'authDialog']),

    dialog() {
      return this.authDialog;
    },

    authState() {
      return this.authUser;
    },
  },

  methods: {
    ...mapActions(['authLogout', 'openAuthDialog']),

    logoutUser() {
      this.authLogout();
    },

    openDialog() {
      this.openAuthDialog();
    },
  },

};
</script>
<style scoped>
  .navBar {
      background-color: transparent !important;
      color: black;
  }
</style>
