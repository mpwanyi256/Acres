<template>
    <div class="mx-auto searchArea">
        <Listing class="listing" />
        <mapView class="map" />
    </div>
</template>
<script>
import Listing from '@/components/Search/ListingItem.vue';
import mapView from '@/components/Search/Map.vue';

export default {
  components: {
    Listing,
    mapView,
  },
};
</script>
<style scoped lang="scss">
    .searchArea {
        display: grid;

        @media screen and (max-width: 300px) {
            grid-template-columns: 100% 0%;
        }
        @media screen and (max-width: 500px) {
            grid-template-columns: 100% 0%;
        }
        @media screen and (min-width: 500px) {
            grid-template-columns: 60% 40%;
        }

        .Listing {
            position: relative !important;
            z-index: 2 !important;
            box-sizing: border-box;
        }
        .map {
            position: relative;
            width: 100%;
            height: 100%;
        }
    }
</style>
