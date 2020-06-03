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
