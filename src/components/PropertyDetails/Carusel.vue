<template>
    <div>
        <v-carousel hide-delimiter-background cycle
          interval="3000" show-arrows-on-hover height="350">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            src="../../assets/c1.jpg"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >
            <div class="overlay">
              <v-btn small text class="btnShare">
                <v-icon left>mdi-thumb-up</v-icon>
                Like {{ i }}</v-btn>
              <v-btn @click="dialog = !dialog" small text class="btnViewPhotos">
                <v-icon left>mdi-camera</v-icon>
                View Photos</v-btn>
            </div>
            </v-carousel-item>
        </v-carousel>
        <v-dialog fullscreen v-model="dialog" width="500">
            <v-card>
              <v-card-title class="headline white" primary-title>
                <v-spacer></v-spacer>
                <v-btn color="pink" large icon @click="dialog = false">
                  X
                </v-btn>
              </v-card-title>
              <v-card-text>
                <Gallery />
              </v-card-text>
            </v-card>
          </v-dialog>
    </div>
</template>
<script>
import Gallery from '@/components/PropertyDetails/dialogGallery.vue';

export default {
  name: 'Carusel',
  components: {
    Gallery,
  },
  data() {
    return {
      dialog: false,
      items: [
        {
          src: '../../assets/q1.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
    .overlay{
      width: 100%!important;
      height: 100%;

        .btnShare {
          background: rgba(255, 255, 255, 0.2)!important;
          color: black!important;
          float: right;
          margin: 15px;
        }

        .btnViewPhotos {
          border: 2px solid rgb(255, 255, 255)!important;
          background-color: white;
          color: black;
          float: right;
          margin: 15px;
        }

    }
</style>
