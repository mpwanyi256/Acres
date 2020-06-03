<template>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-card-title class="authDialog">
                Select Signin Option
                <v-spacer></v-spacer>
                 <v-btn icon small @click="closeDialog">
                     <v-icon>mdi-close</v-icon>
                 </v-btn>
                </v-card-title>
                <v-card-text class="authDialogBody">
                    <section id="firebaseui-auth-container"></section>
                </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

export default {
  name: 'AuthDialog',

  data() {
    return {
      dialog: true,
    };
  },

  methods: {
    closeDialog() {
      this.$emit('closeAuthDialog');
    },
  },

  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    const uiConfig = {
      signInSuccessUrl: '/profile',
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };
    ui.start('#firebaseui-auth-container', uiConfig);
  },
};
</script>
<style scoped>
    .authDialog {
        background-color: rgb(255,255,255)!important;
    }
    .authDialogBody {
        background-color: transparent!important;
    }
</style>
