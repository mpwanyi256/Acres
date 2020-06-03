<template>
    <div>
      <Barnner />
      <FeaturedList />
    </div>
</template>

<script>
import Barnner from '@/components/landing/Barnner.vue';
import FeaturedList from '@/components/landing/FeaturedListing.vue';

export default {
  components: {
    Barnner,
    FeaturedList,
  },
};
</script>
<style lang="scss" scoped>
  .mainContainer {
    margin: 0px none !important;
    width: 100%!important;
    height: 100%!important;
  }
</style>
