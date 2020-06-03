<template>
    <v-container>
      <SearchArea />
        <div class="featured">
            <h2>Featured</h2>
            <v-btn class="ma-2" small outlined color="featBtn">
                1 Bedroom</v-btn>
            <v-btn class="ma-2" small outlined color="featBtn">
                2 Bedroom</v-btn>
            <v-btn class="ma-2" small outlined color="featBtn">
                3 Bedroom</v-btn>

            <v-container>
                <v-row>
                    <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4" v-for="i in 6" :key="i">
                        <PropertyListItem />
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-container>
</template>
<script>
import PropertyListItem from '@/components/Generics/PropertyListItem.vue';
import SearchArea from '@/components/landing/SearchArea.vue';

export default {
  name: 'FeaturedList',

  components: {
    PropertyListItem,
    SearchArea,
  },

};
</script>
<style scoped>
    .featured {
        padding: 15px!important;
    }
    .featBtn {
        cursor: pointer !important;
        text-align: center !important;
        border: 1px solid rgb(176, 176, 176) !important;
        outline: currentcolor none medium !important;
        margin: 0px !important;
        background-color: rgb(255, 255, 255) !important;
        border-radius: 30px !important;
        color: rgb(34, 34, 34) !important;
        /* font-family: Circular, -apple-system, BlinkMacSystemFont,
        Roboto, Helvetica Neue, sans-serif !important; */
        position: relative !important;
        padding: 8px 16px !important;
        font-size: 12px !important;
        line-height: 16px !important;
        font-weight: inherit;
        -webkit-appearance: v-btn;
    }
</style>
