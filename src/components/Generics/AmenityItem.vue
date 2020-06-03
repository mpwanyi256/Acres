<template>
    <v-row>
        <v-col cols="12" xs="12">
            <div class="amenityHolder" v-for="amenity in amenities" :key="amenity.title">
                <div class="icon">
                    <v-icon>mdi-home</v-icon>
                </div>
                <div class="description">
                    <div>
                        <span class="subtitle-2 font-weight-medium">
                            {{ amenity.title }}
                        </span>
                    </div>
                    <div>
                        <span class="font-weight-light body-1">
                            {{ amenity.description }}
                        </span>
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
</template>
<script>
export default {
  name: 'Amenity',
  props: {
    amenities: {
      type: Array,
    },
  },
};
</script>
<style scoped lang="scss">
    .amenityHolder {
        display: grid;
        grid-template-columns: 5% 95%;
        box-sizing: border-box;
        margin-top: 16px!important;
        font-family: sans-serif;
        font-size: 14px;
        line-height: 1.43;
        color: #484848;

        .icon{
            border-spacing: 0px !important;
            font-weight: normal !important;
            font-size: 14px;
            line-height: 1.43;
            color: #484848;
        }

        .description {
            display: table-cell !important;
            width: 100% !important;
            vertical-align: top !important;
            box-sizing: border-box;
            border-spacing: 0px !important;
            font-family: sans-serif;
            font-size: 14px;
            line-height: 1.43;
            color: #484848;

            .amenityTitle {
                margin: 0px !important;
                overflow-wrap: break-word !important;
                font-family: sans-serif !important;
                font-size: 16px !important;
                font-weight: 100 !important;
                line-height: 1.375em !important;
                color: rgb(48, 48, 48) !important;
            }

            .amenityDescription {
                margin: 0px !important;
                overflow-wrap: break-word !important;
                font-family: sans-serif !important;
                font-size: 16px !important;
                font-weight: 100 !important;
                line-height: 1.375em !important;
                color: rgb(72, 72, 72) !important;
            }

        }

    }
</style>
