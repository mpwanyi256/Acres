<template>
  <div class="text-center d-flex d-sm-none d-none d-sm-flex d-md-none">
    <v-fab-transition>
        <v-btn @click="dialog = true"
        v-show="!hidden" color="pink" dark fixed
        small bottom right fab>
        <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-fab-transition>
  </div>
</template>


<script>
export default {
  name: 'ReserveSnack',
  data: () => ({
    hidden: true,
    multiLine: true,
    snackbar: true,
    text: 'Reserve Now',
  }),
};
</script>
