<template>
      <div>
        <v-navigation-drawer v-model="drawer" app absolute temporary>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  ACRES
                </v-list-item-title>
                <v-list-item-subtitle>
                  Your Property Solutions Patner
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
              <v-list-item v-for="item in authRoutes" :key="item.name" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item v-if="!authState" @click="openDialog">
                <v-list-item-icon>
                  <v-icon>mdi-arrow-left</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Login</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="authState" @click="logoutUser">
                <v-list-item-icon>
                  <v-icon class="red--text">mdi-arrow-right</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

        <v-app-bar light app color="white" elevation="1" class="black--text navBar">
          <v-app-bar-nav-icon @click="drawer=true" light
            class="d-flex d-sm-none"></v-app-bar-nav-icon>
            <router-link to="/" style="cursor: pointer;text-decoration: none;">
              <div class="d-flex align-center font-weight-light black--text">
                  <v-img alt="Vuetify Logo" class="shrink mr-2"
                  contain src="../assets/logo.png"
                  transition="scale-transition" width="50"/>
                  ACRES
              </div>
            </router-link>

            <v-spacer></v-spacer>
            <div class="d-none d-sm-flex">
              <v-btn class="black--text" dark text v-for="link in authRoutes" :key="link.path">
                {{ link.name }}
              </v-btn>
              <template v-if="!authState">
                <v-btn @click="openDialog" small text class="black--text">
                    <span class="mr-2">Log in</span>
                </v-btn>
              </template>
              <template v-if="authState">{{ authState.provider }}
                <v-btn @click="logoutUser" small text class="red--text">
                    <span class="mr-2">Logout</span>
                </v-btn>
              </template>
            </div>
            <AuthDialog v-if="dialog" @closeAuthDialog="closeAuthModal" />
        </v-app-bar>
      </div>
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
      drawer: false,
      dialog: false,
    };
  },

  computed: {
    ...mapGetters('auth', ['authUser', 'routes']),

    authRoutes() {
      return this.routes;
    },

    authState() {
      return this.authUser;
    },
  },

  methods: {
    ...mapActions('auth', ['authLogout']),

    logoutUser() {
      this.authLogout();
    },

    openDialog() {
      this.dialog = true;
    },

    closeAuthModal() {
      this.dialog = false;
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
