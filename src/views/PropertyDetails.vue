<template>
    <div>
        <Carusel />
        <Description />
    </div>
</template>
<script>
import Carusel from '@/components/PropertyDetails/Carusel.vue';
import Description from '@/components/PropertyDetails/Description.vue';

export default {

  components: {
    Carusel,
    Description,
  },

};
</script>
<style scoped>
  .mainContainer {
    margin: 0px none !important;
    width: 100%!important;
    height: 100%!important;
  }
</style>
