<template>
    <v-container>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="7" lg="7">
                <About />
                <ReserveSnack />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="5" lg="5">
                <Booking/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import About from '@/components/PropertyDetails/aboutProperty.vue';
import ReserveSnack from '@/components/Generics/bookingSnackbar.vue';
import Booking from '@/components/PropertyDetails/PropertyBooking.vue';

export default {
  name: 'Description',

  components: {
    About,
    ReserveSnack,
    Booking,
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style scoped lang="scss">
    .mainDsecriptionDiv {
        display: grid;
        @media only screen and (max-width: 360px) {
        grid-template-columns: 100% 100%;
        }
        grid-template-columns: 70% 30%;
    }
</style>
